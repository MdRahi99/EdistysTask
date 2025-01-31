import React from 'react';
import Image from 'next/image';
import WaveLinesDesktop1 from "@/Assets/backgrounds/WaveLinesDesktop1.svg";
import WaveLinesDesktop2 from "@/Assets/backgrounds/WaveLinesDesktop2.svg";
import WaveLinesDesktop3 from "@/Assets/backgrounds/WaveLinesDesktop3.svg";
import WaveLinesDesktop4 from "@/Assets/backgrounds/WaveLinesDesktop4.svg";
import banner_people from "@/Assets/backgrounds/banner_people.jpg";

const Banner = () => {
    return (
        <div className="relative w-full h-[600px] overflow-hidden bg-[#1C88EF]">
            {/* Wave pattern backgrounds */}
            <div className="absolute inset-0">
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

            {/* Content container */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-full items-center">
                    {/* Text content */}
                    <div className="w-full md:w-1/2 text-white space-y-6 z-20">
                        <h1 className="text-5xl md:text-[64px] font-bold leading-tight">
                            Embrace the future<br />
                            of finance
                        </h1>
                        <p className="text-lg md:text-xl opacity-90 max-w-[600px] mt-4">
                            Reimagine financial services with AnyTech's open platform,
                            distributed banking solution that powers transformation
                        </p>
                        <div className="mt-8">
                            <button className="bg-[#FF7757] hover:bg-[#ff8d74] text-white px-8 py-3 rounded text-lg transition-colors duration-200 flex items-center gap-2">
                                Reach Out to Us <span className="text-xl">&rsaquo;</span>
                            </button>
                        </div>
                    </div>

                    {/* Image section */}
                    <div className="hidden md:block absolute top-0 right-0 w-[55%] h-full">
                        {/* Diagonal gradient overlay */}
                        <div
                            className="absolute inset-0 z-10"
                            style={{
                                background: 'linear-gradient(to right, #1C88EF 30%, transparent 70%)'
                            }}
                        />
                        <div className="absolute inset-0 z-20 px-8">
                            {/* <div className="relative w-full h-full">
                                <Image
                                    src={banner_people}
                                    alt="Professional in business setting"
                                    fill
                                    className="object-cover"
                                    style={{
                                        objectPosition: 'center right',
                                        transform: 'perspective(1000px) rotateY(-12deg) translateX(10%) scale(1.2)'
                                    }}
                                    priority
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;