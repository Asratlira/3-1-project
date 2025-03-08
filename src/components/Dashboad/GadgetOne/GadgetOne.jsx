import { useState } from "react";

const GadgetOne = ({ gadget, onRemove }) => {
  const { product_image, product_title, price, description } = gadget;
  const [showModal, setShowModal] = useState(false);

  const handlePurchase = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl mb-4">
        <figure className="p-5">
          <img src={product_image} className="h-[155px]" alt={product_title} />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title">{product_title}</h2>
            <p>Price : {price}</p>
            <p className="py-3">{description}</p>
            <button
              onClick={handlePurchase}
              className="bg-purple-500 p-2 rounded-md text-xl text-black font-bold hover:bg-purple-600 transition-colors font-serif"
            >
              Purchase Now
            </button>
          </div>

          <div className="card-actions flex justify-end">
            <img
              className="w-7 cursor-pointer"
              onClick={onRemove}
              src="https://img.icons8.com/?size=50&id=47258&format=png"
              alt="Remove item"
            />
          </div>
        </div>
      </div>

      {/* Purchase Confirmation Modal */}
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">
              <span className="text-green-500 text-3xl font-bold">
                🎉 Congratulations!
              </span>
            </h3>
            <div className="py-4 text-center">
              <p className="text-2xl mb-4">
                Thanks for purchasing <br /> <strong>{product_title}</strong> !
              </p>
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-xl">
                Your order for {price} has been confirmed.
              </p>
            </div>
            <div className="modal-action">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GadgetOne;
