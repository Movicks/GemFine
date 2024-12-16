import {} from "react";
import { MdLiveTv } from "react-icons/md";

type Props = {};

function TelevisionBtn({}: Props) {
  return (
    <button className="box box5 flex flex-col gap-1">
      <MdLiveTv className="text-red-500 text-xl" />
      <p className="text-xs text-red-500">TV Sub</p>
    </button>
  );
}

export default TelevisionBtn;
