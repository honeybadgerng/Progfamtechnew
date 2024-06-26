import type { NextPage } from "next";
import Main from "../components/main";
import FrameComponent from "../components/frame-component";
import TESTIMONIAL from "../components/t-e-s-t-i-m-o-n-i-a-l";
import EmailCapture from "../components/email-capture";
import Footer from "../components/footer";

const BOOTCAMPPAGE: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[53px] tracking-[normal] leading-[normal] mq750:gap-[26px]">
      <Main />
      <FrameComponent />
      <TESTIMONIAL />
      <EmailCapture />
      <Footer vector="/vector-2.svg" />
    </div>
  );
};

export default BOOTCAMPPAGE;
