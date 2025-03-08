import React from "react";
import { toast } from "react-toastify";

const getStoreCart = () => {
  const storedCartstr = localStorage.getItem("Add-to-Cart");
  if (storedCartstr) {
    const storedCart = JSON.parse(storedCartstr);
    return storedCart;
  } else {
    return [];
  }
};
const addToStoreCart = (id) => {
  const storedCart = getStoreCart();
  if (storedCart.includes(id)) {
    console.log(id, "already exist");
  } else {
    storedCart.push(id);
    const storedCartstr = JSON.stringify(storedCart);
    localStorage.setItem("Add-to-Cart", storedCartstr);
    toast("This Gadget is added to Cart");
  }
};
const getStoreCartWish = () => {
  const storedWishCartstr = localStorage.getItem("Add-to-Wishlist");
  if (storedWishCartstr) {
    const storedWishCart = JSON.parse(storedWishCartstr);
    return storedWishCart;
  } else {
    return [];
  }
};
const addToStoreCartWish = (id) => {
  const storedWishCart = getStoreCartWish();
  if (storedWishCart.includes(id)) {
    console.log(id, "already exist");
  } else {
    storedWishCart.push(id);
    const storedWishCartstr = JSON.stringify(storedWishCart);
    localStorage.setItem("Add-to-Wishlist", storedWishCartstr);
    toast("This Gadget is added to WishList");
  }
};
export { addToStoreCart, addToStoreCartWish, getStoreCart, getStoreCartWish };
