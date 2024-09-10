import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="text-center py-8 ">
      <p className="bold text-xl">
        Go to Home Page{" "}
        <Link href={"/"} className="text-green-500">
          Click Here
        </Link>
      </p>
    </div>
  );
};

export default Header;
