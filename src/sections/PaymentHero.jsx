import React from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import { BsChevronDown } from "react-icons/bs";

export default function PaymentHero() {
  return (
    <section className="relative pt-[140px] pb-28 overflow-hidden bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] flex justify-center">
      <span className="absolute bg-[#239d94] opacity-10 -left-28 -top-28 rounded-full blur-3xl aspect-square h-[350px] -z-10 animate-pulse" />
      <span className="absolute bg-gradient-to-br from-[#239d94] to-[#1a7b74] -right-28 -bottom-28 rounded-full opacity-[15%] blur-3xl delay-700 duration-1000 aspect-square h-[550px] -z-10" />
      <div className="container mx-auto grid md:grid-cols-2 items-center text-center md:text-left max-w-_xl">
        <div className="flex justify-center">
          <div className="space-y-4 max-w-2xl">
            <p className="text-[#239d94] font-medium">
              PASSERELLE DE PAIEMENT POUR MARCHANDS
            </p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-normal my-4">
              <span className="break-words">Transformez vos </span>
              <span className="break-words text-blue-gradient">
                Cryptomonnaies
              </span>
              <span> en Euros en un instant</span>
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto md:mx-0">
              Recevez des paiements en cryptomonnaies et encaissez-les
              directement en euros sur votre compte bancaire. Simplifiez vos
              transactions internationales sans intermédiaires ni délais.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <PrimaryButton className="w-full md:w-auto">
                Démarrer maintenant
              </PrimaryButton>
              <SecondaryButton className="w-full md:w-auto">
                Voir nos tarifs
                <BsChevronDown className="ml-2 inline" />
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div className="relative hidden md:flex justify-center">
          <img
            src="/assets/screenleft.png"
            alt="Passerelle de Paiement Crypto"
            className="max-w-[280px]"
          />
        </div>
      </div>
    </section>
  );
}
