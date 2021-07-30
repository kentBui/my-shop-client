import React from "react";
import Image from "next/image";
import Link from "next/link";

const RelatedProductItem = () => {
  return (
    <div className="single-related-product d-flex">
      <Link href="/">
        <a>
          <Image width={70} height={70} src="/images/home/r1.webp" alt="" />
        </a>
      </Link>

      <div className="desc">
        <Link href="/">
          <a className="title">Black lace Heels</a>
        </Link>
        <div className="price">
          <h6>$189.00</h6>
          <h6 className="l-through">$210.00</h6>
        </div>
      </div>
    </div>
  );
};

export default RelatedProductItem;
