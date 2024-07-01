import type { NextPage } from "next";

export type TESTIMONIALType = {
  className?: string;
};

const TESTIMONIAL: NextPage<TESTIMONIALType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-steelblue-400 overflow-hidden flex flex-col items-start justify-start py-[97.5px] px-[91px] box-border gap-[60px] max-w-full text-left text-9xl text-gray-100 font-montserrat mq750:gap-[30px] mq750:py-[41px] mq750:px-[45px] mq750:box-border mq1050:pt-[63px] mq1050:pb-[63px] mq1050:box-border mq450:gap-[15px] mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[30px] max-w-full">
        <h3 className="m-0 relative text-inherit leading-[40px] font-medium font-inherit mq450:text-3xl mq450:leading-[32px]">
          Testimonials
        </h3>
        <h1 className="m-0 relative text-29xl font-bold font-inherit text-black mq750:text-19xl mq450:text-10xl">
          <p className="m-0">See what others are</p>
          <p className="m-0">saying about us</p>
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[79px] max-w-full text-black mq750:gap-[39px] mq450:gap-[20px] mq1225:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-[52px] px-0 pb-0 box-border min-w-[391px] max-w-full mq750:pt-[34px] mq750:box-border mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[39px] mq750:gap-[19px]">
            <blockquote className="m-0 self-stretch relative leading-[44px] mq450:text-3xl mq450:leading-[35px]">
              “Explore the course catalog and syllables to identify courses that
              align with personal learning objectives. Take advantage of
              interactive tutorials we offer to reinforce your understanding and
              apply concepts in real world scenarios.”
            </blockquote>
            <div className="w-[307px] flex flex-col items-start justify-start gap-[4px] text-5xl">
              <b className="w-[203px] relative flex items-center mq450:text-lgi">
                Faaruq Azeez
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div className="w-[273px] relative flex items-center mq450:text-lgi">
                  Founder, Justwear
                </div>
                <div className="self-stretch relative text-gray-300 mq450:text-lgi">
                  United Arab Emirate
                </div>
              </div>
            </div>
            <div className="w-[159px] h-0 flex flex-row items-start justify-between pt-0 px-0 pb-0 box-border gap-[20px]">
              <a href="#">
                <img
                  className="h-[11px] w-10 relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/arrow-2.svg"
                />
              </a>
              <a href="#">
                <img
                  className="h-[11px] w-10 relative"
                  loading="lazy"
                  alt=""
                  src="/arrow-1.svg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="h-[543px] w-[578px] relative min-w-[578px] max-w-full mq1050:min-w-full mq1225:flex-1">
          <div className="absolute top-[0px] left-[42px] rounded-3xl bg-darkslategray-200 w-[536px] h-[502px] overflow-hidden" />
          <img
            className="absolute top-[41px] left-[0px] rounded-3xl w-[536px] h-[502px] overflow-hidden object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/frame-1171275211@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default TESTIMONIAL;
