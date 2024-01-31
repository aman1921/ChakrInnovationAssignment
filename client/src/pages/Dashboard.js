import Sidebar from "../components/Sidebar";
import MaskGroup from "../components/MaskGroup";
import Customer from "../components/Customer";
import ORMessageBar from "../components/ORMessageBar";
import LineChart from "../components/LineChart";

const Dashboard = () => {
  return (
    <div className="w-full relative rounded-[32px] bg-off-white overflow-hidden flex flex-row items-start justify-start pt-4 px-4 pb-0 box-border gap-[16px] tracking-[normal] mq925:pl-4 mq925:pr-4 mq925:box-border">
      <Sidebar />
      <main className="h-[907px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-[calc(100%_-_296px)] mq925:h-auto mq925:max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full shrink-0 text-left text-xl text-black font-inter">
          <MaskGroup />
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full mq925:flex-wrap">
            <div className="flex-1 rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start pt-6 px-0 pb-[25px] box-border gap-[29px] min-w-[361px] min-h-[400px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq450:min-w-full">
              <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                <div className="self-stretch flex flex-row items-center justify-between py-0 px-6 gap-[20px] mq450:flex-wrap">
                  <h3 className="m-0 relative text-inherit tracking-[-0.2px] font-semibold font-inherit mq450:text-base">
                    Customers
                  </h3>
                  <div className="flex flex-row items-start justify-start gap-[4px] text-sm text-dark-gray">
                    <div className="relative tracking-[-0.3px]">
                      <span>{`Sort by `}</span>
                      <span className="font-medium">Newest</span>
                    </div>
                    <img
                      className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon-from-tablerio-14.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start py-0 px-2 text-sm">
                  <Customer
                    chrisFriedkly="Chris Friedkly"
                    supermarketVillanova="Supermarket Villanova"
                    iconFromTablerio="pending_33:356"
                    iconFromTablerio1="pending_33:358"
                    iconFromTablerio2="pending_33:360"
                  />
                  <div className="self-stretch rounded-2xl bg-light-orange flex flex-row items-center justify-between py-[17px] pr-[26px] pl-4 gap-[20px] mq450:flex-wrap">
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="h-8 w-8 relative object-cover"
                        alt=""
                      />
                      <div className="flex flex-col items-start justify-start gap-[2px]">
                        <div className="relative tracking-[-0.3px] font-medium">
                          Maggie Johnson
                        </div>
                        <div className="relative text-xs tracking-[-0.3px] text-dark-gray">
                          Oasis Organic Inc.
                        </div>
                      </div>
                    </div>
                    <div className="h-6 flex flex-row items-center justify-start gap-[23px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/icon-from-tablerio-18.svg"
                      />
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/icon-from-tablerio-19.svg"
                      />
                      <input
                        className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                        type="checkbox"
                      />
                      <div className="h-[25px] w-px relative box-border opacity-[0.2] border-r-[1px] border-solid border-dark-orange" />
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/icon-from-tablerio-21.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <Customer
                      chrisFriedkly="Gael Harry"
                      supermarketVillanova="New York Finest Fruits"
                      iconFromTablerio="pending_33:326"
                      iconFromTablerio1="pending_33:328"
                      iconFromTablerio2="pending_33:330"
                      propMarginTop="unset"
                      propHeight="34px"
                    />
                    <Customer
                      chrisFriedkly="Jenna Sullivan"
                      supermarketVillanova="Walmart"
                      iconFromTablerio="pending_33:292"
                      iconFromTablerio1="pending_33:316"
                      iconFromTablerio2="pending_33:297"
                      propMarginTop="-1px"
                      propHeight="unset"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-6 text-sm text-dark-orange">
                <div className="flex flex-row items-end justify-start gap-[4px]">
                  <div className="relative tracking-[-0.3px]">
                    All customers
                  </div>
                  <img
                    className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/icon-from-tablerio-28.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[540px] flex flex-col items-start justify-start gap-[15px] min-w-[540px] max-w-full mq700:min-w-full mq925:flex-1">
            <div className="self-stretch rounded-2xl bg-white overflow-hidden flex flex-col items-center justify-start p-6 box-border gap-[8px] min-w-[320px] min-h-[200px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-between pt-0 px-0 pb-4 gap-[20px] mq450:flex-wrap">
                <h3 className="m-0 relative text-inherit tracking-[-0.2px] font-semibold font-inherit mq450:text-base">
                  Growth
                </h3>
                <div className="flex flex-row items-start justify-start gap-[4px] text-sm text-dark-gray">
                  <div className="relative tracking-[-0.3px]">Yearly</div>
                  <img
                    className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/icon-from-tablerio-14.svg"
                  />
                </div>
              </div>
              <div style={{ width: '100%' }}> 
              <LineChart/>
              </div>
            </div>

              <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-base text-mid-gray mq450:flex-wrap">
                <div className="flex-1 rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start p-4 box-border gap-[16px] min-w-[127px]">
                  <div className="relative tracking-[-0.4px] font-semibold">
                    Top month
                  </div>
                  <div className="self-stretch h-[61px] flex flex-col items-start justify-end text-5xl text-dark-orange">
                    <h2 className="m-0 h-[29px] relative text-inherit tracking-[-0.2px] font-semibold font-inherit inline-block mq450:text-lgi">
                      November
                    </h2>
                    <div className="relative text-base tracking-[-0.2px] font-medium text-orange">
                      2019
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start p-4 box-border gap-[16px] min-w-[127px]">
                  <div className="relative tracking-[-0.4px] font-semibold">
                    Top year
                  </div>
                  <div className="self-stretch h-[61px] flex flex-col items-start justify-end gap-[4px] text-5xl text-dark-orange">
                    <div className="h-[29px] relative tracking-[-0.2px] font-semibold inline-block mq450:text-lgi">
                      2023
                    </div>
                    <div className="relative text-sm tracking-[-0.3px] text-dark-gray">
                      96K sold so far
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start p-4 box-border gap-[16px] min-w-[127px]">
                  <div className="relative tracking-[-0.4px] font-semibold">
                    Top buyer
                  </div>
                  <div className="self-stretch h-[61px] flex flex-col items-start justify-end gap-[8px] text-xs text-black">
                    <img
                      className="w-6 h-6 relative object-cover"
                      alt=""
                    />
                    <div className="self-stretch flex flex-col items-start justify-center gap-[4px]">
                      <div className="relative tracking-[-0.3px] font-medium">
                        Maggie Johnson
                      </div>
                      <div className="relative text-3xs tracking-[-0.3px] text-dark-gray">
                        Oasis Organic Inc.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ORMessageBar />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
