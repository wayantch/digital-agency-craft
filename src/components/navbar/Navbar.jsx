import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="px-20 py-5">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <img
                                src="/src/assets/logo/logo.png"
                                width={40}
                                alt=""
                            />
                            <h1 className="font-bold text-2xl italic">Craft</h1>
                        </div>
                        <div className="">
                            <ul className="flex gap-10 items-center text-lg">
                                <Link>Our Works</Link>
                                <Link>Services</Link>
                                <Link>About Us</Link>
                            </ul>
                        </div>
                        <div className="flex items-center px-8 py-3 bg-white shadow outline-1 outline-slate-200 text-lg rounded-lg gap-2">
                            <button className="">Contact Us</button>
                            <img
                                src="/src/assets/icons/phone-call.png"
                                width={20}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
