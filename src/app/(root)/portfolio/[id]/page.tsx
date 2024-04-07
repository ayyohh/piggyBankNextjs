import { getCoinById } from "@/lib/actions/coin.actions";
import { SearchParamProps } from "@/types";
import React from "react";

const SpecificCoinPage = async ({ params: { id } }: SearchParamProps) => {

    const coin = await getCoinById(id);
    console.log(coin);

  return (
    <div>
      <p>this should be page that comes up after adding a coin</p>
      <p>{coin.coin}</p>
    </div>
  );
};

export default SpecificCoinPage;
