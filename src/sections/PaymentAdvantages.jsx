import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Fade } from "react-reveal";

export default function PaymentAdvantages() {
  return (
    <section className="container mx-auto py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <Fade up>
            <img
              src={"/assets/illustrations/wallet.png"}
              alt="Avantages Passerelle de Paiement"
              width={300}
            />
          </Fade>
        </div>
        <div className="flex justify-center">
          <div className="max-w-md">
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold">
                Votre Passerelle de Paiement{" "}
                <span className="text-blue-gradient">Nouvelle Génération</span>
              </h1>
              <div className="space-y-2">
                <h3 className="font-medium text-lg flex items-start">
                  <BsCheckCircleFill className="text-[#239D94] mr-3 mt-1 flex-shrink-0" />
                  <span>Conversion Instantanée</span>
                </h3>
                <p className="text-gray-600 pl-8">
                  Transformez vos cryptomonnaies en euros en moins de 5 minutes,
                  directement sur votre compte bancaire professionnel.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-lg flex items-start">
                  <BsCheckCircleFill className="text-[#239D94] mr-3 mt-1 flex-shrink-0" />
                  <span>Sans Frontières</span>
                </h3>
                <p className="text-gray-600 pl-8">
                  Acceptez des paiements internationaux sans frais
                  supplémentaires ni contraintes géographiques, en toute
                  simplicité.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-lg flex items-start">
                  <BsCheckCircleFill className="text-[#239D94] mr-3 mt-1 flex-shrink-0" />
                  <span>Solution Écologique</span>
                </h3>
                <p className="text-gray-600 pl-8">
                  Optez pour une blockchain éco-responsable avec des
                  transactions optimisées consommant peu d'énergie.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-lg flex items-start">
                  <BsCheckCircleFill className="text-[#239D94] mr-3 mt-1 flex-shrink-0" />
                  <span>Sécurité Maximale</span>
                </h3>
                <p className="text-gray-600 pl-8">
                  Bénéficiez des derniers protocoles de sécurité et d'une
                  conformité totale avec les réglementations bancaires
                  européennes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
