"use client";

import Image from "next/image";
import dashboard_dark from "../../../public/images/dashboard_dark.png";
import dashboard_light from "../../../public/images/dashboard_light.png";
import { useTheme } from "next-themes";
import { Lock, Bitcoin, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const { theme } = useTheme();
  return (
    <>
      <section className="relative w-full space-y-8 pt-[8rem] bg-[url(/images/lightbg2.png)] dark:bg-[url(/images/darkbg4.png)] bg-fixed bg-cover bg-center bg-no-repeat text-center font-medium leading-[4rem]">
        <div className="space-y-4">
          <div className="text-[3rem] font-semibold text-black dark:text-white">
            <p className="z-10">Global and Flexible</p>
            <p className="bg-black text-white dark:bg-white dark:text-black inline-block px-4 rounded-full text-[2.5rem]">
              Trading Solutions
            </p>
          </div>

          <div className="text-center text-base text-neutral-700 dark:text-white/60 font-normal">
            <p>
              With the TradeFlow platform, you can now invest in equities or
              cryptocurrencies <br /> with all the convenience of online and
              dashboard trading
            </p>
          </div>
        </div>

        <div className="w-full h-[20rem] overflow-hidden">
          {theme === "dark" ? (
            <Image
              src={dashboard_dark}
              priority={true}
              alt="dashboard"
              layout="fit"
              className="w-[70%] block mx-auto"
            />
          ) : (
            <Image
              src={dashboard_light}
              priority={true}
              alt="dashboard"
              layout="fit"
              className="w-[70%] block mx-auto"
            />
          )}
        </div>
      </section>

      <section className="space-y-8 p-8 bg-white dark:bg-black backdrop-blur-xl">
        <div className="text-[2rem] font-semibold text-center leading-[3rem]">
          <p>
            The{" "}
            <span className="px-2 py-1 bg-secondary dark:bg-secondary/30 dark:border dark:border-secondary text-white rounded-full text-[1.5rem]">
              trading platform
            </span>{" "}
            with
          </p>
          <p>the highest level of trust</p>
        </div>

        <div className="grid h-[12rem] grid-cols-3 gap-4">
          <div className="bg-[#efefef] dark:bg-[#212121] dark:text-white space-y-6 rounded-lg p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary dark:border dark:border-secondary text-white dark:bg-secondary/30">
              <Lock className="scale-95" strokeWidth={2} />
            </div>

            <div className="space-y-2">
              <p className="text-xl font-semibold">Secure storage</p>
              <p className="text-sm font-light">
                We keep the majority of our digital assets offline for safety
                reasons
              </p>
            </div>
          </div>

          <div className="bg-[#efefef] dark:bg-[#212121] dark:text-white space-y-6 rounded-lg p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary dark:border dark:border-secondary text-white dark:bg-secondary/30">
              <ShieldCheck className="scale-95" strokeWidth={2} />
            </div>

            <div className="space-y-2">
              <p className="text-xl font-semibold">Protected by insurance</p>
              <p className="text-sm font-light">
                Up to a $250, 000 maximum, insurance is available for all USD
                cash amounts
              </p>
            </div>
          </div>

          <div className="bg-[#efefef] dark:bg-[#212121] dark:text-white space-y-6 rounded-lg p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary dark:border dark:border-secondary text-white dark:bg-secondary/30">
              <Bitcoin className="scale-95" strokeWidth={2} />
            </div>

            <div className="space-y-2">
              <p className="text-xl font-semibold">Large support</p>
              <p className="text-sm font-light">
                A wide range of the most widely used digital currencies are
                supported on the platform
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
