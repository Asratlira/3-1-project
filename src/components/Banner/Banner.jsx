import bannerImg from "../../assets/assets/books.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-violet-400 h-[650px] rounded-xl relative mb-80 ">
        <div className="-mt-16 text-center ">
          <div className="max-w-md">
            <h1 className="text-5xl text-white font-bold">
              Books For Freshen Up Your BookSelf
            </h1>
            <p className="py-6 text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn btn-primary text-white">Shop Now</button>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-1/3">
              <img
                className="max-w-3xl h-96 border-2 p-3 rounded-xl mb-20"
                src={bannerImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
