import {} from "react";
import { TfiGift } from "react-icons/tfi";

type Props = {};

function GiftCardsBtn({}: Props) {
  return (
    <div className="box flex flex-col gap-1">
      <TfiGift className="text-red-500 text-xl" />
      <p className="text-xs text-red-500">GiftCard</p>
    </div>
  );
}

export default GiftCardsBtn;
