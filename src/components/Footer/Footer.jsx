const Footer = () => {
  return (
    <div className=" mt-24">
      <div className=" mb-5">
        <h1 className="text-3xl font-bold text-center font-serif py-3">
          Book Heaven
        </h1>
        <p class="text-center py-3">
          Book Heaven Leading the way in cutting-edge technology and innovation.
        </p>
        <div className=" border-b-2 max-w-6xl py-3 mx-auto "></div>
      </div>
      <footer className="footer bg-base-200 text-base-content p-10  font-serif">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
