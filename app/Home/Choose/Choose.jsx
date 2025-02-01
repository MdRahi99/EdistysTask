'use client';
import choose_1 from "@/Assets/frames/choose_1.webp";
import choose_2 from "@/Assets/frames/choose_2.avif";
import choose_3 from "@/Assets/frames/choose_3.avif";
import choose_4 from "@/Assets/frames/choose_4.jpg";
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const chooseData = [
    {
        id: 1,
        title: "Customer focused",
        category: "CUSTOMER FOCUSED",
        heading: "Purpose-built financial services",
        description: "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
        subDescription: "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
        image: choose_1
    },
    {
        id: 2,
        title: "Agile and adaptable",
        category: "AGILE AND ADAPTABLE",
        heading: "Agile and adaptable for growth",
        description: "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
        subDescription: "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
        image: choose_2
    },
    {
        id: 3,
        title: "Compliance ready",
        category: "COMPLIANCE READY",
        heading: "Manage compliance with ease",
        description: "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
        subDescription: "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
        image: choose_3
    },
    {
        id: 4,
        title: "Secure and safe",
        category: "SECURE AND SAFE",
        heading: "Highly secure and safe",
        description: "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
        subDescription: "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
        image: choose_4
    }
];

const Choose = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [direction, setDirection] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Handle touch events for mobile swipe
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && activeTab < chooseData.length) {
            setDirection(1);
            setActiveTab(prev => prev + 1);
        }
        if (isRightSwipe && activeTab > 1) {
            setDirection(-1);
            setActiveTab(prev => prev - 1);
        }
    };

    const handleTabClick = (id) => {
        setDirection(id > activeTab ? 1 : -1);
        setActiveTab(id);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            zIndex: 0,
        }),
        visible: {
            x: 0,
            opacity: 1,
            zIndex: 1,
            transition: {
                x: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
                opacity: { duration: 0.5 }
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? -500 : 500,
            opacity: 0,
            zIndex: 0,
            transition: {
                x: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
                opacity: { duration: 0.2 }
            }
        })
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-4 md:px-8 md:py-16">
            <div className="text-center mb-12">
                <h3 className="text-[#1F80F0] font-semibold text-lg mb-4">TECHNOLOGY BUILT FOR YOU</h3>
                <h2 className="text-4xl md:text-6xl font-semibold text-navy-900 mb-8">The future of finance</h2>

                {/* Tabs - Hidden on mobile */}
                <div className="hidden md:flex flex-wrap justify-center gap-8 mb-8">
                    {chooseData.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleTabClick(item.id)}
                            className={`px-12 py-2.5 text-lg text-[#1F80F0] font-bold rounded-full transition-all duration-300 ${activeTab === item.id
                                    ? 'bg-[#B9D9FF]'
                                    : 'bg-transparent hover:bg-slate-100'
                                }`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>

                {/* Content - Same for both mobile and desktop */}
                <div
                    className="min-h-[400px] overflow-hidden shadow-2xl rounded-3xl shadow-[#e3e2e2]"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        {chooseData.map((item) => (
                            activeTab === item.id && (
                                <motion.div
                                    key={item.id}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="visible"
                                    exit="exit"
                                    className="grid grid-cols-1 md:grid-cols-2 py-4 px-4 md:py-12 md:px-14 gap-8 items-center justify-center w-full"
                                >
                                    <div className="text-left">
                                        <h4 className="text-[#1F80F0] font-semibold mb-8">{item.category}</h4>
                                        <h3 className="text-3xl md:text-5xl font-semibold text-navy-900 mb-8">{item.heading}</h3>
                                        <p className="text-gray-700 font-bold mb-8">{item.description}</p>
                                        <p className="text-gray-600 text-lg">{item.subDescription}</p>
                                    </div>
                                    <div className="rounded-3xl">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-contain rounded-3xl"
                                        />
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Choose;