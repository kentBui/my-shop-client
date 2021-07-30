import React from "react";
import Image from "next/image";
import Link from "next/link";

const AdsBlackFriday = () => {
  return (
    <div className="col-lg-3">
      <div className="ctg-right">
        <Link href="/">
          <a target="_blank" rel="noreferrer">
            <Image
              width={360}
              height={425}
              className="mx-auto img-fluid d-block"
              src="/images/home/c5.webp"
              alt=""
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AdsBlackFriday;
