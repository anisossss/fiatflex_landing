import React from "react";
import { BsArrowRight } from "react-icons/bs";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const ProcessStep = ({ number, title, description, delay, isVisible }) => {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-xl relative h-full transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } hover:shadow-2xl hover:-translate-y-1`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Futuristic step number */}
      <div className="absolute -top-4 -left-4 bg-[#239D94] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md z-10">
        {number}
      </div>

      <h3 className="font-medium text-lg mb-3 mt-2">{title}</h3>
      <p className="text-gray-600">{description}</p>

      {/* Decorative dots */}
      <div className="absolute bottom-2 right-2 flex space-x-1">
        <span className="block w-1 h-1 rounded-full bg-[#239D94]/50"></span>
        <span className="block w-1 h-1 rounded-full bg-[#239D94]/30"></span>
        <span className="block w-1 h-1 rounded-full bg-[#239D94]/10"></span>
      </div>
    </div>
  );
};

const CircleArrow = ({ delay, isVisible }) => {
  return (
    <div
      className={`hidden md:flex items-center justify-center transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#E0F7E9] to-[#DCFFF5] flex items-center justify-center shadow-md relative group">
        <BsArrowRight className="text-[#239D94] text-xl transition-transform group-hover:translate-x-1" />
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#239D94]/20 animate-ping opacity-75"></span>
      </div>
    </div>
  );
};

export default function ProcessusComponent() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,100 Q150,50 300,100 T600,100 T900,100 T1200,100 T1500,100"
            stroke="#239D94"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,200 Q150,150 300,200 T600,200 T900,200 T1200,200 T1500,200"
            stroke="#239D94"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,300 Q150,250 300,300 T600,300 T900,300 T1200,300 T1500,300"
            stroke="#239D94"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div ref={sectionRef} className="container mx-auto relative">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="inline-block px-4 py-1 bg-[#239d94]/10 rounded-full text-[#239d94] font-medium text-sm mb-4">
            SIMPLE ET RAPIDE
          </div>
          <h2 className="text-4xl font-semibold mb-4">
            Processus de <span className="text-blue-gradient">Paiement</span>{" "}
            Simplifié
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Notre solution transforme des paiements complexes en un processus
            fluide en quatre étapes simples.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-7 relative">
            <div className="md:col-span-1">
              <ProcessStep
                number="1"
                title="Génération"
                description="Créez un lien de paiement spécifiant le montant en euros et les cryptomonnaies acceptées."
                delay={200}
                isVisible={isVisible}
              />
            </div>

            <CircleArrow delay={400} isVisible={isVisible} />

            <div className="md:col-span-1">
              <ProcessStep
                number="2"
                title="Réception"
                description="Le client paie en crypto via le lien ou QR code. La transaction est vérifiée instantanément."
                delay={600}
                isVisible={isVisible}
              />
            </div>

            <CircleArrow delay={800} isVisible={isVisible} />

            <div className="md:col-span-1">
              <ProcessStep
                number="3"
                title="Conversion"
                description="Le système convertit automatiquement la crypto en euros au taux de change optimal."
                delay={1000}
                isVisible={isVisible}
              />
            </div>

            <CircleArrow delay={1200} isVisible={isVisible} />

            <div className="md:col-span-1">
              <ProcessStep
                number="4"
                title="Transfert SEPA"
                description="Les fonds sont transférés sur votre compte bancaire via SEPA, généralement sous 24h."
                delay={1400}
                isVisible={isVisible}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
