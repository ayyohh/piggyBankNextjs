import { getCoinsByUser } from '@/lib/actions/coin.actions';
import { auth } from '@clerk/nextjs';
import React from 'react';
import Portfolio from '@/components/shared/Portfolio';
import { GetCoinsByUserParams, SearchParamProps } from '@/types';


const PortfolioPage = async ({searchParams}: SearchParamProps ) => {
    const { sessionClaims } = auth();

    const userId = sessionClaims?.userId as string;

    const coinData = await getCoinsByUser(userId);
    console.log('this is all coins by user from mongoDB', coinData);


    return (
        <Portfolio coins={coinData?.data}/>
    );
};

export default PortfolioPage;