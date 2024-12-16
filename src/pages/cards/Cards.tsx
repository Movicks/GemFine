import { useState } from "react";
import Creditcard from "../../components/creditcards/Creditcard";
import CardButtons from "./../../components/creditcards/CardButtons";
import CardHistory from "../../components/creditcards/CardHistory";
import VirtualATMCardChart from "../../libs/charts/VirtualATMCardChart";
// import Chart from "../../libs/charts/Chart";

const Cards = () => {
  const [isFrozen, setIsFrozen] = useState<boolean>(false);

  const toggleFreeze = () => {
    setIsFrozen(!isFrozen);
  };
  return (
    <section className="pb-[5rem] flex flex-col gap-3 lg:flex-row lg:justify-between">
      <div className="flex flex-col gap-3 w-full">
        <Creditcard
          cardholderName="Onai Victor Idepe"
          cardNumber="**** **** **** 5678"
          expiryDate="11/25"
          CardBalance="$5,000"
          bgGradient="bg-blackGradient"
          freeze={isFrozen}
        />
        <CardButtons freeze={isFrozen} onToggleFreeze={toggleFreeze} />

        <CardHistory />
      </div>
      <div className="w-full max-w-[30rem] md:h-[40rem] md:px-2">
        <VirtualATMCardChart />
      </div>
    </section>
  );
};

export default Cards;
