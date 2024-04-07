import { getCoinsByUser } from "@/lib/actions/coin.actions";
import { GetCoinsByUserParams } from "@/types";
import React from "react";
import Card from "./Card";
import { ICoin } from "@/lib/database/models/coin.model";

type PortfolioProps = {
  coins: ICoin[];
};

const Portfolio = async (coins: PortfolioProps) => {
  console.log(coins.coins[0].coin);
  return (
    <div>
      <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {coins.coins.map((coin) => {
          return (
            <li key={coin._id} className="flex justify-center">
              <Card coin={coin} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Portfolio;
