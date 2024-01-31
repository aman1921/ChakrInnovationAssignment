import { useMemo } from "react";

const Customer = ({
  avatar,
  chrisFriedkly,
  supermarketVillanova,
  iconFromTablerio,
  iconFromTablerio1,
  iconFromTablerio2,
  propMarginTop,
  propHeight,
}) => {
  const customerStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const textStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className="self-stretch rounded-2xl flex flex-row items-center justify-start p-4 gap-[12px] text-left text-sm text-black font-inter mq450:flex-wrap"
      style={customerStyle}
    >
      <img className="h-8 w-8 relative object-cover" alt="" src={avatar} />
      <div
        className="flex flex-col items-start justify-start gap-[2px]"
        style={textStyle}
      >
        <div className="relative tracking-[-0.3px] font-medium">
          {chrisFriedkly}
        </div>
        <div className="relative text-xs tracking-[-0.3px] text-dark-gray">
          {supermarketVillanova}
        </div>
      </div>
      <div className="h-6 w-6 hidden flex-row items-center justify-center">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          alt=""
          src={iconFromTablerio}
        />
      </div>
      <div className="h-6 w-6 hidden flex-row items-center justify-center">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          alt=""
          src={iconFromTablerio1}
        />
      </div>
      <div className="h-6 w-6 hidden flex-row items-center justify-center">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          alt=""
          src={iconFromTablerio2}
        />
      </div>
    </div>
  );
};

export default Customer;
