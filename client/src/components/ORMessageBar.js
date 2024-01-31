const ORMessageBar = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full text-left text-xl text-black font-inter">
      <div className="w-80 rounded-2xl bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start p-6 box-border gap-[62px] min-w-[320px] mq450:gap-[31px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <h3 className="m-0 relative text-inherit tracking-[-0.2px] font-semibold font-inherit mq450:text-base">
              Chats
            </h3>
            <div className="relative text-sm tracking-[-0.3px] text-dark-gray">
              2 unread messages
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-6 pl-0 gap-[8px]">
            <button className="cursor-pointer [border:none] p-0 bg-light-orange h-14 flex-1 relative rounded-2xl">
              <img
                className="absolute top-[12px] left-[12px] w-8 h-8 object-cover"
                alt=""
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-light-orange h-14 flex-1 relative rounded-2xl">
              <img
                className="absolute top-[12px] left-[12px] w-8 h-8 object-cover"
                alt=""
              />
            </button>
            
            <div className="rounded-2xl flex flex-row items-center justify-start p-3">
              <img
                className="h-8 w-8 relative object-cover"
                alt=""
              />
            </div>
            <div className="rounded-2xl flex flex-row items-center justify-start p-3">
              <img
                className="h-8 w-8 relative object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="self-stretch h-[17px] flex flex-row items-start justify-start text-sm text-dark-orange">
          <div className="self-stretch w-[102px] flex flex-row items-end justify-start gap-[4px]">
            <div className="self-stretch flex-1 relative tracking-[-0.3px]">
              All messages
            </div>
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-80 rounded-2xl bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start pt-6 px-6 pb-11 box-border gap-[24px] min-w-[320px]">
        <div className="self-stretch flex flex-row items-start justify-start">
          <h3 className="m-0 relative text-inherit tracking-[-0.2px] font-semibold font-inherit mq450:text-base">
            Top states
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm">
          <div className="self-stretch rounded [background:linear-gradient(90deg,_#ffcd71,_rgba(255,_205,_113,_0))] flex flex-row items-center justify-start py-1.5 px-2 relative gap-[211px]">
            <div className="relative uppercase font-semibold">NY</div>
            <div className="absolute my-0 mx-[!important] top-[calc(50%_-_6.5px)] right-[8px] text-3xs uppercase font-medium text-right">
              120k
            </div>
          </div>
          <div className="w-[229px] rounded [background:linear-gradient(90deg,_#ffcd71,_rgba(255,_205,_113,_0))] flex flex-row items-center justify-start py-1.5 px-2 box-border relative gap-[170px]">
            <div className="relative uppercase font-semibold">MA</div>
            <div className="absolute my-0 mx-[!important] top-[calc(50%_-_6.5px)] right-[8px] text-3xs uppercase font-medium text-right">
              80k
            </div>
          </div>
          <div className="w-[207px] rounded [background:linear-gradient(90deg,_#ffcd71,_rgba(255,_205,_113,_0))] flex flex-row items-center justify-start py-1.5 px-2 box-border relative gap-[151px]">
            <div className="relative uppercase font-semibold">NH</div>
            <div className="absolute my-0 mx-[!important] top-[calc(50%_-_6.5px)] right-[8px] text-3xs uppercase font-medium text-right">
              70k
            </div>
          </div>
          <div className="w-[150px] rounded [background:linear-gradient(90deg,_#ffcd71,_rgba(255,_205,_113,_0))] flex flex-row items-center justify-start py-1.5 px-2 box-border relative gap-[94px]">
            <div className="relative uppercase font-semibold">OR</div>
            <div className="absolute my-0 mx-[!important] top-[calc(50%_-_6.5px)] right-[8px] text-3xs uppercase font-medium text-right">
              50k
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start p-6 box-border gap-[8px] min-w-[320px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
          <h3 className="m-0 relative text-inherit tracking-[-0.2px] font-semibold font-inherit mq450:text-base">
            New deals
          </h3>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px] min-h-[160px] text-sm text-dark-orange">
          <button className="cursor-pointer [border:none] py-3 pr-4 pl-3 bg-light-orange rounded-2xl flex flex-row items-center justify-center gap-[8px] hover:bg-antiquewhite">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className="relative text-sm tracking-[-0.3px] font-inter text-dark-orange text-left">
              Fruit2Go
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-3 pr-3.5 pl-2.5 bg-light-orange rounded-2xl flex flex-row items-center justify-center gap-[8px] whitespace-nowrap hover:bg-antiquewhite">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className="relative text-sm tracking-[-0.3px] font-inter text-dark-orange text-left">
              Marshall's MKT
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-3 pr-4 pl-3 bg-light-orange rounded-2xl flex flex-row items-center justify-center gap-[8px] hover:bg-antiquewhite">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className="relative text-sm tracking-[-0.3px] font-inter text-dark-orange text-left">
              CCNT
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-3 pr-3.5 pl-2.5 bg-light-orange rounded-2xl flex flex-row items-center justify-center gap-[8px] whitespace-nowrap hover:bg-antiquewhite">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className="relative text-sm tracking-[-0.3px] font-inter text-dark-orange text-left">
              Joana Mini-market
            </div>
          </button>
          <div className="rounded-2xl bg-light-orange flex flex-row items-center justify-center py-3 pr-3.5 pl-2.5 gap-[8px] whitespace-nowrap">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className="relative tracking-[-0.3px]">
              Little Brazil Vegan
            </div>
          </div>
          <div className="rounded-2xl bg-light-orange flex flex-row items-center justify-center py-3 pr-4 pl-3 gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className="relative tracking-[-0.3px]">Target</div>
          </div>
          <div className="rounded-2xl bg-light-orange flex flex-row items-center justify-center py-3 pr-3.5 pl-2.5 gap-[8px] whitespace-nowrap">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className="relative tracking-[-0.3px]">Organic Place</div>
          </div>
          <div className="rounded-2xl bg-light-orange flex flex-row items-center justify-center py-3 pr-4 pl-3 gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-from-tablerio-31.svg"
            />
            <div className="relative tracking-[-0.3px]">Morello's</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ORMessageBar;
