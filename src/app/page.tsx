import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Check, Star } from "lucide-react";
import { Icons } from "@/components/Icons";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 bg-slate-400 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2  bg-white px-6 lg:px-0 lg:pt-4">
            <div className="relative  mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/icase-logo.svg" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl">
                Your Images on a{" "}
                <span className="bg-green-600 text-white px-2"> Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose  text-gray-600 text-center lg:text-left text-balance md:text-wrap">
                Capture Your favorite moments or Save favorite Images,{" "}
                <span className="font-semibold"> one-of-one </span>phone case.
                Icase can make your phone case even better. Let us make it for
                you to recieve happier.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="shrink-0 h-5 w-5 text-green-600" />
                    High Quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="shrink-0 h-5 w-5 text-green-600" />
                    5+ year print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="shrink-0 h-5 w-5 text-green-600" />
                    Modern iPhone models supported
                  </li>
                </div>

                <div className=" pt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="flex -space-x-4">
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/user-1.png"
                      alt="user image"
                    />
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/user-2.png"
                      alt="user image"
                    />
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/user-3.png"
                      alt="user image"
                    />
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/user-4.jpg"
                      alt="user image"
                    />
                    <img
                      className="inline-block h-10 w-10 object-cover rounded-full ring-2 ring-slate-100"
                      src="/user-5.jpg"
                      alt="user image"
                    />
                  </div>

                  <div className="flex flex-col justify-between items-center sm:items-start">
                    <div className="flex gap-0.5">
                      <Star className="h-4 w-4 text-green-600 fill-green-600" />
                      <Star className="h-4 w-4 text-green-600 fill-green-600" />
                      <Star className="h-4 w-4 text-green-600 fill-green-600" />
                      <Star className="h-4 w-4 text-green-600 fill-green-600" />
                      <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    </div>

                    <p>
                      <span className="font-semibold">1,250+</span> customers
                    </p>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          <div className="col-span-full  lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative  md:max-w-xl ">
              <img
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none lg:hidden sm:block xl:block "
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col items-center lg:flex-row gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tighter text-center text-balance font-bold text-5xl md:text-6xl text-gray-900 !leading-tight ">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>{" "}
              say
            </h2>
            <img src="/icase-logo.svg" className="w-24 order-0 lg:order-1" />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The case feels durable and well-made. The fit is perfect. Had
                  the case for two and a half months now and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after couple weeks. I am very happy with the
                  case. I would recommend it to my friends and family."
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <img
                  className="rounded-full w-12 h-12 object-cover"
                  src="/user-1.png"
                  alt="user image"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 text-center text-zinc-600">
                    <Check className="h-4 w-4 text-green-600  stroke-[3px]" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The case feels solid and well-built. It fits my phone
                  perfectly. I've had it for three months now and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the image is still crystal clear.
                  </span>
                  My old case started to fade and turn yellow after just a few
                  weeks. I'm really pleased with this one and would definitely
                  recommend it."
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <img
                  className="rounded-full w-12 h-12 object-cover"
                  src="/user-4.jpg"
                  alt="user image"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Josh</p>
                  <div className="flex gap-1.5 text-center text-zinc-600">
                    <Check className="h-4 w-4 text-green-600  stroke-[3px]" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="p-16">
          <Reviews />
        </div>
      </section>
    </div>
  );
}
