import React from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';

const ScrollingCard = ({ src, xOffset, baseWidth }) => {
    const cardX = useTransform(xOffset, (val) => {
        let pos = val % baseWidth;
        if (pos < 0) pos += baseWidth;
        return pos - baseWidth / 2;
    });

    const y = useTransform(cardX, (x) => (Math.pow(x, 2) / 2000));
    const rotate = useTransform(cardX, (x) => x / 50);

    return (
        <motion.div
            className="scroller-item"
            style={{
                x: cardX,
                y,
                rotate,
                position: 'absolute',
                left: '50%',
                marginLeft: '-90px'
            }}
        >
            <img src={src} alt="creator" className="scroller-img" />
        </motion.div>
    );
};

const CreatorScroller = () => {
    const images = [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    ];

    const xOffset = useMotionValue(0);
    const itemWidth = 220;
    const totalWidth = images.length * itemWidth;

    useAnimationFrame((t, delta) => {
        xOffset.set(xOffset.get() + 1.2);
    });

    return (
        <div className="scroller-wrapper" style={{ height: '420px', position: 'relative' }}>
            {images.map((src, i) => (
                <ScrollingCard
                    key={i}
                    src={src}
                    xOffset={useTransform(xOffset, v => v + (i * itemWidth))}
                    baseWidth={totalWidth}
                />
            ))}
        </div>
    );
};

export default CreatorScroller;
