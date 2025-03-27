import React from "react";
import SecondaryButton from "../components/buttons/SecondaryButton";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { BsArrowRight } from "react-icons/bs";

export default function CryptoSupport() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section className="px-6 py-16 relative overflow-hidden">
      {/* Futuristic background with grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#239d94 1px, transparent 1px), linear-gradient(to right, #239d94 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20 relative overflow-hidden shadow-xl"
        >
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#239d94]/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#239d94]/5 rounded-full blur-xl transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center">
              <div
                className={`max-w-md space-y-6 transition-all duration-1000 transform ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-12 opacity-0"
                }`}
              >
                <h1 className="text-3xl font-semibold leading-normal relative inline-block">
                  Cryptomonnaies{" "}
                  <span className="text-blue-gradient">Acceptées</span>
                  <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-gradient rounded-full"></div>
                </h1>

                <div
                  className="space-y-3 transition-all duration-700 transform"
                  style={{ transitionDelay: "200ms" }}
                >
                  <h3 className="font-medium text-lg flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#239d94]/10 flex items-center justify-center text-[#239d94] mr-3">
                      1
                    </span>
                    Stablecoins Supportés
                  </h3>
                  <p className="text-gray-600 pl-11">
                    Acceptez USDT et USDC avec des taux de change stables et
                    transparents, sans fluctuations imprévisibles.
                  </p>
                </div>

                <div
                  className="space-y-3 transition-all duration-700 transform"
                  style={{ transitionDelay: "400ms" }}
                >
                  <h3 className="font-medium text-lg flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#239d94]/10 flex items-center justify-center text-[#239d94] mr-3">
                      2
                    </span>
                    Support Blockchain Natif
                  </h3>
                  <p className="text-gray-600 pl-11">
                    Acceptez Solana (SOL) et les stablecoins européens comme
                    EUROC, pour une flexibilité maximale dans vos transactions.
                  </p>
                </div>

                <div
                  className="space-y-3 transition-all duration-700 transform"
                  style={{ transitionDelay: "600ms" }}
                >
                  <h3 className="font-medium text-lg flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#239d94]/10 flex items-center justify-center text-[#239d94] mr-3">
                      3
                    </span>
                    Conversion Multi-Devises
                  </h3>
                  <p className="text-gray-600 pl-11">
                    Convertissez automatiquement en euros avec des frais
                    minimaux et des taux de change compétitifs.
                  </p>
                </div>

                <div
                  className="flex space-x-4 pt-4 transition-all duration-700 transform"
                  style={{ transitionDelay: "800ms" }}
                >
                  <SecondaryButton className="group transform transition-all duration-300 hover:scale-105 shadow-md">
                    <span>Voir les Cryptomonnaies</span>
                    <BsArrowRight className="ml-2 inline transition-transform group-hover:translate-x-1" />
                  </SecondaryButton>
                  <a href="#">
                    <button className="py-3 px-6 text-[#239D94] font-medium relative group">
                      En savoir plus
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#239D94] group-hover:w-full transition-all duration-300"></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`flex items-center justify-center transition-all duration-1000 transform relative ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              {/* Floating crypto icons - Now bigger and closer together */}
              <div className="relative w-full h-72">
                {/* USDT coin */}
                <div
                  className="absolute top-1/2 right-1/2 mr-6 p-4 rounded-full bg-white shadow-lg animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <img src="/assets/usdt.png" alt="USDT" width={160} />
                </div>

                {/* USDC coin */}
                <div
                  className="absolute bottom-1/4 left-1/3 p-4 rounded-full bg-white shadow-lg animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <img src="/assets/usdc.png" alt="USDC" width={160} />
                </div>

                {/* Solana coin */}
                <div
                  className="absolute top-1/2 left-1/2 p-4 rounded-full bg-white shadow-lg animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  <img src="/assets/solanaa.png" alt="SOL" width={160} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
