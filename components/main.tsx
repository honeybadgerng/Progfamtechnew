import type { NextPage } from "next";
import TECHNEW from "./t-e-c-h-n-e-w";
export type MainType = {
  className?: string;
};

const Main: NextPage<MainType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[51px] box-border max-w-full mq750:pb-[33px] mq750:box-border ${className}`}
    >
      <header className="flex-1 overflow-hidden flex flex-row items-start justify-start bg-[url('/hero@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-xl text-white font-montserrat">
        <div className="flex-1 bg-darkslateblue-200 overflow-hidden flex flex-row items-end justify-start pt-[33px] pb-[42.9px] pr-[119px] pl-24 box-border gap-[112px] max-w-full mq750:gap-[56px] mq750:pt-[21px] mq750:pb-7 mq750:pr-[59px] mq750:pl-12 mq750:box-border mq450:gap-[28px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1225:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[47px] box-border min-h-[484px] max-w-full mq750:pb-[31px] mq750:box-border mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[177px] max-w-full mq750:gap-[88px] mq450:gap-[44px]">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <TECHNEW />
                <div className="w-56 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <a
                      href="#"
                      className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[63px] z-[1]"
                    >
                      Home
                    </a>
                    <a
                      href="/b-o-o-t-c-a-m-p-p-a-g-e1"
                      className="[text-decoration:none] relative leading-[24px] font-extrabold text-steelblue-100 inline-block min-w-[111px] z-[1]"
                    >
                      Bootcamp
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-[649.6px] flex flex-row items-start justify-start py-0 px-3 box-border max-w-full text-29xl">
                <div className="flex-1 flex flex-col items-start justify-start gap-[27px] max-w-full">
                  <h1 className="m-0 self-stretch relative text-inherit font-medium font-inherit z-[1] mq750:text-19xl mq450:text-10xl">
                    Get the best knowledge from our Versatile Tutors
                  </h1>
                  <div className="flex flex-row items-start justify-start relative text-17xl text-dark-blue font-space-grotesk">
                    <div className="h-10 w-[155px] absolute !m-[0] right-[-94px] bottom-[-20px]">
                      <div className="absolute top-[0px] left-[0px] w-full h-full hidden">
                        <b className="absolute w-full top-[0%] left-[0%] leading-[40px] hidden h-full mq750:text-10xl mq750:leading-[32px] mq450:text-3xl mq450:leading-[24px]">
                          in-house
                        </b>
                      </div>
                      <div className="absolute top-[0px] left-[0px] w-full h-full hidden">
                        <b className="absolute w-full top-[0%] left-[0%] leading-[40px] hidden h-full mq750:text-10xl mq750:leading-[32px] mq450:text-3xl mq450:leading-[24px]">
                          in-house
                        </b>
                      </div>
                    </div>
                    <div className="rounded-xl bg-white flex flex-row items-start justify-start py-5 px-[30px] whitespace-nowrap z-[2] text-9xl text-darkslateblue-100 font-montserrat hover:bg-gainsboro">
                      <div className="relative font-semibold">
                        Start learning!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[377px] relative max-h-full object-contain max-w-full mq1225:flex-1"
            loading="lazy"
            alt=""
            src="/2@2x.png"
          />
        </div>
      </header>
    </section>
  );
};

export default Main;
