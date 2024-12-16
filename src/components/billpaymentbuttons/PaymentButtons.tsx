import {} from "react";
import AirtimeBills from "./billsbuttons/AirtimeBills";
import DataBills from "./billsbuttons/DataBills";
import ElectricityBills from "./billsbuttons/ElectricityBills";
import MoreBtns from "./billsbuttons/MoreBtns";
import TelevisionBtn from "./billsbuttons/TelevisionBtn";
import LifestyleBtn from "./lifestyles/LifestyleBtn";
import GiftCardsBtn from "./giftcards/GiftCardsBtn";
import ExchangeMain from "./ForeignEchanges/ExchangeMain";

type Props = {};

function PaymentButtons({}: Props) {
  return (
    <div className="flex-container">
      <AirtimeBills />
      <DataBills />
      <ElectricityBills />
      <AirtimeBills />
      <DataBills />
      <ElectricityBills />
      <AirtimeBills />
      <TelevisionBtn />
      <GiftCardsBtn />
      <LifestyleBtn />
      <ExchangeMain />
      <MoreBtns />
    </div>
  );
}

export default PaymentButtons;
