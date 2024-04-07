import { ICoin } from "@/lib/database/models/coin.model";
import { GetAllCoinsParams } from "@/types";
import React from "react";

type CardProps = {
  coin: ICoin;
};
const Card = (coin: CardProps) => {
  console.log(coin.coin.coin);
  return (
    <div>
      <p>{coin.coin.coin}</p>
      <p>{coin.coin._id}</p>
    </div>
  );
};

export default Card;
