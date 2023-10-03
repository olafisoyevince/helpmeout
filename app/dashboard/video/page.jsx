import DashboardNavbar from "@/app/components/DashboardNavbar";
import Footer from "@/app/components/Footer";
import React from "react";
import Link from "next/link";
import { Edit, Copy } from "iconsax-react";

const Video = () => {
  return (
    <div>
      <DashboardNavbar />
      <main className="p-4 px-[20px] md:px[50px] lg:px-[70px] xl:px-[100px] grid gap-4 text-[rgba(20,20,20,0.7)] xl:mx-auto text-sm  ">
        <section className="flex flex-wrap gap-[0.5rem] md:col-span-full">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          /
          <Link href="/dashboard" className="hover:underline">
            Recent Videos
          </Link>
          /
          <Link href="dashboard/video" className="text-blue hover:underline">
            How To Create A Facebook Ad Listing
          </Link>
        </section>

        <section className="grid gap-3 md:grid md:grid-cols-2 py-5">
          <div className="flex items-center gap-2 md:col-span-full">
            <h1 className="font-sora font-bold text-lg leading-10 pb-5 xl:text-[2.4rem]">
              How To Create A Facebook Ad Listing
            </h1>
            <button>
              <Edit size={32} />
            </button>
          </div>

          <div className="h-[25rem] p-2 border-[0.1rem] border-[#E7E7ED] rounded-[1.2rem] md:h-[max-content] md:col-span-full">
            <img
              src="/video frame.png"
              alt="main video"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-2 flex gap-2 rounded-[1.2rem] justify-between bg-[#E7E7ED]">
            <input
              className="w-full bg-[transparent] text-sm"
              type="email"
              placeholder="enter email of the reciever"
            />
            <button
              className="bg-[#605C84] px-3 py-[0.8rem] rounded-[0.8rem] text-sm text-white"
              // onClick={togglePopup}
            >
              Send
            </button>
          </div>

          <div className="grid gap-1">
            <div className="p-4 flex gap-3 rounded-[1.2rem] justify-between items-center bg-[#E7E7ED] text-[1.4rem] xl:text-sm">
              <input
                className="w-full font-work-sans"
                id="video url"
                type="text"
                value="https://www.helpmeout/Untitled_Video_20232509"
                disabled
              />
              <button className="flex gap-1">
                <Copy size="32" />
              </button>
            </div>
          </div>

          <div className=" pt-10">
            <p className=" font-semibold pb-[12px] font-sora">
              Share your video
            </p>
            <div className=" flex flex-col lg:flex-row gap-3">
              <button className=" flex border border-[#0A0628] outline-none py-2 px-3 rounded-md gap-2">
                <img src="/Facebook.svg" alt="" />
                Facebook
              </button>
              <button className=" flex border border-[#0A0628] outline-none p-2 rounded-md gap-2">
                <img src="/whatsapp.svg" alt="" />
                Whatsapp
              </button>
              <button className=" flex border border-[#0A0628] outline-none p-2 rounded-md gap-2">
                <img src="/telegram.svg" alt="" />
                Telegram
              </button>
            </div>
          </div>

          <div className="mt-8 md:col-span-full">
            <h2 className="mb-3 font-sora font-medium text-lg xl:text-lg">
              Transcript
            </h2>
            <select className="border border-[#CFCFCF] text-[#CFCFCF] outline-none w-32 px-2 py-1 rounded-sm">
              <option value="english">English</option>
              <option value="yoruba">Yoruba</option>
              <option value="hausa">Hausa</option>
              <option value="igbo">Igbo</option>
            </select>

            <div className=" h-48 overflow-y-scroll mt-8 pr-5">
              <div className=" flex gap-5 pb-4 md:text-base lg:text-lg xl:text-xl">
                <p className=" ">0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate &quot;Marketplace&quot; in the left-hand menu or at the
                  top of the
                </p>
              </div>
              <div className=" flex gap-5 pb-4 md:text-base lg:text-lg xl:text-xl">
                <p className="">0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate &quot;Marketplace&quot; in the left-hand menu or at the
                  top of the
                </p>
              </div>
              <div className=" flex gap-5 pb-4 md:text-base lg:text-lg xl:text-xl">
                <p className=" ">0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate &quot;Marketplace&quot; in the left-hand menu or at the
                  top of the
                </p>
              </div>
              <div className=" flex gap-5 pb-4 md:text-base lg:text-lg xl:text-xl">
                <p className="">0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate &quot;Marketplace&quot; in the left-hand menu or at the
                  top of the
                </p>
              </div>
              <div className=" flex gap-5 pb-4 md:text-base lg:text-lg xl:text-xl">
                <p className="">0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate &quot;Marketplace&quot; in the left-hand menu or at the
                  top of the
                </p>
              </div>
              <div className=" flex gap-5 pb-4 md:text-base lg:text-lg xl:text-xl">
                <p className=" ">0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate &quot;Marketplace&quot; in the left-hand menu or at the
                  top of the
                </p>
              </div>
              <div className=" flex gap-5 pb-4 md:text-base lg:text-lg xl:text-xl">
                <p className=" ">0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate &quot;Marketplace&quot; in the left-hand menu or at the
                  top of the
                </p>
              </div>
              <div className=" flex gap-5 pb-4 md:text-base lg:text-lg xl:text-xl">
                <p className=" ">0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate &quot;Marketplace&quot; in the left-hand menu or at the
                  top of the
                </p>
              </div>
              <div className=" flex gap-5 pb-4 md:text-base lg:text-lg xl:text-xl">
                <p className=" ">0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate &quot;Marketplace&quot; in the left-hand menu or at the
                  top of the
                </p>
              </div>
              <div className=" flex gap-5 pb-4 md:text-base lg:text-lg xl:text-xl">
                <p className=" ">0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate &quot;Marketplace&quot; in the left-hand menu or at the
                  top of the
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Video;
