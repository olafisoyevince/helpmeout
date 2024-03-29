import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { ArrowDown2 } from "iconsax-react";

const DashboardNavbar = () => {
  return (
    <div className=" flex font-medium justify-between items-center px-[20px] md:px[50px] lg:px-[70px] xl:px-[100px] py-7">
      <Link href="/">
        <Image
          className="relative cursor-pointer"
          src="/logo.svg"
          alt="Help me out logo"
          width={120}
          height={25}
          priority
        />
      </Link>

      <div className=" hidden md:flex gap-10 ">
        <p className=" ">Features</p>
        <p>How It Works</p>
      </div>

      <div className=" flex items-center gap-3">
        <p>John Mark</p>
        <ArrowDown2 size="18" />
      </div>
    </div>
  );
};

export default DashboardNavbar;
