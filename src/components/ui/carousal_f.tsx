import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import primiumrose from "@/assets/gallery/primiumrose.jpg";
import whitepeonies from "@/assets/gallery/whitepeonies.jpg";
import lavendersprigs from "@/assets/gallery/lavendersprigs.jpg";
import eucalyptus from "@/assets/gallery/eucalyptus1.jpg";
import springtulips from "@/assets/gallery/springtulips.jpg";
import chrysanthemums from "@/assets/gallery/chrysanthemums1.jpg";

const carousal_f = () => {
    return (
        <div className="bg-secondary-light">
            <HorizontalScrollCarousel />
        </div>

    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-40%"]);

    return (
        <section ref={targetRef} className="relative h-[150vh] bg-white">
            <div className="sticky top-0 flex h-[100vh] items-center overflow-hidden bg-white">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[400px] overflow-hidden rounded-lg bg-pink-100 shadow-lg"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="h-3/4 w-full transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-stone-700 bg-pink-100">
                <p className="text-xl font-bold">
                    {card.title}
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                    {card.description}
                </p>
            </div>
        </div>
    );
};

export default carousal_f;

const cards = [
    {
        url: primiumrose,
        title: "Premium Roses",
        description: "Fresh cut roses in various colors, perfect for weddings and special events.",
        id: 1,
    },
    {
        url: whitepeonies,
        title: "White Peonies",
        description: "Elegant seasonal peonies with full, luxurious blooms and delicate fragrance.",
        id: 2,
    },
    {
        url: lavendersprigs,
        title: "Lavender Sprigs",
        description: "Aromatic lavender stems, ideal for rustic and romantic arrangements.",
        id: 3,
    },
    {
        url: eucalyptus,
        title: "Eucalyptus",
        description: "Fresh eucalyptus branches providing beautiful greenery and natural scent.",
        id: 4,
    },
    {
        url: springtulips,
        title: "Spring Tulips",
        description: "Vibrant tulips in seasonal colors, bringing joy to any arrangement.",
        id: 5,
    },
    {
        url: chrysanthemums,
        title: "Chrysanthemums",
        description: "Classic chrysanthemums with lasting beauty and versatile styling options.",
        id: 6,
    },
];