'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

export default function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="2xl:max-w-[1280px] px-4  mx-auto w-full py-8 relative"
    >
      <div className="footer-gradient" />
      <div className="py-8 relativeflex flex-col gap-8">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Enter the Metaverse
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] sm:pb-4"
          >
            <img
              src="https://raw.githubusercontent.com/adrianhajdin/project_metaverse/9e9767aefdc3a15b759f0debad5df63c8ce671e6/public/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white ">
              Enter Metaverse
            </span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] mt-4 h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">METAVERUS</h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2021 - 2022 Metaversus. All rights reserved.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
