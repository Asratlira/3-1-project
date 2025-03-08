import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreCart, getStoreCartWish } from "../../Utilities/Utilities";
import Gadget from "../Gadget/Gadget";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GadgetOne from "./GadgetOne/GadgetOne";

const Dashboard = () => {
  const [addCart, setCart] = useState([]);
  const allGadget = useLoaderData();
  useEffect(() => {
    const storedListCart = getStoreCart();
    const storedListCartint = storedListCart.map((id) => parseInt(id));
    const allCartList = allGadget.filter((gadget) =>
      storedListCartint.includes(gadget.product_id)
    );

    setCart(allCartList);
  }, []);
  const [addWish, setWish] = useState([]);
  const allWish = useLoaderData();
  useEffect(() => {
    const storedListCartWish = getStoreCartWish();
    const storedListCartWishint = storedListCartWish.map((id) => parseInt(id));
    const allCartListWish = allWish.filter((gadget) =>
      storedListCartWishint.includes(gadget.product_id)
    );

    setWish(allCartListWish);
  }, []);
  const handleAddToCart = () => {
    {
      addCart.map((gadget) => (
        <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
      ));
    }
  };
  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((gadget) => gadget.product_id !== productId)
    );
  };
  const handleRemoveFromWish = (productId) => {
    setWish((prevCart) =>
      prevCart.filter((gadget) => gadget.product_id !== productId)
    );
  };

  return (
    <div>
      <div className="  bg-violet-500 h-[250px]   mb-10">
        <h1 className="text-center text-3xl text-white font-bold mt-5 py-10 font-serif">
          Dashboard
        </h1>
        <p className="text-center text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between mb-5">
          <h1 className="text-3xl font-serif font-bold">Cart</h1>
        </div>
        <Tabs>
          <TabList className="text-2xl font-serif font-bold">
            <Tab>Add to cart</Tab>
            <Tab>Wish List</Tab>
            <div className="border-t-2 "></div>
          </TabList>

          <TabPanel>
            <div>
              {addCart.map((gadget) => (
                <GadgetOne
                  key={gadget.product_id}
                  gadget={gadget}
                  onRemove={() => handleRemoveFromCart(gadget.product_id)}
                ></GadgetOne>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            {addWish.map((gadget) => (
              <GadgetOne
                key={gadget.product_id}
                gadget={gadget}
                onRemove={() => handleRemoveFromWish(gadget.product_id)}
              ></GadgetOne>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
