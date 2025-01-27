import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="px-6 lg:px-20 mt-20 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="flex flex-wrap items-center gap-2 col-span-12 lg:col-span-3">
            <img src="/assets/logo/logo.png" width={100} alt="" />
            <h1 className="font-bold text-7xl italic">Craft</h1>
            <div className="hidden lg:block">
              <p>We are a digital agency that provides web design, web development, and app development services.</p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:mx-auto">
            <h1 className="font-bold text-2xl">Services</h1>
            <ul className="flex flex-col gap-2 mt-5">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile App Development</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          <div className="relative col-span-12 lg:col-span-6">
            <h1 className="font-bold text-2xl">Our Location</h1>
            <div className="mt-5">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.8115503931354!2d106.8113413149118!3d-6.175249395492615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5e6a9bd6f1b%3A0x615b532a7a3c2a6c!2sJl.%20Raya%20Pancoran%20Mas%2C%20Pancoran%20Mas%2C%20Kota%20Depok%2C%20Jawa%20Barat%20416421!5e0!3m2!1sen!2sid!4v1644959312441!5m2!1sen!2sid" width="100%"  className="outline-2 rounded-lg outline-slate-400"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-2 bg-blue-900 text-center mt-2">
        <p className="text-white">Copyright &copy; 2023 Craft</p>
      </div>
    </footer>
  );
};

export default Footer;

