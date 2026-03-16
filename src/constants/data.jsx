import React from 'react';

export const servicesData = [
    {
        title: "Interior Design",
        tagline: "Tailored Solutions",
        desc: "Our interior design services are personalized to reflect your style and preferences. From concept development to the final touches, we ensure that every detail is meticulously crafted to bring your vision to life.",
        icon: (
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15,85 L15,15 L85,15 L85,85" />
                <rect x="30" y="35" width="40" height="30" rx="2" />
                <line x1="30" y1="75" x2="70" y2="75" />
                <path d="M20,15 L20,85 M80,15 L80,85" strokeOpacity="0.3" />
            </svg>
        )
    },
    {
        title: "Bespoke Furniture",
        tagline: "Unique Creations",
        desc: "We design and create custom furniture pieces that perfectly complement your space. Each piece is handcrafted with the finest materials to ensure durability and timeless elegance.",
        icon: (
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M25,75 L75,75 M30,75 L30,45 C30,35 40,25 50,25 C60,25 70,35 70,45 L70,75" />
                <rect x="25" y="45" width="50" height="20" rx="2" />
                <path d="M25,65 L25,85 M75,65 L75,85" />
            </svg>
        )
    },
    {
        title: "Space Planning",
        tagline: "Optimized Spaces",
        desc: "Space planning ensures that every area of your home or office is used efficiently and beautifully. We analyze the available space and design a layout that improves movement, functionality, and comfort.",
        icon: (
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="15" y="15" width="70" height="70" />
                <line x1="15" y1="50" x2="85" y2="50" />
                <line x1="50" y1="15" x2="50" y2="85" />
                <circle cx="32" cy="32" r="4" fill="currentColor" />
            </svg>
        )
    },
    {
        title: "Design Consultancy",
        tagline: "Expert Guidance for Better Interiors",
        desc: "Our design consultancy helps you make the right interior decisions with expert guidance. We assist with layout planning, furniture selection, materials, and color schemes. Our goal is to create a space that is both functional and visually appealing.",
        icon: (
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M50,15 L50,85 M15,50 L85,50" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="35" />
                <path d="M35,35 L65,65 M65,35 L35,65" />
            </svg>
        )
    },
    {
        title: "Construction",
        tagline: "Building Strong Foundations",
        desc: "We provide reliable construction services with high-quality materials and skilled workmanship. Our team ensures every project is built with precision, durability, and attention to detail. From structural work to finishing, we deliver strong and well-crafted spaces.",
        icon: (
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20,80 L20,30 L50,15 L80,30 L80,80 Z" />
                <rect x="40" y="50" width="20" height="30" />
                <path d="M20,50 L80,50" />
            </svg>
        )
    }
];

export const projectList = [
    {
        title: "Office",
        img: "/images/office2.jpeg",
        description: "A comprehensive look into our design philosophy and execution for this space. We focused on blending functionality with aesthetic appeal, resulting in a harmonious environment that speaks volumes.",
        images: [
            "/images/office2.jpeg",
            "/images/office.jpeg"
        ]
    },
    {
        title: "MasterBedRoom",
        img: "/images/Bedroom.jpeg",
        description: "Transforming an industrial warehouse into a sophisticated living space, preserving raw textures while adding modern comfort and designer elements.",
        images: [
            "/images/Bedroom.jpeg",
            "/images/Bedroom2.jpeg",
            "/images/Bedroom3.jpeg",
            "/images/masterbedroom.jpeg"
        ]
    },
    {
        title: "LivingRoom",
        img: "/images/LivingRoom.jpeg",
        description: "A vibrant and eclectic space designed to inspire, featuring custom-built storage for art supplies and a flexible layout for both work and rest.",
        images: [
            "/images/LivingRoom.jpeg",
            "/images/LivingRoom2.jpeg"
        ]
    },
    {
        title: "jewellery Showroom",
        img: "/images/showroom.jpeg",
        description: "Minimalist design meeting functionality in a compact urban setting. This project showcases our ability to maximize space without compromising on style.",
        images: [
            "/images/showroom.jpeg",
            "/images/showroom2.jpeg"
        ]
    },
    {
        title: "Modular kitchen",
        img: "/images/kitchen.jpeg",
        description: "A warm and inviting kitchen space that combines traditional farmhouse elements with modern culinary requirements.",
        images: [
            "/images/kitchen.jpeg",
            "/images/kitchen2.jpeg"
        ]
    },
    {
        title: "Saloon",
        img: "/images/saloon.jpeg",
        description: "Redefining workspace for the modern era. This commercial project focuses on collaborative zones, ergonomic design, and brand-driven aesthetics.",
        images: [
            "/images/saloon.jpeg",
            "/images/saloon1.jpeg",
           
        ]
    }
];


export const showcaseData = [
    {
        type: "text",
        title: "Proven Expertise",
        desc: "Over 5+ years of experience in the industry",
        delay: 0.1,
        className: "black-card"
    },
    {
        type: "image",
        img: "/images/tvunit.jpeg",
        alt: "Wood Design",
        delay: 0.1,
        className: "image-card"
    },
    {
        type: "image",
        img: "/images/office.jpeg",
        alt: "Kitchen Design",
        delay: 0.2,
        className: "image-card wide"
    },
    {
        type: "text",
        title: "Design Excellence",
        desc: "Recognized for innovative designs and dedicated service",
        delay: 0.2,
        className: "black-card"
    },
    {
        type: "text",
        title: "Client Loyalty",
        desc: "95% client retention rate",
        delay: 0.3,
        className: "black-card"
    },
    {
        type: "image",
        img: "/images/showcase3.png",
        alt: "Furniture Design",
        delay: 0.3,
        className: "image-card"
    }
];

export const introData = {
    image: "/images/house2.jpg", // User can change this to their image
    title: "About Us",
    description: "At Aurk Design Studio, we believe that design is not just about making things look good, but about creating spaces that resonate with the soul. We are a collective of passionate architects, dynamic interior designers, and visionary planners."
};

export const heroData = {
    bgImage: "/images/herosection.png",
    stats: [
        { label: "Projects Completed", value: 25, suffix: "+" },
        { label: "Years Experience", value: 5, suffix: "+" },
        { label: "Clients Served", value: 20, suffix: "+" }
    ]
};
