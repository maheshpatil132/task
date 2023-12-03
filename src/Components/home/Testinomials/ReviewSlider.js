import React, { useState } from 'react'
import ReviewCard from './ReviewCard'
import { motion, AnimatePresence, MotionConfig } from "framer-motion"

const ReviewSlider = ({ direction }) => {
    const initialX = 0; // Initial x position when not hovering
    const hoverX = direction === 'LR' ? '10%' : '-10%'; // X position when hovering

    const [isHovered, setIsHovered] = useState(false);

    const handleHoverStart = () => {
        setIsHovered(true);
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
    };

    return (
        <div className='overflow-hidden'>
            <AnimatePresence>
                <MotionConfig transition={{ duration: 20, repeat: 'Infinity' }}>
                    <motion.div
                        initial={{ x: initialX }}
                        animate={{ x: isHovered ? null : hoverX }}
                        whileHover={{ x: initialX }}
                        onHoverStart={handleHoverStart}
                        onHoverEnd={handleHoverEnd}
                        className=' my-5 flex gap-5'>
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </motion.div>
                </MotionConfig>
            </AnimatePresence>
        </div>
    )
}

export default ReviewSlider