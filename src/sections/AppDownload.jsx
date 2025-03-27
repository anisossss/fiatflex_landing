import React from "react";
import { Fade } from "react-reveal";
import PrimaryButton from "../components/buttons/PrimaryButton";

export default function AppDownload() {
  return (
    <section className="container mx-auto py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold leading-tight">
              Emportez notre solution{" "}
              <span className="text-blue-gradient">partout avec vous</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Gérez vos transactions crypto-fiat, suivez vos paiements et
              accédez à vos statistiques en temps réel depuis notre application
              mobile intuitive et sécurisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://playstore.com"
                target="_blank"
                className="transform transition hover:scale-105"
              >
                <img
                  src="/assets/appstore.png"
                  alt="Télécharger sur l'App Store"
                  className="h-20"
                />
              </a>
              <a
                href="https://appstore.com"
                target="_blank"
                className="transform transition hover:scale-105"
              >
                <img
                  src="/assets/playstore.png"
                  alt="Télécharger sur Google Play"
                  className="h-20"
                />
              </a>
            </div>
          </div>
          <div>
            <Fade up>
              <img
                src={"/assets/screenleft.png"}
                alt="Notre application mobile"
                className="max-w-full mx-auto"
                width={350}
              />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
