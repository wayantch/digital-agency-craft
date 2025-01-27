import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Homepage = () => {
  return (
    <>
      <div className="px-6 lg:px-20">
        <header className="flex justify-between py-40">
          <div>
            <h1 className="font-bold lg:text-xl">
              We Are <span className="font-normal">Digital Agency</span>
            </h1>
            <h1 className="font-bold text-4xl lg:text-9xl max-w-4xl">
              <span className="font-light">Be</span> Better & Built{" "}
              <span className="font-light">Different.</span>
            </h1>
          </div>
          <div className="space-y-2 lg:space-y-8">
            {["instagram", "dribble", "twitter"].map((icon) => (
              <img
                key={icon}
                src={`/assets/icons/${icon}.png`}
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
        <div className="absolute -top-20 lg:-top-40 right-16 lg:right-40 w-32 lg:w-64 h-24 lg:h-40 bg-blue-950">
          <div className="absolute transform -translate-x-1/2 -top-1/2 left-1/2 w-20 h-20 lg:w-40 lg:h-40 bg-blue-400 rounded-full outline-8 outline-[#F5F5F5] flex items-center justify-center">
            <h1 className="text-center lg:font-bold lg:text-2xl text-[#F5F5F5]">
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
            backgroundImage: "url(/assets/images/images.jpg)",
            width: "100vw",
            maxWidth: "1120px",
            height: "500px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}>
          <div
            className="flex items-end w-full h-full px-6 lg:px-20 py-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <div className="text-white mb-4 flex flex-wrap items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/logo/logo.png"
                  width={70}
                  alt="Craft Logo"
                  className="bg-white rounded-lg shadow outline-1 outline-slate-200 p-2"
                />
                <p className="font-bold text-4xl italic">Craft</p>
              </div>
              <div className="flex items-center gap-4 mt-5 lg:mt-0 lg:gap-20">
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
        <section className="mt-20 text-white px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-end">
            <div className="text-4xl lg:text-5xl">
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

        <section className="mt-20 px-6 lg:px-20">
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
                  src={`/assets/icons/${service.icon}.png`}
                  width={30}
                  alt={service.label}
                />
                <h1 className="font-semibold text-lg">{service.label}</h1>
              </div>
            ))}
          </div>
        </section>

        {/* Highlight Section */}
        <section className="mt-10 lg:px-20">
          <div className="w-full bg-slate-800">
            <img
              src="/assets/images/images.jpg"
              className="w-full object-cover h-96"
              alt=""
            />
            <div className="flex flex-wrap justify-between items-center p-6 lg:p-10">
              <h1 className="text-white lg:w-[70%] lg:text-lg">
                We are dedicated to providing exceptional solutions for your
                business needs. Let's create something extraordinary together!
              </h1>
              <button className="px-8 py-3 mt-5 bg-blue-600 text-white shadow text-lg rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="mt-20 px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="text-white">
              <h1 className="font-bold text-4xl lg:text-5xl">
                Designed to Inspire
              </h1>
              <h1 className="font-light mb-5 text-4xl lg:text-5xl">
                Built with Excellence
              </h1>
              <p className="lg:text-lg text-justify">
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
                src="/assets/images/images2.jpg"
                width={500}
                className="ml-auto rounded-lg"
                alt="Passion Image"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="mt-20 px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-end">
          <div className="">
            <h1 className="font-light text-4xl lg:text-5xl">Our Recent</h1>
            <h1 className="font-bold text-4xl lg:text-5xl">Client Works</h1>
          </div>
          <div className="">
            <p className="lg:text-lg text-gray-600">
              We're proud to have worked with a variety of clients from
              different industries. From small startups to large enterprises,
              we've helped them achieve their goals and grow their business.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          <div className="w-full bg-gray-200 relative">
            <div className="p-5">
              <img src="/assets/images/client.png" alt="" />
            </div>
            <div className="absolute inset-0 opacity-0 hover:opacity-90 transition-opacity duration-300 backdrop-blur-sm bg-slate-900 bg-opacity-50">
              <div className="flex justify-center items-center h-full">
                <div className="text-center text-white">
                  <h1 className="font-light text-2xl lg:text-4xl lg:mb-2">
                    Course App
                  </h1>
                  <h1 className="font-semibold text-2xl lg:text-5xl mb-5 lg:mb-10">
                    SomethingNew
                  </h1>
                  <div className="w-24 h-24 lg:w-52 lg:h-52 flex justify-center items-center rounded-full bg-blue-600 mx-auto outline-8 outline-white">
                    <h1 className="lg:text-3xl lg:font-semibold">See Details</h1>
                  </div>
                  <div className="flex justify-between items-center mt-10 lg:mt-20">
                    <p className="lg:text-lg lg:font-semibold">Project</p>
                    <p className="lg:text-lg lg:font-semibold">3 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 relative">
            <div className="p-5">
              <img src="/assets/images/client2.png" alt="" />
            </div>
            <div className="absolute inset-0 opacity-0 hover:opacity-90 transition-opacity duration-300 backdrop-blur-sm bg-slate-900 bg-opacity-50">
              <div className="flex justify-center items-center h-full">
                <div className="text-center text-white">
                  <h1 className="font-light text-2xl lg:text-4xl lg:mb-2">
                    Course App
                  </h1>
                  <h1 className="font-semibold text-2xl lg:text-5xl mb-5 lg:mb-10">
                    SomethingNew
                  </h1>
                  <div className="w-24 h-24 lg:w-52 lg:h-52 flex justify-center items-center rounded-full bg-blue-600 mx-auto outline-8 outline-white">
                    <h1 className="lg:text-3xl lg:font-semibold">See Details</h1>
                  </div>
                  <div className="flex justify-between items-center mt-10 lg:mt-20">
                    <p className="lg:text-lg lg:font-semibold">Project</p>
                    <p className="lg:text-lg lg:font-semibold">3 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
