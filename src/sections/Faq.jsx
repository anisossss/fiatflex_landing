import React, { useState } from "react";
import { BsChevronUp, BsQuestionCircle } from "react-icons/bs";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const FaqItem = ({ open, title, children, delay, isVisible }) => {
  const [isOpen, setIsOpen] = useState(open ? true : false);

  return (
    <div
      className={`mb-6 border-b border-gray-200 pb-4 transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="flex justify-between py-3 cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium text-lg group-hover:text-[#239d94] transition-colors duration-300 flex items-center">
          <BsQuestionCircle className="mr-3 text-[#239d94] flex-shrink-0" />
          <span>{title}</span>
        </h3>
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#239d94]/10 transition-colors duration-300">
          <BsChevronUp
            className={`transition-transform duration-300 text-[#239d94] ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 text-gray-600 relative pl-9`}
        style={{
          maxHeight: isOpen ? "200px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="pb-3">{children}</p>
      </div>
    </div>
  );
};

export default function Faq() {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section
      ref={sectionRef}
      className="container mx-auto py-32 relative overflow-hidden"
    >
      {/* Background gradient spot */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#239d94]/5 to-[#239d94]/10 rounded-full blur-3xl"></div>

      <div className="grid md:grid-cols-2 gap-10 px-4 relative ">
        <div className="mb-4 flex items-center justify-center">
          <div
            className={`relative transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#239d94]/20 to-transparent rounded-full blur-xl animate-pulse-slow"></div>

            <img
              src={"/assets/illustrations/okay.png"}
              alt="FAQ"
              className="max-w-full relative z-10 animate-float"
              width={250}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <span className="text-[#239d94] font-medium inline-block px-3 py-1 bg-[#239d94]/10 rounded-full text-sm">
                ASSISTANCE
              </span>
              <h2 className="font-semibold text-4xl mt-3 mb-8 leading-normal">
                Questions fréquemment posées
              </h2>
            </div>

            <div className="space-y-2">
              <FaqItem
                open={true}
                title="Comment fonctionne la conversion crypto-fiat ?"
                delay={300}
                isVisible={isVisible}
              >
                Notre solution permet de recevoir des paiements en
                cryptomonnaies (USDT, USDC, SOL, EUROC) et de les convertir
                automatiquement en euros. Le montant est ensuite transféré sur
                votre compte bancaire via SEPA, généralement en moins de 24
                heures.
              </FaqItem>

              <FaqItem
                open={false}
                title="Quels sont les frais appliqués ?"
                delay={500}
                isVisible={isVisible}
              >
                Nous appliquons une commission unique sur chaque transaction,
                allant de 0,9% à 1,5% selon votre volume mensuel. Aucun frais
                caché ni coût d'installation. Les frais de réseau blockchain
                sont inclus dans notre commission.
              </FaqItem>

              <FaqItem
                open={false}
                title="La plateforme est-elle sécurisée ?"
                delay={700}
                isVisible={isVisible}
              >
                Absolument. Notre plateforme utilise les dernières technologies
                de cryptographie et d'authentification pour sécuriser toutes les
                transactions. Nous respectons également les normes les plus
                strictes en matière de conformité réglementaire et de protection
                des données.
              </FaqItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
