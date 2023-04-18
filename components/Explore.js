'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import ExploreCard from './ExploreCard';
import { TitleText, TypingText } from './CustomText';

export default function Explore() {
  const [active, setActive] = useState('world-2');
  return (
    <section id="explore" className="sm:p-16 xs:p-6 px-6 py-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col"
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidded" />
              to explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
