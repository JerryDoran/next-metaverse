'use client';

import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

export default function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="padding-x py-8 relative"
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="innerWidth mx-auto flex justify-between gap-8">
        <img
          src="https://raw.githubusercontent.com/adrianhajdin/project_metaverse/9e9767aefdc3a15b759f0debad5df63c8ce671e6/public/search.svg"
          alt="search"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          METAVERSES
        </h2>
        <img
          src="https://raw.githubusercontent.com/adrianhajdin/project_metaverse/9e9767aefdc3a15b759f0debad5df63c8ce671e6/public/menu.svg"
          alt="menu"
        />
      </div>
    </motion.nav>
  );
}
