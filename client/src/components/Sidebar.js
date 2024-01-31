const Sidebar = () => {
  return (
    <div className="h-[890px] w-[280px] rounded-2xl bg-white flex flex-col items-start justify-start min-w-[280px] max-w-[320px] text-left text-sm text-black font-inter mq925:hidden">
      <div className="self-stretch h-[68px] flex flex-col items-start justify-center pt-4 px-6 pb-3 box-border relative gap-[8px] text-2xl-9 font-archivo">
        <div className="flex-1 flex flex-row items-center justify-center relative gap-[6.4px]">
          <div className="overflow-hidden flex flex-row items-center justify-center relative gap-[6.97px]">
            <div className="h-[21px] w-[20.8px] relative rounded-[50%] bg-orange" />
            <div className="h-[12.2px] w-[14.1px] absolute my-0 mx-[!important] top-[4.86px] left-[-3px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#fff,_rgba(255,_255,_255,_0))] [transform:_rotate(-33.41deg)] [transform-origin:0_0] opacity-[0.6] z-[1]" />
            <img
              className="h-[7px] w-[7.5px] absolute my-0 mx-[!important] top-[0px] right-[0.5px] object-cover z-[2]"
              loading="eager"
              alt=""
              src="/union@2x.png"
            />
          </div>
          <img
            className="h-6 w-[121px] relative"
            loading="eager"
            alt=""
            src="/frame-3.svg"
          />
          <div className="w-[121px] absolute my-0 mx-[!important] top-[0px] left-[27.2px] tracking-[-0.68px] font-semibold hidden z-[2] mq450:text-lg">
            OrangeFarm
          </div>
        </div>
        <div className="w-6 h-6 my-0 mx-[!important] absolute top-[calc(50%_+_649px)] right-[-12px] rounded-lg bg-off-white flex flex-row items-center justify-center p-1 box-border">
          <img
            className="h-3 w-3 relative rounded overflow-hidden shrink-0 object-contain"
            alt=""
            src="/collapse-icon@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start p-2 gap-[8px]">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-3 pb-3 top-[0] z-[99] sticky">
          <div className="self-stretch rounded-xl bg-white flex flex-row items-center justify-start py-3 px-4 gap-[8px] border-[1px] border-solid border-light-gray">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/icon-from-tablerio.svg"
            />
            <input
              className="w-[45px] [border:none] [outline:none] font-inter text-sm bg-[transparent] h-3.5 relative tracking-[-0.25px] leading-[14px] text-mid-gray text-left inline-block"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
        <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/icon-from-tablerio-1.svg"
          />
          <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
            Dashboard
          </div>
        </div>
        <div className="self-stretch h-[41px] flex flex-row items-start justify-start min-w-[264px]">
          <div className="self-stretch flex-1 rounded-3xl flex flex-row items-center justify-start py-3 pr-9 pl-5 box-border relative gap-[12px] min-w-[264px] max-w-[320px]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-from-tablerio-2.svg"
            />
            <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
              Customers
            </div>
            <img
              className="h-4 w-4 absolute my-0 mx-[!important] top-[12.5px] left-[228px] overflow-hidden shrink-0"
              loading="eager"
              alt=""
              src="/closed.svg"
            />
          </div>
        </div>
        <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/icon-from-tablerio-3.svg"
          />
          <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
            All reports
          </div>
        </div>
        <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/icon-from-tablerio-4.svg"
          />
          <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
            Geography
          </div>
        </div>
        <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/icon-from-tablerio-5.svg"
          />
          <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
            Conversations
          </div>
        </div>
        <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/icon-from-tablerio-6.svg"
          />
          <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
            Deals
          </div>
        </div>
        <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/icon-from-tablerio-7.svg"
          />
          <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
            Export
          </div>
        </div>
      </div>
      <div className="self-stretch h-[180px] flex flex-col items-center justify-end pt-4 px-2 pb-6 box-border gap-[12px]">
        <div className="self-stretch h-10 flex flex-row items-center justify-start py-0 px-5 box-border gap-[12px]">
          <img
            className="h-8 w-8 relative object-cover"
            loading="eager"
            alt=""
          />
          <div className="flex flex-col items-start justify-center gap-[4px]">
            <div className="relative tracking-[-0.25px] font-medium">
              Gustavo Xavier
            </div>
            <div className="rounded-3xl bg-mid-orange flex flex-row items-center justify-center py-0 px-1.5 text-3xs">
              <div className="relative tracking-[-0.5px] leading-[16px]">
                Admin
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[2px]">
          <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/icon-from-tablerio-8.svg"
            />
            <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
              Settings
            </div>
          </div>
          <div className="w-full rounded-3xl flex flex-row items-center justify-start py-3 px-5 box-border gap-[12px] min-w-[264px] max-w-[320px] text-dark-red">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/icon-from-tablerio-9.svg"
            />
            <div className="flex-1 relative tracking-[-0.25px] leading-[14px]">
              Log out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
