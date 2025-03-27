import React from "react";
import partner1 from "../../public/assets/images/partners/bnb.svg";
import partner2 from "../../public/assets/images/partners/solana.png";
import partner3 from "../../public/assets/images/partners/circle.png";
import { Fade } from "react-reveal";

export default function Partner() {
  return (
    <section className="px-6">
      <div className="container mx-auto px-4">
        <div className="   py-20 px-6 md:px-12">
          <div className="flex justify-center mb-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                Partenaires de confiance à travers le monde
              </h3>
              <p className="text-gray-600 mt-2">
                Nous collaborons avec des leaders mondiaux pour garantir
                fiabilité et excellence.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-12 mt-12 text-center">
            <Fade up>
              <div className=" p-6 flex items-center justify-center transition-transform transform hover:scale-105">
                <img
                  width={150}
                  src={partner1}
                  className=" filter grayscale hover:grayscale-0 transition-all duration-300"
                  alt="partenaire1"
                />
              </div>
            </Fade>
            <Fade up delay={200}>
              <div className=" p-6 flex items-center justify-center transition-transform transform hover:scale-105">
                <img
                  width={150}
                  src={partner2}
                  className=" filter grayscale hover:grayscale-0 transition-all duration-300"
                  alt="partenaire2"
                />
              </div>
            </Fade>
            <Fade up delay={400}>
              <div className=" p-6 flex items-center justify-center transition-transform transform hover:scale-105">
                <img
                  width={150}
                  src={partner3}
                  className=" filter grayscale hover:grayscale-0 transition-all duration-300"
                  alt="partenaire3"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
