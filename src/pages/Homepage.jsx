import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Homepage = () => {
  return (
    <>
      <div className="px-20">
        <header className="flex justify-between py-40">
          <div>
            <h1 className="font-bold text-xl">
              We Are <span className="font-normal">Digital Agency</span>
            </h1>
            <h1 className="font-bold text-9xl max-w-4xl">
              <span className="font-light">Be</span> Better & Built{" "}
              <span className="font-light">Different.</span>
            </h1>
          </div>
          <div className="space-y-8">
            {["instagram", "dribble", "twitter"].map((icon) => (
              <img
                key={icon}
                src={`/src/assets/icons/${icon}.png`}
                width={50}
                alt={icon}
                className="p-2 bg-white rounded-lg shadow outline-1 outline-slate-200"
              />
            ))}
          </div>
        </header>
      </div>

      <div className="bg-blue-950 relative py-10">
        {/* Let's Talk Section */}
        <div className="absolute -top-40 right-40 w-64 h-40 bg-blue-950">
          <div className="absolute transform -translate-x-1/2 -top-1/2 left-1/2 w-40 h-40 bg-blue-400 rounded-full outline-8 outline-[#F5F5F5] flex items-center justify-center">
            <h1 className="text-center font-bold text-2xl text-[#F5F5F5]">
              Let's Talk
            </h1>
          </div>
          <div
            className="absolute transform -translate-x-1/2 -bottom-80 left-1/2 w-1 h-64 rounded-b-2xl"
            style={{
              background: "linear-gradient(to bottom, #1e3a8a, #ffffff)",
            }}>
            <IoIosArrowDropdownCircle
              size={30}
              color="#fff"
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
            />
            <div className="absolute -bottom-32 transform -translate-x-1/2 w-40 left-2 text-center">
              <h1 className="text-white text-lg font-semibold">Explore More</h1>
              <h1 className="text-gray-300">Scroll Down</h1>
            </div>
          </div>
        </div>

        {/* Banner Section */}
        <div
          className="relative"
          style={{
            backgroundImage: "url(/src/assets/images/images.jpg)",
            width: "1120px",
            height: "500px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}>
          <div
            className="flex items-end w-full h-full px-20 py-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <div className="text-white mb-4 flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/logo/logo.png"
                  width={70}
                  alt="Craft Logo"
                  className="bg-white rounded-lg shadow outline-1 outline-slate-200 p-2"
                />
                <p className="font-bold text-4xl italic">Craft</p>
              </div>
              <div className="flex items-center gap-20">
                {[
                  { title: "We Are Bassed in", value: "Indonesia & London" },
                  { title: "Has Complete", value: "100+ Project" },
                ].map((item, index) => (
                  <React.Fragment key={index}>
                    {index !== 0 && (
                      <div className="w-[2px] h-10 bg-slate-300"></div>
                    )}
                    <div>
                      <h1>{item.title}</h1>
                      <h1 className="font-bold">{item.value}</h1>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="mt-20 text-white px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="text-5xl">
              <h1 className="font-semibold">Best Services</h1>
              <h1 className="font-light">For Customers</h1>
            </div>
            <p className="text-lg">
              <strong>We are</strong> ready to help you to move forward and grow{" "}
              <strong>your business</strong>. With us, your problem will be
              solved.
            </p>
          </div>
        </section>

        <section className="mt-20 px-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {[
              { icon: "marketing", label: "Digital Marketing" },
              { icon: "multimedia", label: "Visual Design" },
              { icon: "ux", label: "UI/UX Design" },
              { icon: "code", label: "Development" },
            ].map((service, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-2 w-full py-4 bg-slate-700 text-white text-center">
                <img
                  src={`/src/assets/icons/${service.icon}.png`}
                  width={30}
                  alt={service.label}
                />
                <h1 className="font-semibold text-lg">{service.label}</h1>
              </div>
            ))}
          </div>
        </section>

        {/* Highlight Section */}
        <section className="mt-10 px-20">
          <div className="w-full bg-slate-800">
            <img
              src="/src/assets/images/images.jpg"
              className="w-full object-cover h-96"
              alt=""
            />
            <div className="flex justify-between items-center p-10">
              <h1 className="text-white w-[70%] text-lg">
                We are dedicated to providing exceptional solutions for your
                business needs. Let's create something extraordinary together!
              </h1>
              <button className="px-8 py-3 bg-blue-600 text-white shadow text-lg rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="mt-20 px-20">
          <div className="grid grid-cols-2 gap-5">
            <div className="text-white">
              <h1 className="font-bold text-5xl">Designed to Inspire</h1>
              <h1 className="font-light mb-5 text-5xl">
                Built with Excellence
              </h1>
              <p className="text-lg">
                We strive to innovate and deliver solutions that empower your
                business. Together, we can achieve greatness and make a lasting
                impact. Our team of experts is dedicated to providing you with
                the best possible experience, from the initial consultation to
                the final product. We take pride in our work and are committed
                to delivering high-quality results that meet your needs and
                exceed your expectations. Whether you need a website, mobile
                app, or custom software solution, we have the skills and
                expertise to bring your vision to life. Let us help you take
                your business to the next level.
              </p>
            </div>
            <div>
              <img
                src="/src/assets/images/images2.jpg"
                width={500}
                className="ml-auto rounded-lg"
                alt="Passion Image"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="mt-20 px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="">
            <h1 className="font-light text-5xl">Our Recent</h1>
            <h1 className="font-bold text-5xl">Client Works</h1>
          </div>
          <div className="">
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              debitis dolorum odit rem explicabo vitae recusandae id, sit quis
              officia ex dolorem! Voluptatum voluptatibus culpa corporis.
              Nesciunt quidem nam non!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          <div className="w-full bg-gray-200">
            <div className="p-5">
            <img src="/src/assets/images/client.png" alt="" /></div>
          </div>
          <div className="w-full bg-gray-200">
            <div className="p-5">
            <img src="/src/assets/images/client2.png" alt="" /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
