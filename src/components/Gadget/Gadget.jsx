import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_title, product_image, price, product_id } = gadget;
  return (
    <div className="card bg-base-100 w-[80%] sm:w-[85%] md:w-[80%] lg:w-[95%] shadow-xl p-3 mb-6 mx-auto font-serif">
      <figure className="bg-gray-200 py-3">
        <img src={product_image} alt={product_title} className="h-[155px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title py-3">
          {product_title}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <div className="card-actions flex flex-col  py-3 ">
          <p>price : {price}</p>
          <Link to={`/gadgets/${product_id}`}>
            <div className="btn bg-white border mt-3">View Details</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
