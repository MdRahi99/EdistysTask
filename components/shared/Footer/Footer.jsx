import React from "react";
import logo from "@/Assets/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";

const footerData = {
    companyName: "Any Technology Pte Ltd.",
    copyrightYear: "2023",
    links: [
        { name: "Our Solutions", url: "#" },
        { name: "AnyCaaS", url: "#" },
        { name: "AnyBaaS", url: "#" },
        { name: "AnyPaaS", url: "#" },
        { name: "Privacy Policy", url: "#" },
    ],
};

const Footer = () => {
    return (
        <footer className="text-white text-sm divide-y-2 divide-[#0A2A5C]">
            <div className="bg-[#002045]">
                <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row justify-between gap-8 items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image src={logo} alt="AnyTech Logo" className="h-8" />
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex space-x-6 text-[#00D1D7]">
                        {footerData.links.slice(0, 4).map((link, index) => (
                            <Link key={index} href={link.url} className="hover:text-[#1C76DD] text-lg font-medium">
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-[#00152D]">
                <div className="flex flex-col md:flex-row gap-6 items-center font-bold text-[#1C76DD] max-w-7xl mx-auto justify-between px-6 py-6 text-center text-sm">
                    <p>
                        &copy; {footerData.copyrightYear} All rights reserved.{" "}
                        {footerData.companyName}
                    </p>
                    <Link
                        href={footerData.links[4].url}
                        className="hover:underline"
                    >
                        {footerData.links[4].name}
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
