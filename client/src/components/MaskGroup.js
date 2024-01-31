const MaskGroup = () => {
  return (
    <div className="w-[1112px] h-[262px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[16px] max-w-full text-left text-sm text-black font-inter">
      <div className="self-stretch w-[410px] rounded-2xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start p-6 box-border gap-[8px] min-w-[320px] min-h-[200px]">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 text-xl">
          <h3 className="m-0 relative text-inherit tracking-[-0.2px] font-semibold font-inherit mq450:text-base">
            Revenues
          </h3>
        </div>
        <div className="flex flex-row items-baseline justify-start gap-[8px] text-29xl">
          <div className="h-[58px] relative tracking-[-2px] font-medium inline-block mq450:text-10xl mq925:text-19xl">
            15%
          </div>
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0"
            alt=""
            src="/icon-from-tablerio-10.svg"
          />
        </div>
        <div className="relative tracking-[-0.3px] text-dark-gray">
          Increase compared to last week
        </div>
        <div className="flex-1 flex flex-row items-end justify-start pt-4 px-0 pb-0 text-dark-orange">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="relative tracking-[-0.3px]">Revenues report</div>
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-from-tablerio-11.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch w-[410px] rounded-2xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start p-6 box-border gap-[8px] min-w-[320px] min-h-[200px]">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 text-xl">
          <h3 className="m-0 relative text-inherit tracking-[-0.2px] font-semibold font-inherit mq450:text-base">
            Lost deals
          </h3>
        </div>
        <div className="flex flex-row items-baseline justify-start text-29xl">
          <div className="h-[58px] relative tracking-[-2px] font-medium inline-block mq450:text-10xl mq925:text-19xl">
            4%
          </div>
        </div>
        <div className="relative tracking-[-0.3px] text-dark-gray">
          You closed 96 out of 100 deals
        </div>
        <div className="flex-1 flex flex-row items-end justify-start pt-4 px-0 pb-0 text-dark-orange">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="relative tracking-[-0.3px]">All deals</div>
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-from-tablerio-12.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[260px] rounded-2xl bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start pt-6 pb-[23px] pr-[26px] pl-6 box-border gap-[47px] min-w-[260px] min-h-[200px] text-xl mq450:gap-[23px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <h3 className="m-0 relative text-inherit tracking-[-0.2px] font-semibold font-inherit mq450:text-base">
            Quarter goal
          </h3>
          <div className="self-stretch h-[102px] relative text-center text-13xl">
            <img
              className="absolute top-[32.2px] left-[-0.1px] w-[40.6px] h-[69.8px] hidden z-[1]"
              alt=""
              src="/ellipse-4.svg"
            />
            <div className="absolute top-[0px] left-[-1.5px] flex flex-row items-start justify-start py-0 pr-[22px] pl-0 box-border w-full h-full">
              <img
                className="self-stretch w-[209.4px] relative max-h-full min-h-[102px]"
                loading="eager"
                alt=""
                src="/ellipse-3.svg"
              />
              <div className="w-[189px] flex flex-row items-end justify-start ml-[-210px]">
                <img
                  className="h-[102px] w-[189.4px] relative z-[2]"
                  alt=""
                  src="/ellipse-5.svg"
                />
                <div className="h-[39px] relative tracking-[-1.59px] font-medium flex items-center justify-center z-[3] ml-[-116px] mq450:text-lgi mq925:text-7xl">
                  84%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end justify-start gap-[4px] text-sm text-dark-orange">
          <div className="relative tracking-[-0.3px]">All goals</div>
          <img
            className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
            alt=""
            src="/icon-from-tablerio-13.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default MaskGroup;
