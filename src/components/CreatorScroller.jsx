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
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
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
