import {} from "react";
import { MdCurrencyExchange } from "react-icons/md";

type Props = {};

function ExchangeMain({}: Props) {
  return (
    <div className="box box7 flex flex-col gap-1">
      <MdCurrencyExchange className="text-red-500 text-xl" />
      <p className="text-xs text-red-500">FX</p>
    </div>
  );
}

export default ExchangeMain;
