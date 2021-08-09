import Image from "next/image";
import React from "react";

const ArticlesArea = () => {
  return (
    <>
      <div className="section-top-border">
        <h3 className="mb-30">Left Aligned</h3>
        <div className="row">
          <div className="col-md-3">
            <Image
              width={263}
              height={180}
              src="/images/element/d.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-9 mt-sm-20">
            <p>
              Recently, the US Federal government banned online casinos from
              operating in America by making it illegal to transfer money to
              them through any US bank or payment system. As a result of this
              law, most of the popular online casino networks such as Party
              Gaming and PlayTech left the United States. Overnight, online
              casino players found themselves being chased by the Federal
              government. But, after a fortnight, the online casino industry
              came up with a solution and new online casinos started taking
              root. These began to operate under a different business umbrella,
              and by doing that, rendered the transfer of money to and from them
              legal. A major part of this was enlisting electronic banking
              systems that would accept this new clarification and start doing
              business with me. Listed in this article are the electronic
              banking systems that accept players from the United States that
              wish to play in online casinos.
            </p>
          </div>
        </div>
      </div>

      <div className="section-top-border text-right">
        <h3 className="mb-30">Right Aligned</h3>
        <div className="row">
          <div className="col-md-9">
            <p className="text-right">
              Over time, even the most sophisticated, memory packed computer can
              begin to run slow if we don’t do something to prevent it. The
              reason why has less to do with how computers are made and how they
              age and more to do with the way we use them. You see, all of the
              daily tasks that we do on our PC from running programs to
              downloading and deleting software can make our computer sluggish.
              To keep this from happening, you need to understand the reasons
              why your PC is getting slower and do something to keep your PC
              running at its best. You can do this through regular maintenance
              and PC performance optimization programs
            </p>
            <p className="text-right">
              Before we discuss all of the things that could be affecting your
              PC’s performance, let’s talk a little about what symptoms
            </p>
          </div>
          <div className="col-md-3">
            <Image
              width={263}
              height={180}
              src="/images/element/d.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="section-top-border">
        <h3 className="mb-30">Definition</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="single-defination">
              <h4 className="mb-20">Definition 01</h4>
              <p>
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-defination">
              <h4 className="mb-20">Definition 02</h4>
              <p>
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-defination">
              <h4 className="mb-20">Definition 03</h4>
              <p>
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesArea;
