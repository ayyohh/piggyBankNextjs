import { ICoin } from "@/lib/database/models/coin.model";
import { GetAllCoinsParams } from "@/types";
import React from "react";
import { DeleteConfirmation } from "./DeleteConfirmation";

type CardProps = {
  coin: ICoin;
};
const Card = (coin: CardProps) => {
  console.log(coin.coin.coin);
  return (
    <div className="group relative flex min-h-[80px] w-full overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
      <div className="mt-5 ml-1">{coin.coin.coin}</div>

      <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
        <DeleteConfirmation coinId={coin.coin._id} />
      </div>
    </div>
  );
};

export default Card;
