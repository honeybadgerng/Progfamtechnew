import type { NextPage } from "next";

export type EmailCaptureType = {
  className?: string;
};

const EmailCapture: NextPage<EmailCaptureType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border min-w-[250px] max-w-full text-center text-5xl text-gray-400 font-montserrat ${className}`}
    >
      <div className="w-[917px] flex flex-col items-start justify-start gap-[49px] max-w-full mq450:gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <input
            className="[border:none] [outline:none] font-montserrat text-17xl bg-[transparent] self-stretch relative font-bold text-black text-left mq750:text-10xl mq450:text-3xl"
            type="text"
            placeholder="Enter your work email" // Added placeholder text
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[15px]">
            <div className="flex-1 relative mq450:text-lgi">
              Subscribe to our newsletters and stay up to date on features and
              releases.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="cursor-pointer py-1 pr-[5px] pl-[38px] bg-[transparent] w-[590px] rounded-31xl box-border flex flex-row flex-wrap items-start justify-start gap-[44px] max-w-full border-[2px] border-solid border-gray-400 mq750:gap-[22px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0 box-border min-w-[178px]">
              <input
                className="self-stretch relative text-5xl leading-[24px] font-montserrat text-gray-300 text-left mq450:text-lgi mq450:leading-[19px] [border:none] [outline:none] bg-[transparent]"
                type="email"
                placeholder="Enter your work email"
              />
            </div>
            <button className="cursor-pointer [border:none] py-[18.5px] px-[50px] bg-gray-200 rounded-31xl flex flex-row items-start justify-start z-[1] hover:bg-darkslategray-100">
              <b className="relative text-5xl leading-[24px] inline-block font-montserrat text-white text-left min-w-[125px] mq450:text-lgi mq450:leading-[19px]">
                Subscribe
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCapture;
