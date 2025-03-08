import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [filteredGadgets, setFilteredGadgets] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGadgets(data);
        setFilteredGadgets(data);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setCategory(category);
    if (category === "all") {
      setFilteredGadgets(gadgets);
    } else {
      setFilteredGadgets(
        gadgets.filter((gadget) => gadget.category.toLowerCase() === category)
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-bold mb-10">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 ">
        <div className="flex flex-col bg-slate-100 h-80 gap-4 font-serif">
          <button className="btn" onClick={() => handleCategoryClick("all")}>
            All Books
          </button>
          <button className="btn" onClick={() => handleCategoryClick("phone")}>
            Academic
          </button>
          <button className="btn" onClick={() => handleCategoryClick("laptop")}>
            Novel
          </button>
          <button
            className="btn"
            onClick={() => handleCategoryClick("earphone")}
          >
            Reasearch Paper
          </button>
        </div>

        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-serif">
          {filteredGadgets.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
