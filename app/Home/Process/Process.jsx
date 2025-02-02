import React from 'react';
import Line1 from "@/Assets/icons/easy-banking/Line1.svg";
import Line2 from "@/Assets/icons/easy-banking/Line2.svg";
import Line3 from "@/Assets/icons/easy-banking/Line3.svg";
import Line4 from "@/Assets/icons/easy-banking/Line4.svg";
import Card1 from "@/Assets/icons/card_1.svg";
import Card2 from "@/Assets/icons/card_2.avif";
import Card3 from "@/Assets/icons/card_3.svg";
import Bridge from "@/Assets/icons/easy-banking/Bridge.svg";
import Image from 'next/image';

const Process = () => {
    return (
        <div className="px-4 py-16 md:px-40">
            {/* Philosophy Header */}
            <div className="text-center mb-24">
                <p className="text-[#1F80F0] text-lg font-bold tracking-wide mb-4">OUR PHILOSOPHY</p>
                <h1 className="text-[2.5rem] md:text-6xl font-semibold text-[#1a2b6b]">Human-centred innovation</h1>
            </div>

            {/* Technology Diagram */}
            <div className="relative mb-12 grid grid-cols-3 gap-14">
                {/* AI Box */}
                <div className="flex flex-col items-center justify-center gap-4 px-12 bg-gradient-to-r from-[#E3F3FF] to-[#FAFAFA] col-span-1 rounded-2xl z-20">
                    <div className='rounded-xl drop-shadow-xl shadow-[#E3F3FF] px-10 py-3 mt-16 bg-white text-center'>
                        <p className="text-[#1F80F0] text-sm font-semibold mb-2">CORE TECH</p>
                        <h3 className="text-[#1a2b6b] text-2xl font-semibold mb-2">Artificial Intelligence</h3>
                    </div>
                    <p className="text-gray-500 text-xs text-center leading-relaxed px-6">
                        Using AI/ML to upgrade legacy processes, reduce cost, and improve efficiency
                    </p>
                </div>

                <div className="flex items-center justify-between gap-4 px-12 py-8 bg-gradient-to-l from-[#E9F6FF] to-[#FAFAFA] col-span-2 rounded-2xl">
                    {/* Blockchain Box */}
                    <div className='w-[220px] flex flex-col items-center justify-center gap-4 rounded-2xl z-50'>
                        <div className='w-full rounded-xl drop-shadow-xl shadow-[#E3F3FF] p-6 mt-12 bg-white text-center'>
                            <p className="text-orange-500 text-sm font-medium mb-2">MECHANISM</p>
                            <h3 className="text-[#1a2b6b] text-xl font-bold">Blockchain</h3>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            Enhanced security by eliminating intermediaries
                        </p>
                    </div>

                    <div className='flex flex-col items-center justify-end gap-32'>
                        {/* Cloud Box */}
                        <div className="w-[360px] flex items-center justify-center gap-4 rounded-2xl z-20">
                            <div className='w-full bg-white rounded-xl drop-shadow-xl shadow-[#E3F3FF] p-6 text-center'>
                                <p className="text-cyan-400 text-sm font-medium mb-2">INFRASTRUCTURE</p>
                                <h3 className="text-[#1a2b6b] text-xl font-bold">Cloud</h3>
                            </div>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                Scale resources easily on-demand
                            </p>
                        </div>

                        {/* Data Box */}
                        <div className="w-[360px] flex items-center justify-center gap-4 rounded-2xl z-20">
                            <div className='w-full bg-white rounded-xl drop-shadow-xl shadow-[#E3F3FF] p-6 text-center'>
                                <p className="text-yellow-500 text-sm font-medium mb-2">RESOURCE</p>
                                <h3 className="text-[#1a2b6b] text-xl font-bold">Data</h3>
                            </div>
                            <p className="text-gray-500 text-xs w-44 leading-relaxed">
                                Valuable, actionable insights from mass data sources
                            </p>
                        </div>
                    </div>
                </div>

                {/* Connection Lines */}
                <Image src={Line1} alt="" className="absolute left-[31.8%] rotate-90 top-40 z-30" />
                <Image src={Line2} alt="" className="absolute right-[35%] -rotate-90 top-52 z-30" />
                <Image src={Line3} alt="" className="absolute right-[35%] -rotate-90 top-16 z-30" />
                <Image src={Line4} alt="" className="absolute right-[20%] rotate-90 top-48 z-30" />
                <Image src={Bridge} alt="" className="absolute left-[32.6%] -translate-x-1/2 rotate-90 top-40 z-10" />
            </div>

            {/* Three Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Full-suite solutions */}
                <div className='bg-[#F8FCFF] p-8 rounded-3xl'>
                    <div className="mb-6">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                            <Image src={Card1} alt='card 1' />
                        </div>
                    </div>
                    <h3 className="text-[#1a2b6b] text-xl md:text-2xl font-semibold mb-4">Full-suite solutions</h3>
                    <p className="text-gray-800 pr-10 leading-relaxed">
                        Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.
                    </p>
                </div>

                {/* Simplify the complex */}
                <div className='bg-[#F8FCFF] p-8 rounded-3xl'>
                    <div className="mb-6">
                        <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center">
                            <Image src={Card2} alt='card 2' />
                        </div>
                    </div>
                    <h3 className="text-[#1a2b6b] text-xl md:text-2xl font-semibold mb-4">Simplify the complex</h3>
                    <p className="text-gray-800 pr-10 leading-relaxed">
                        Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.
                    </p>
                </div>

                {/* Cutting-edge tech */}
                <div className='bg-[#F8FCFF] p-8 rounded-3xl'>
                    <div className="mb-6">
                        <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center">
                            <Image src={Card3} alt='card 3' />
                        </div>
                    </div>
                    <h3 className="text-[#1a2b6b] text-xl md:text-2xl font-semibold mb-4">Cutting-edge tech</h3>
                    <p className="text-gray-800 pr-10 leading-relaxed">
                        We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Process;