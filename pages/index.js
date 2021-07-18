import { motion } from "framer-motion";
import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Edison Cristovão Code</title>
        <meta name="description" content="Edison Cristovão Code" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <motion.nav
        className={`flex justify-between w-full px-16 text-1xl ${styles.nav} items-center `}
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="space-x-4">
          <a href="">HOME</a>
          <a href="">ABOUT</a>
        </div>
        <div className="space-x-4">
          <h5>Edison</h5>
        </div>
        <div className="space-x-4">
          <a href="">WORKS</a>
          <a href="">GET IN TOUCH</a>
        </div>
      </motion.nav>

      <div className="relative">
        <div className={`${styles.bgHero} flex justify-center items-center`}>
          <svg
            className={`${styles.svgBg}`}
            viewBox="0 0 2560 1440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="bg-hero" clipPath="url(#clip0)">
              <path
                id="bg-heroline3"
                d="M1267.41 666.294L1267.13 666.71L1267.13 666.71L1267.41 666.294ZM-201.828 404.949C137.424 324.792 379.448 306.724 599.248 350.432C819.05 394.14 1016.68 499.636 1267.13 666.71L1267.68 665.879C1017.2 498.784 819.442 393.199 599.443 349.451C379.442 305.703 137.257 323.804 -202.058 403.976L-201.828 404.949ZM1267.13 666.71C1688.74 947.966 2147.67 1019.85 2660.28 914.971L2660.08 913.991C2147.69 1018.83 1689.05 946.969 1267.68 665.879L1267.13 666.71Z"
                fill="url(#paint0_linear)"
              />
              <path
                id="bg-heroline2"
                d="M1280.46 674.69L1280.38 675.183L1280.38 675.183L1280.46 674.69ZM-167.013 1037.71C109.696 825.695 323.115 710.133 541.546 660.032C759.979 609.929 983.476 625.276 1280.38 675.183L1280.54 674.197C983.607 624.284 759.952 608.91 541.322 659.057C322.691 709.204 109.139 824.862 -167.622 1036.91L-167.013 1037.71ZM1280.38 675.183C1780.18 759.197 2228.31 636.915 2653.07 331.374L2652.49 330.562C2227.92 635.966 1780.05 758.161 1280.54 674.197L1280.38 675.183Z"
                fill="url(#paint1_linear)"
              />
              <path
                id="bg-heroline1"
                d="M1302.45 761.686L1302.46 762.186L1302.46 762.186L1302.45 761.686ZM-58.4344 1374.01C176.6 1116.57 366.325 965.216 572.515 877.42C778.706 789.623 1001.41 765.36 1302.46 762.186L1302.45 761.186C1001.37 764.36 778.5 788.624 572.123 876.5C365.744 964.377 175.905 1115.84 -59.1729 1373.33L-58.4344 1374.01ZM1302.46 762.186C1809.25 756.842 2228.83 557.531 2593.13 181.945L2592.41 181.248C2228.28 556.667 1808.94 755.846 1302.45 761.186L1302.46 762.186Z"
                fill="url(#paint2_linear)"
              />
              <rect
                id="square8"
                x="1491.06"
                y="687"
                width="16"
                height="16"
                rx="2"
                transform="rotate(22.2604 1491.06 687)"
                fill="url(#paint3_linear)"
              />
              <rect
                id="square7"
                x="2143.06"
                y="590"
                width="16"
                height="16"
                rx="2"
                transform="rotate(22.2604 2143.06 590)"
                fill="url(#paint4_linear)"
              />
              <rect
                id="square6"
                x="772"
                y="398.477"
                width="16"
                height="16"
                rx="2"
                transform="rotate(-20.0179 772 398.477)"
                fill="url(#paint5_linear)"
              />
              <rect
                id="square5"
                x="1764.68"
                y="369.691"
                width="16"
                height="16"
                rx="2"
                transform="rotate(91.8123 1764.68 369.691)"
                fill="url(#paint6_linear)"
              />
              <rect
                id="square4"
                x="1078.78"
                y="1029"
                width="16"
                height="16"
                rx="2"
                transform="rotate(80.4128 1078.78 1029)"
                fill="url(#paint7_linear)"
              />
              <rect
                id="square3"
                x="1875.18"
                y="583"
                width="207.755"
                height="207.755"
                rx="4"
                transform="rotate(46.2939 1875.18 583)"
                fill="url(#paint8_linear)"
              />
              <rect
                id="square2"
                x="424.724"
                y="823.12"
                width="48"
                height="48"
                rx="4"
                transform="rotate(124.402 424.724 823.12)"
                fill="url(#paint9_linear)"
              />
              <rect
                id="square1"
                x="1240.56"
                y="302"
                width="72"
                height="72"
                rx="4"
                transform="rotate(25.1155 1240.56 302)"
                fill="url(#paint10_linear)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="2694.3"
                y1="723.019"
                x2="2497.01"
                y2="1375.11"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C33333" />
                <stop offset="1" stopColor="#AD2A2A" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="2605.53"
                y1="142.317"
                x2="2692.48"
                y2="818.031"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C33333" />
                <stop offset="1" stopColor="#AD2A2A" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear"
                x1="2513.02"
                y1="4.21925"
                x2="2717.65"
                y2="654.05"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C33333" />
                <stop offset="1" stopColor="#AD2A2A" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear"
                x1="1507.06"
                y1="687"
                x2="1491.06"
                y2="703"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C33333" />
                <stop offset="1" stopColor="#AD2A2A" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear"
                x1="2159.06"
                y1="590"
                x2="2143.06"
                y2="606"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C33333" />
                <stop offset="1" stopColor="#AD2A2A" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear"
                x1="788"
                y1="398.477"
                x2="772"
                y2="414.477"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C33333" />
                <stop offset="1" stopColor="#AD2A2A" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear"
                x1="1780.68"
                y1="369.691"
                x2="1764.68"
                y2="385.691"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C33333" />
                <stop offset="1" stopColor="#AD2A2A" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint7_linear"
                x1="1094.78"
                y1="1029"
                x2="1078.78"
                y2="1045"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C33333" />
                <stop offset="1" stopColor="#AD2A2A" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint8_linear"
                x1="2082.94"
                y1="583"
                x2="1875.18"
                y2="790.755"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C33333" />
                <stop offset="1" stopColor="#AD2A2A" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint9_linear"
                x1="472.724"
                y1="823.12"
                x2="424.724"
                y2="871.12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C33333" />
                <stop offset="1" stopColor="#AD2A2A" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint10_linear"
                x1="1312.56"
                y1="302"
                x2="1240.56"
                y2="374"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C33333" />
                <stop offset="1" stopColor="#AD2A2A" stopOpacity="0" />
              </linearGradient>
              <clipPath id="clip0">
                <rect width="2560" height="1440" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <section
        className={`container flex flex-col md:flex-row items-center mx-auto ${styles.hero} `}
      >
        <div className="flex-grow ">
          <motion.h1
            className="text-7xl text-brand-whiteNormal"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            Edison Cristovão
          </motion.h1>
          <motion.h3
            className="text-5xl text-brand-redBlack text-right"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2 }}
          >
            Creative Developer
          </motion.h3>
          <motion.h3
            className="text-5xl text-brand-redBlack text-left mb-16"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 3 }}
          >
            FrontEnd Engineer
          </motion.h3>
          <div className="relative">
            <a className={styles.square} href="">
              Works
            </a>
          </div>
        </div>
        <div className="flex justify-center flex-grow z-10">
          <img
            src="images/assets/bioPhoto.jpg"
            alt="Picture of the author"
            width="450"
          />
        </div>
      </section>
    </div>
  );
}
