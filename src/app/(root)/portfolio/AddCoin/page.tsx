import AddCoinForm from '@/components/shared/AddCoinForm';
import { auth } from '@clerk/nextjs';
import React from 'react';

const AddCoin = () => {
    const { sessionClaims } = auth();

    const userId = sessionClaims?.userId as string;

    

    return (
        <>
        <section className="bg-primary-50 bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Add Coin</h3>
      </section>

      <div className="wrapper my-8">
        <AddCoinForm userId={userId} type="Add" />
      </div>
        </>
    );
};

export default AddCoin;