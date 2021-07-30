import React from "react";
import Link from "next/link";
import Image from "next/image";

const BrandItem = () => {
  return (
    <>
      <Link href="/">
        <a className="col single-img">
          <Image
            width={128}
            height={58}
            className="mx-auto img-fluid d-block"
            src="/images/home/1.webp"
            alt=""
          />
        </a>
      </Link>
    </>
  );
};

export default BrandItem;
