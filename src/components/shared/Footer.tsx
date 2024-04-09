import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="fixed bottom-0 flex-center wrapper flex-between flex gap-4 p-5 text-center sm:flex-row bg-green-400 text-white font-bold shadow-lg">
        <button><Link href={'/portfolio/AddCoin'}>Home</Link></button>
        <Separator orientation="vertical" className="border border-white h-5"/>
        <button><Link href={'/portfolio/AddCoin'}>Top 100</Link></button>
        <Separator orientation="vertical" className="border border-white h-5"/>
        <button><Link href={'/portfolio/AddCoin'}>Add Coin</Link></button>
        <Separator orientation="vertical" className="border border-white h-5"/>
        <button><Link href={'/portfolio'}>My Bag</Link></button>
      </div>
    </footer>
  );
};

export default Footer;
