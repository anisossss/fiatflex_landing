import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <img src="/assets/logo.png" alt="Logo" className="h-20 mb-4" />
            <p className="text-gray-600 mb-4">
              Votre passerelle de paiement crypto-fiat pour simplifier vos
              transactions internationales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#239d94] hover:text-[#1a7b74]">
                <BsFacebook size={20} />
              </a>
              <a href="#" className="text-[#239d94] hover:text-[#1a7b74]">
                <BsTwitter size={20} />
              </a>
              <a href="#" className="text-[#239d94] hover:text-[#1a7b74]">
                <BsLinkedin size={20} />
              </a>
              <a href="#" className="text-[#239d94] hover:text-[#1a7b74]">
                <BsInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#239d94]">
                  Paiement en ligne
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#239d94]">
                  Paiement récurrent
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#239d94]">
                  Intégration e-commerce
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#239d94]">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#239d94]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#239d94]">
                  Tutoriels
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#239d94]">
                  Centre d'aide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#239d94]">
                  À propos
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-600 hover:text-[#239d94]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#239d94]">
                  Partenaires
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2025 FIATFLEX. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-[#239d94]">
              Mentions légales
            </a>
            <a href="#" className="text-gray-600 hover:text-[#239d94]">
              Confidentialité
            </a>
            <a href="#" className="text-gray-600 hover:text-[#239d94]">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
