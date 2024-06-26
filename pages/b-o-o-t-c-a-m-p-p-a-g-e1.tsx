import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";
import Footer from "../components/footer";

const BOOTCAMPPAGE1: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start min-h-[1705px] tracking-[normal] leading-[normal]">
      <header className="self-stretch bg-darkslateblue-100 overflow-hidden flex flex-row items-start justify-center py-[36.5px] pr-[522px] pl-5 gap-[360px] sticky top-[0] z-[99] text-left text-9xl text-white font-poppins mq450:gap-[45px] mq450:pr-5 mq450:box-border mq800:gap-[90px] mq800:pr-[130px] mq800:box-border mq1350:gap-[180px] mq1350:pr-[261px] mq1350:box-border">
        <a
          className="[text-decoration:none] relative font-extrabold text-[inherit] whitespace-nowrap"
          href="/"
        >
          TECHNEW
        </a>
        <div className="w-[220px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border text-xl font-montserrat">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <a
              className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[63px]"
              href="/"
            >
              Home
            </a>
            <a
              className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit] inline-block min-w-[107px]"
              href="#"
            >
              Bootcamp
            </a>
          </div>
        </div>
      </header>
      <img
        className="ml-[-28.4px] mb-[53px] w-[1496.9px] relative max-h-full object-cover shrink-0 max-w-[104%]"
        alt=""
        src="/img20240623wa0009-1@2x.png"
      />
      <FrameComponent1 />
      <Footer
        vector="/vector-2.svg"
        footerContentWidth="unset"
        footerContentAlignSelf="stretch"
      />
    </div>
  );
};

export default BOOTCAMPPAGE1;
