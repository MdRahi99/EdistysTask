'use client';
import React, { useState } from 'react';
import WaveLinesDesktop1 from "@/Assets/backgrounds/WaveLinesDesktop1.svg";
import WaveLinesDesktop2 from "@/Assets/backgrounds/WaveLinesDesktop2.svg";
import WaveLinesDesktop3 from "@/Assets/backgrounds/WaveLinesDesktop3.svg";
import WaveLinesDesktop4 from "@/Assets/backgrounds/WaveLinesDesktop4.svg";
import chevronRightWhite from "@/Assets/icons/ChevronRightWhite.svg";
import chevronRight from "@/Assets/icons/ChevronRight.svg";
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative overflow-hidden">
            {/* Reversed Curved Background */}
            <div className="absolute inset-x-0 bottom-0 h-[30rem] bg-blue-600 transform skew-y-6 origin-left">
                <Image
                    src={WaveLinesDesktop1}
                    alt="Wave pattern 1"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    priority
                />
                <Image
                    src={WaveLinesDesktop2}
                    alt="Wave pattern 2"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
                />
                <Image
                    src={WaveLinesDesktop3}
                    alt="Wave pattern 3"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
                />
                <Image
                    src={WaveLinesDesktop4}
                    alt="Wave pattern 4"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start justify-center px-4 py-16 md:px-40 md:py-40">
                <div className="text-left">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Legacy no longer</h1>
                    <p className="text-lg text-gray-200 mb-8">Talk to us to find out how we can transform your organisation for the future</p>
                    <Link
                        href="/contact"
                        className={`flex items-center justify-center gap-2.5 border text-lg text-white p-2.5 w-full md:w-40 font-semibold rounded transition-all duration-200 bg-[#FE8B53] border-[#FE8B53]`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Contact Us
                        <Image
                            src={chevronRightWhite}
                            alt="chevron right"
                            className={`h-3.5 w-3.5 transition-all duration-300 ${isHovered ? 'translate-x-1.5' : 'translate-x-0'
                                }`}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;