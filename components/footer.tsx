import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FooterType = {
  className?: string;
  vector?: string;

  /** Style props */
  footerContentWidth?: CSSProperties["width"];
  footerContentAlignSelf?: CSSProperties["alignSelf"];
};

const Footer: NextPage<FooterType> = ({
  className = "",
  vector,
  footerContentWidth,
  footerContentAlignSelf,
}) => {
  const footerContentStyle: CSSProperties = useMemo(() => {
    return {
      width: footerContentWidth,
      alignSelf: footerContentAlignSelf,
    };
  }, [footerContentWidth, footerContentAlignSelf]);

  return (
    <footer
      className={`self-stretch bg-darkslateblue-100 overflow-hidden flex flex-col items-end justify-start pt-[67.5px] px-[78px] pb-[116px] box-border gap-[12.5px] max-w-full text-left text-53xl text-white font-poppins mq450:pt-11 mq450:pb-[75px] mq450:box-border mq1225:pl-[39px] mq1225:pr-[39px] mq1225:box-border ${className}`}
    >
      <div
        className="w-[1248.5px] flex flex-row items-end justify-between max-w-full gap-[20px] mq1225:flex-wrap mq1225:justify-center"
        style={footerContentStyle}
      >
        <div className="w-[321.3px] flex flex-col items-start justify-start min-w-[321.3px] max-w-full mq1225:flex-1">
          <a
            href="#"
            className="m-0 relative text-inherit font-bold font-inherit mq750:text-39xl mq450:text-24xl"
          >
            LOGO
          </a>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] mt-[-4px] text-lg font-montserrat">
            <div className="self-stretch relative font-light">
              Subscribe to our newsletters and stay up to date on features and
              releases.
            </div>
            <div className="relative leading-[24px] font-medium">
              Copyrights @ Progfams 2024
            </div>
          </div>
        </div>
        <div className="w-[807px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border min-w-[807px] max-w-full text-xl font-montserrat mq1050:min-w-full mq1225:flex-1">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[50px]">
              <a
                href="#"
                className="relative leading-[24px] font-medium inline-block min-w-[63px] mq450:text-base mq450:leading-[19px]"
              >
                Home
              </a>
              <a
                href="#"
                className="relative leading-[24px] font-medium inline-block min-w-[95px] mq450:text-base mq450:leading-[19px]"
              >
                About Us
              </a>
              <a
                href="#"
                className="relative leading-[24px] font-medium inline-block min-w-[74px] mq450:text-base mq450:leading-[19px]"
              >
                Service
              </a>
            </div>
            <div className="flex flex-col items-start justify-start gap-[50px]">
              <a
                href="#"
                className="relative leading-[24px] font-medium inline-block min-w-[65px] mq450:text-base mq450:leading-[19px]"
              >
                Works
              </a>
              <a
                href="#"
                className="relative leading-[24px] font-medium inline-block min-w-[116px] mq450:text-base mq450:leading-[19px]"
              >
                Boot Camp
              </a>
            </div>
            <div className="flex flex-col items-start justify-start gap-[50px]">
              <a
                href="#"
                className="relative leading-[24px] font-medium mq450:text-base mq450:leading-[19px]"
              >
                Consultation
              </a>
              <a
                href="#"
                className="relative leading-[24px] font-medium inline-block min-w-[48px] mq450:text-base mq450:leading-[19px]"
              >
                Blog
              </a>
            </div>
            <div className="flex flex-col items-start justify-start gap-[25px]">
              <a
                href="#"
                className="relative leading-[24px] font-medium inline-block min-w-[81px] mq450:text-base mq450:leading-[19px]"
              >
                Contact
              </a>
              <div className="flex flex-col items-start justify-start gap-[10px] text-base text-gray-500">
                <div className="relative leading-[24px] whitespace-nowrap">
                  +234 810 112 8072
                </div>
                <div className="relative leading-[24px] text-white whitespace-nowrap">
                  Info@Progfams.com
                </div>
                <div className="relative leading-[24px]">
                  <p className="m-0">10B, Harmony Close,</p>
                  <p className="m-0">Ikeja, Lagos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-end py-0 px-[45px]">
        <div className="flex flex-row items-start justify-start gap-[12px]">
          <a href="#">
            <div className="flex flex-row items-center justify-center relative gap-[10px] h-8 w-8">
              <div className="h-8 w-8 relative rounded-[50%] bg-white" />
              <img
                className="h-3/6 w-6/12 absolute !m-[0] top-[25%] right-[25%] bottom-[25%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </a>
          <a href="#">
            <div className="flex flex-row items-center justify-center relative gap-[10px] h-8 w-8">
              <div className="h-8 w-8 relative rounded-[50%] bg-white" />
              <img
                className="h-3/6 w-[62.5%] absolute !m-[0] top-[25.31%] right-[18.75%] bottom-[24.69%] left-[18.75%] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </a>

          <a href="#">
            <div className="flex flex-row items-center justify-center relative gap-[10px] h-8 w-8">
              <div className="h-8 w-8 relative rounded-[50%] bg-white" />
              <img
                className="h-[59.69%] w-[32.19%] absolute !m-[0] top-[21.88%] right-[33.75%] bottom-[18.44%] left-[34.06%] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src={vector}
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
