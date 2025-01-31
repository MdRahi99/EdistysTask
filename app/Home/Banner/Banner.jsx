import React from 'react';
import WaveLinesDesktop1 from "@/Assets/backgrounds/WaveLinesDesktop1.svg";
import WaveLinesDesktop2 from "@/Assets/backgrounds/WaveLinesDesktop2.svg";
import WaveLinesDesktop3 from "@/Assets/backgrounds/WaveLinesDesktop3.svg";
import WaveLinesDesktop4 from "@/Assets/backgrounds/WaveLinesDesktop4.svg";
import banner_people from "@/Assets/backgrounds/banner_people.jpg";
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="relative w-full h-[600px] overflow-hidden bg-[#1C88EF]">
            {/* Background wave patterns */}
            <div className="absolute inset-0">
                <Image
                    src={WaveLinesDesktop1}
                    alt="background pattern"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <Image
                    src={WaveLinesDesktop2}
                    alt="background pattern"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
                />
                <Image
                    src={WaveLinesDesktop3}
                    alt="background pattern"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
                />
                <Image
                    src={WaveLinesDesktop4}
                    alt="background pattern"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
                />
            </div>

            {/* Content container */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-8">
                    {/* Text content */}
                    <div className="text-white space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Embrace the future of finance
                        </h1>
                        <p className="text-lg md:text-xl opacity-90">
                            Reimagine financial services with AnyTech's open platform, distributed
                            banking solution that powers transformation
                        </p>
                        <button className="bg-[#FF7757] hover:bg-[#ff8d74] text-white px-8 py-3 rounded-md text-lg transition-colors">
                            Reach Out to Us
                        </button>
                    </div>

                    {/* Image section */}
                    <div className="hidden md:block relative h-full">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2">
                            <Image
                                src={banner_people}
                                alt="Professional in business attire"
                                className="object-cover rounded-lg"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;