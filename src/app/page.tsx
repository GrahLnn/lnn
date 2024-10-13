"use client";
import Image from "next/image";
import cn from "classnames";
import Link from "next/link";
import Timeline from "./components/timeline";
import { motion } from "framer-motion";

export default function Home() {
  const itmes = ["Tool", "Dataset", "About", "Write"];
  return (
    // <main className="flex flex-col flex-grow items-center justify-center px-24 py-12">
    //   <div
    //     className={cn(
    //       "relative z-[-1] flex place-items-center",
    //       "before:absolute before:-z-20 before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-['']",
    //       "before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10",
    //       "after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-['']",
    //       "after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40",
    //       "sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"
    //     )}
    //   >
    //     <span className={cn("whitespace-pre text-lg")}>
    //       Hi, I'm <strong>GrahLnn</strong>. A lifelong learner.
    //     </span>
    //   </div>

    //   {/* <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"></div> */}
    // </main>
    <>
      <div className="mb-2">
        <div className="flex ml-32">
          <div
            className={`h-1 w-5 rounded-[4px] mr-2`}
            style={{ scale: 0.4 }}
          />

          <div className="flex gap-6">
            {itmes.map((item) => (
              <Link
                key={item}
                href={`/${encodeURIComponent(item.toLowerCase())}`}
                className="text-[12px] whitespace-nowrap overflow-hidden text-ellipsis text-neutral-600 dark:text-neutral-400"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Timeline />
    </>
  );
}
