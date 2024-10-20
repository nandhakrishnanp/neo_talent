import React from "react";
import Navbar from "./Navbar";
import SIdebar from "./SIdebar";
import ApplicationRateChart from "./ApplicationChart";
import TimeToFillChart from "./TimeFill";
import OfferAcceptanceRateChart from "./OfferAcceptence";
import CandidateQualityChart from "./CandidateQuality";

const Analysis = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex">
        <SIdebar />
        <div className=" w-[80%] p-9">
          <ApplicationRateChart />
          <h2 className="px-4 py-3 text-center text-lg font-poppins text-Primary font-semibold">
                Number of Applications vs Month
            </h2>

          <div className=" my-3">
            <TimeToFillChart />

            <h2 className="px-4 py-3 text-center text-lg font-poppins text-Primary font-semibold">
                Number of days to fill a Department job vs Days
            </h2>

          </div>

          <div className=" my-8 ">
            <OfferAcceptanceRateChart />
            <h2 className="px-4 py-3 text-center text-lg font-poppins text-Primary font-semibold">
                Offer Acceptance Rate
            </h2>

          </div>
          <CandidateQualityChart/>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
