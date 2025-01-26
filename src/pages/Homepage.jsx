import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Homepage = () => {
    return (
        <>
            <div className="px-20">
                <div className="flex justify-between py-40">
                    <div className="">
                        <h1 className="font-bold text-xl">
                            We Are{" "}
                            <span className="font-normal">Digital Agency</span>
                        </h1>
                        <h1 className="font-bold text-9xl max-w-4xl">
                            <span className="font-light">Be</span> Better &
                            Built <span className="font-light">Different.</span>
                        </h1>
                    </div>
                    <div className="space-y-8 ">
                        <img
                            src="/src/assets/icons/instagram.png"
                            width={50}
                            alt="Instagram"
                            className="p-2 bg-white rounded-lg shadow outline-1 outline-slate-200"
                        />
                        <img
                            src="/src/assets/icons/dribble.png"
                            width={50}
                            alt="Dribble"
                            className="p-2 bg-white rounded-lg shadow outline-1 outline-slate-200"
                        />
                        <img
                            src="/src/assets/icons/twitter.png"
                            width={50}
                            alt="Twitter"
                            className="p-2 bg-white rounded-lg shadow outline-1 outline-slate-200"
                        />
                    </div>
                </div>
            </div>
            <div className=" bg-blue-950 relative py-10">
                <div className="absolute -top-40 right-40 w-64 h-40 bg-blue-950">
                    <div className="absolute transform -translate-x-1/2 -top-1/2 left-1/2 w-40 h-40 bg-blue-400 rounded-full outline-8 outline-[#F5F5F5] flex items-center justify-center">
                        <h1 className="text-center font-bold text-2xl text-[#F5F5F5]">
                            Let's Talk
                        </h1>
                    </div>
                    <div
                        className="absolute transform -translate-x-1/2 -bottom-80 left-1/2 w-1 h-64 rounded-b-2xl flex flex-col justify-end"
                        style={{
                            background:
                                "linear-gradient(to bottom, #1e3a8a, #ffffff)",
                        }}
                    >
                        <IoIosArrowDropdownCircle
                            size={30}
                            color="#fff"
                            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
                        />
                        <div className="absolute -bottom-32 transform -translate-x-1/2 w-40 left-2 text-center">
                            <h1 className="text-white text-lg font-semibold">
                                Explore More
                            </h1>
                            <h1 className="text-gray-300">Scroll Down</h1>
                        </div>
                    </div>
                </div>
                <div
                    className="relative"
                    style={{
                        backgroundImage: "url(/src/assets/images/images.jpg)",
                        width: "1120px",
                        height: "500px",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                    }}
                >
                    <div
                        className="flex items-end w-full h-full px-20 py-10"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    >
                        <div className="text-white mb-4 flex items-center justify-between w-full">
                            <div className="flex items-center gap-4">
                                <img
                                    src="/src/assets/logo/logo.png"
                                    width={70}
                                    alt=""
                                    className="bg-white rounded-lg shadow outline-1 outline-slate-200 p-2"
                                />
                                <p className="font-bold text-4xl italic">
                                    Craft
                                </p>
                            </div>
                            <div className="flex items-center justify-around gap-20">
                                <div className="">
                                    <h1>We Are Bassed in</h1>
                                    <h1 className="font-bold">
                                        Indonesia & London
                                    </h1>
                                </div>
                                <div className="w-[2px] h-10 bg-slate-300"></div>
                                <div className="">
                                    <h1>Has Complete</h1>
                                    <h1 className="font-bold">100+ Project</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 text-white px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="text-5xl">
                            <h1 className="font-semibold">Best Services</h1>
                            <h1 className="font-light">For Customers</h1>
                        </div>
                        <div className="">
                            <p className="text-lg">
                                <strong>We are</strong> ready to help you to
                                move forward and grow{" "}
                                <strong>your bussiness</strong>. With us your
                                problem will be solved
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-20 px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                        <div className="flex justify-center items-center gap-2 w-full py-4 bg-slate-700 text-white text-center">
                          <img src="/src/assets/icons/marketing.png" width={30} alt="" />
                            <h1 className="font-semibold text-lg">Digital Marketing</h1>
                        </div>
                        <div className="w-full py-4 bg-slate-700 text-white text-center">
                            <h1>Visual Design</h1>
                        </div>
                        <div className="w-full py-4 bg-slate-700 text-white text-center">
                            <h1>UI/UX Design</h1>
                        </div>
                        <div className="w-full py-4 bg-slate-700 text-white text-center">
                            <h1>Development</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;
