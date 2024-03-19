import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <p>2024 PiggyBank. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
