import React from "react";
import SecondaryButton from "../components/buttons/SecondaryButton";
import { Fade } from "react-reveal";
import { BsCheckCircleFill } from "react-icons/bs";

export default function BusinessAccount() {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Fade up>
            <img src={"/assets/wallet.png"} alt="Compte Professionnel" />
          </Fade>
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-md space-y-4">
            <h1 className="text-3xl font-bold">
              Compte professionnel{" "}
              <span className="text-blue-gradient">intégré</span>
              <br /> pour marchands
            </h1>
            <p>
              Solution complète pour recevoir, convertir et gérer vos paiements
              crypto avec une expérience bancaire traditionnelle.
            </p>
            <ul>
              <li>
                <BsCheckCircleFill className="inline text-primary mr-2" />
                Relevés bancaires détaillés pour votre comptabilité
              </li>
              <li>
                <BsCheckCircleFill className="inline text-primary mr-2" />
                Rapports de transactions et factures automatiques
              </li>
              <li>
                <BsCheckCircleFill className="inline text-primary mr-2" />
                Compatible avec votre logiciel de gestion actuel
              </li>
            </ul>
            <SecondaryButton>Demander une démo</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
