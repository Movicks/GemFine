import {} from "react";

type Props = {
  cardholderName?: string;
  cardNumber?: string;
  expiryDate?: string;
  CardBalance: string;
  bgGradient?: string; // Optional prop for background gradient color
  freeze: boolean; // card freeze
};

export default function Creditcard({
  cardholderName,
  cardNumber,
  expiryDate,
  CardBalance,
  bgGradient, // Default gradient background class
  freeze,
}: Props) {
  return (
    <div
      className={`relative flex items-center justify-between w-full h-[13rem] ${bgGradient} rounded-lg text-white md:h-[17rem] overflow-hidden shadow-custom`}
    >
      <div className="h-full w-full max-w-[10rem] bg-gray-500 rounded-r-full opacity-20 shadow-custom border-r-2 border-red-500">
        <div className="h-full w-full max-w-[8rem] bg-gray-400 rounded-r-full opacity-90 shadow-custom border-r-2 border-red-500"></div>
      </div>
      <div className="bg-red-500 h-full w-1 rotate-[-20deg] opacity-20"></div>
      <div className="bg-gray-400 h-full w-1 rotate-[-20deg] opacity-20"></div>
      <div className="bg-red-500 h-full w-1 rotate-[-20deg] opacity-20"></div>
      <div className="bg-red-500 h-full w-1 rotate-[20deg] opacity-20"></div>
      <div className="bg-gray-400 h-full w-1 rotate-[20deg] opacity-20"></div>
      <div className="h-full w-full max-w-[10rem] bg-gray-500 rounded-l-full opacity-20 shadow-custom flex items-center justify-end border-l-2 border-red-500">
        <div className="h-full w-full max-w-[8rem] bg-gray-400 rounded-l-full opacity-90 shadow-custom border-l-2 border-red-500"></div>
      </div>

      {/* CARD DETAILS CONTAINER */}
      <div
        className={`absolute w-full h-full px-4 py-4 flex flex-col justify-between ${freeze ? "bg-white opacity-40" : ""}`}
      >
        <div className="w-full flex items-center justify-between h-9">
          <h1 className="text-[1.7rem] text-gray-300">GemFine</h1>
          <svg
            fill="white"
            width="110px"
            height="130px"
            viewBox="0 0 23 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path d="M16.539 9.186a4.155 4.155 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287-.039.009zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5l-1.31-5.939zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944v.002zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.339.339 0 0 0-.149-.199 6.948 6.948 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69v.001h.001z" />
            </g>
          </svg>
        </div>
        <div className="h-9 w-full flex justify-between items-center">
          <p className="text-2xl text-gray-300">{cardNumber}</p>
          <h1 className="text-[1.5rem] text-gray-300">{CardBalance}</h1>
        </div>
        <div className="h-9 w-full flex items-end justify-between">
          <div>
            <span className="text-lg text-gray-300">{cardholderName}</span>
          </div>
          <div>
            <span className="text-lg text-gray-300">{expiryDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
