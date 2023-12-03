import React, { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard'
import { motion, AnimatePresence, MotionConfig , useAnimationControls } from "framer-motion"

const ReviewSlider = ({ direction }) => {
    const initialX = 0; // Initial x position when not hovering
    const hoverX = direction === 'LR' ? '15%' : '-15%'; // X position when hovering

    const controls = useAnimationControls()

    const [isHovered, setIsHovered] = useState(false);

    const handleHoverStart = () => {
        setIsHovered(true);
        
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
    };


    useEffect(()=>{
        
        // console.log(isHovered);
        if(isHovered){
            controls.stop()
        }else{
            controls.start({
                x: isHovered ? initialX : hoverX  , 
            })
        }

        return () => controls.stop();
    },[isHovered , controls , hoverX])

    return (
        <div className='overflow-hidden w-full'>
            <AnimatePresence>
                <MotionConfig transition={{ duration:10, repeat: 'Infinity' ,ease:'linear' }}>
                    <motion.div
                        initial={{ x: initialX }}
                        animate={controls}
                        exit={{ x: -hoverX }}
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