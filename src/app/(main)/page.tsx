"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import dashboard_light from "@/public/images/dashboard_light.png";
import dashboard_dark from "@/public/images/dashboard_dark.png";
import { display_font } from "@/app/fonts";
import { Bitcoin, ShieldCheck, Lock } from "lucide-react";

export default function HomePage() {
  const { theme } = useTheme();
  return (
    <div className="space-y-10">
      <section className="relative w-full h-[100vh] bg-[url('/images/herobg.png')] dark:bg-[url('/images/herobgdark.png')] bg-fixed bg-cover bg-center bg-no-repeat overflow-hidden pt-[6rem] text-center font-medium">
        <div className="space-y-6">
          <div
            className={`font-semibold -space-y-1 text-[3rem] ${display_font.className}`}
          >
            {/*<TextEffectPerLine text={'Global and Flexible'}/>*/}
            {/*<TextEffectPerLine text={'Trading Solutions'}/>*/}
            {/*<p className={'bg-accent-light text-accent-light-foreground inline-flex px-4 py-1 text-sm font-normal rounded-full'}>Introducing</p>*/}
            <p>
              Global and <span className={"text-accent"}>Flexible</span>
            </p>
            <p>
              <span className={"text-accent"}>Trading</span> Solutions
            </p>
          </div>

          <div className="text-center text-base text-inactive font-normal">
            <p>
              With the TradeFlow platform, you can now invest in assets or
              cryptocurrencies <br /> with all the convenience of online and
              dashboard trading
            </p>
          </div>
        </div>

        <div className="w-[70%] inline absolute bottom-[5rem] left-1/2 -translate-x-1/2 h-[15rem] ">
          {theme === "dark" ? (
            <Image
              src={dashboard_dark}
              priority={true}
              alt="dashboard"
              // fill
              placeholder={"blur"}
              className=" w-full"
            />
          ) : (
            <Image
              src={dashboard_light}
              priority={true}
              alt="dashboard"
              // fill
              placeholder={"blur"}
              className=" w-full"
            />
          )}
        </div>
      </section>

      <section className="space-y-8 p-8">
        <div className="text-[2rem] font-semibold text-center leading-[3rem]">
          <p className={`${display_font.className}`}>
            The{" "}
            <span className="px-2 py-1 bg-accent text-white rounded-full text-[1.5rem]">
              trading platform
            </span>{" "}
            with <br /> the highest level of trust
          </p>
        </div>

        <div className="grid h-[12rem] grid-cols-3 gap-4">
          <div className="bg-secondary-background border border-secondary space-y-6 rounded-lg p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Lock size={24} strokeWidth={2} />
            </div>

            <div className="space-y-2">
              <p className="text-xl font-semibold text-black">Secure storage</p>
              <p className="text-sm">
                We keep the majority of our digital assets offline for safety
                reasons
              </p>
            </div>
          </div>

          <div className="bg-secondary-background border border-secondary space-y-6 rounded-lg p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <ShieldCheck size={24} strokeWidth={2} />
            </div>

            <div className="space-y-2">
              <p className="text-xl font-semibold text-black">
                Protected by insurance
              </p>
              <p className="text-sm">
                Up to a $250, 000 maximum, insurance is available for all USD
                cash amounts
              </p>
            </div>
          </div>

          <div className="bg-secondary-background border border-secondary space-y-6 rounded-lg p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Bitcoin size={24} strokeWidth={2} />
            </div>

            <div className="space-y-2">
              <p className="text-xl font-semibold text-black">Large support</p>
              <p className="text-sm">
                A wide range of the most widely used digital currencies are
                supported on the platform
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
