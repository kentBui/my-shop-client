import React from "react";
import Image from "next/image";
import Link from "next/link";

const BrandArea = () => {
  return (
    <section className="brand-area section_gap">
      <div className="container">
        <div className="row">
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

          <Link href="/">
            <a className="col single-img">
              <Image
                width={128}
                height={58}
                className="mx-auto img-fluid d-block"
                src="/images/home/2.webp"
                alt=""
              />
            </a>
          </Link>

          <Link href="/">
            <a className="col single-img">
              <Image
                width={128}
                height={58}
                className="mx-auto img-fluid d-block"
                src="/images/home/3.webp"
                alt=""
              />
            </a>
          </Link>

          <Link href="/">
            <a className="col single-img">
              <Image
                width={128}
                height={58}
                className="mx-auto img-fluid d-block"
                src="/images/home/4.webp"
                alt=""
              />
            </a>
          </Link>

          <Link href="/">
            <a className="col single-img">
              <Image
                width={128}
                height={58}
                className="mx-auto img-fluid d-block"
                src="/images/home/5.webp"
                alt=""
              />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandArea;
