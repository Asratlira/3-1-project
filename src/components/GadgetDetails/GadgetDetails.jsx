import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreCart, addToStoreCartWish } from "../../Utilities/Utilities";

const GadgetDetails = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  console.log(data);
  const id = parseInt(product_id);
  console.log(id);
  const gadget = data.find((gadget) => gadget.product_id === id);
  console.log(gadget);

  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = gadget;
  const handleAddCart = (id) => {
    addToStoreCart(id);
  };
  const handleAddCartWish = (id) => {
    addToStoreCartWish(id);
  };

  return (
    <div className="  bg-violet-500 h-[400px]  relative mb-[400px] font-serif">
      <h1 className="text-center text-3xl text-white font-bold mt-5 py-10">
        Products Details
      </h1>
      <p className="text-center text-white">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div className="hero bg-base-200 max-w-4xl mx-auto mt-10 mb-60 rounded-xl p-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-1/5">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product_image}
            className="max-w-sm rounded-lg shadow-2xl gap-4"
            alt={product_title}
          />
          <div>
            <h1 className="text-5xl font-bold">{product_title}</h1>
            <p className="py-3">Price: {price}</p>
            <p className="py-3 text-green-500 font-bold">
              {availability ? "In Stock" : "Out of Stock"}
            </p>
            <p className="py-3">{description}</p>

            <div className="py-2">
              <p className="font-bold">Specification:</p>
              {Array.isArray(Specification) ? (
                <ul className="list-disc ml-6">
                  {Specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              ) : (
                <p>{Specification}</p>
              )}
            </div>

            <p className="py-2">Rating: {rating}</p>

            <div className=" flex gap-3">
              {" "}
              <button
                onClick={() => handleAddCart(product_id)}
                className="btn bg-purple-500 rounded-xl text-white flex items-center"
              >
                Add to cart
                <img
                  src="https://img.icons8.com/?size=50&id=9671&format=png"
                  alt="Cart Icon"
                  className="ml-2 w-5"
                />
              </button>
              <button
                onClick={() => handleAddCartWish(product_id)}
                className="btn bg-white rounded-full text-white ml-3"
                aria-label="Another action"
              >
                <img
                  src="https://img.icons8.com/?size=24&id=86721&format=png"
                  alt="Another action icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
