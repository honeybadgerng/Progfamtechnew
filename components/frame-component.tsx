import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type FrameComponentType = {
  className?: string;
  onClose?: () => void;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  onClose,
}) => {
  const router = useRouter();

  const onCourseNavigationContainerClick = useCallback(() => {
    router.push("/b-o-o-t-c-a-m-p-p-a-g-e1");
  }, [router]);

  return (
    <div
      className={`w-[1426px] flex flex-row items-start justify-center pt-0 px-5 pb-[51px] box-border max-w-full max-h-full overflow-auto text-left text-17xl text-black font-montserrat mq750:pb-[33px] mq750:box-border ${className}`}
    >
      <div className="w-[1254px] rounded-3xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[76px] max-w-full border-[4px] border-solid border-orange mq750:gap-[19px] mq1225:flex-wrap mq1225:gap-[38px]">
        <img
          className="w-[572px] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1225:flex-1"
          loading="lazy"
          alt=""
          src="/frame-1171275360@2x.png"
        />
        <div className="w-[530px] flex flex-col items-start justify-start pt-[46px] px-0 pb-0 box-border min-w-[530px] max-w-full mq750:pt-[30px] mq750:box-border mq750:min-w-full mq1225:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full mq750:gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq750:text-10xl mq450:text-3xl">{`Fast track your Tech Career `}</h2>
              <div className="w-[500px] relative text-5xl font-light text-gray-400 inline-block max-w-full mq450:text-lgi">{`Get the right teams with zero worries for your project every now and then. Get the right teams with zero worries for your project every now and then. `}</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px] max-w-full text-lg text-white">
              <div className="flex flex-row items-start justify-start gap-[34px] max-w-full mq450:flex-wrap mq450:gap-[17px]">
                <div className="rounded-xl bg-darkslateblue-100 flex flex-row items-center justify-center py-3.5 px-7 hover:bg-steelblue-300">
                  <div className="relative font-semibold inline-block min-w-[104px]">
                    #30,000.00
                  </div>
                </div>
                <div className="rounded-xl bg-steelblue-100 flex flex-row items-center justify-center py-3.5 px-7 whitespace-nowrap hover:bg-steelblue-200">
                  <div className="relative font-semibold inline-block min-w-[88px]">
                    3 months
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[34px] mq750:flex-wrap mq450:gap-[17px]">
                <div className="rounded-xl bg-black flex flex-row items-center justify-center py-3.5 px-7 whitespace-nowrap">
                  <div className="relative font-semibold">
                    Mon-Fri (4pm -6pm)
                  </div>
                </div>
                <div className="rounded-xl bg-gray-100 flex flex-row items-center justify-center py-3.5 px-7 hover:bg-dimgray">
                  <div className="relative font-semibold inline-block min-w-[114px]">
                    GoogleMeet
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[268px] rounded-6xl flex flex-row items-start justify-start py-[15px] px-0 box-border gap-[14px] cursor-pointer text-9xl text-darkslateblue-100"
              onClick={onCourseNavigationContainerClick}
            >
              <div className="flex flex-row items-start justify-start p-1.5">
                <div className="h-12 w-12 relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkslateblue-100 w-full h-full" />
                  <img
                    className="absolute top-[12.6px] left-[13px] w-[22px] h-[22.8px] z-[1]"
                    alt=""
                    src="/arrow-forward.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
                <h3 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-3xl">
                  More details
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
