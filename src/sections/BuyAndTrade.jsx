import React, { useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Select from "../Select";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import { FaExchangeAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SiTether, SiUsdcoin } from "react-icons/si";

export default function ConversionCrypto() {
  const [amount, setAmount] = useState("5,000");
  const [equivalent, setEquivalent] = useState("4,950");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USDT");
  const [isAnimating, setIsAnimating] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
  };

  const inputChangeHandler = (e, field) => {
    if (field === "amount") {
      setAmount(e.target.value);
    } else {
      setEquivalent(e.target.value);
    }
  };

  const swapCurrencies = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const tempCurrency = fromCurrency;
      setFromCurrency(toCurrency);
      setToCurrency(tempCurrency);

      const tempAmount = amount;
      setAmount(equivalent);
      setEquivalent(tempAmount);

      setIsAnimating(false);
    }, 300);
  };

  const getCurrencyIcon = (currency) => {
    switch (currency) {
      case "USDT":
        return <SiTether className="text-[#26A17B]" />;
      case "USDC":
        return <SiUsdcoin className="text-[#2775CA]" />;
      default:
        return <span className="font-bold">€</span>;
    }
  };

  return (
    <section className="container mx-auto py-32 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex items-center order-2 md:order-1">
          <div className="w-full space-y-8">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Recevez et convertissez <br />
                <span className="text-blue-gradient">
                  sur la plateforme crypto-fiat
                </span>{" "}
                <br />
                nouvelle génération.
              </h1>
              <p className="text-gray-600 text-lg">
                Générez un lien de paiement et recevez immédiatement
                l'équivalent en euros. Compatible avec USDT, USDC, SOL et EUROC.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
            >
              <form onSubmit={formHandler}>
                <div className="space-y-6">
                  <div className="relative">
                    <div className="flex justify-between gap-4">
                      <div className="flex-1 bg-gray-50 rounded-xl py-4 px-5 flex items-center group focus-within:ring-2 focus-within:ring-[#239D94]/20 transition-all">
                        <div className="border-r border-gray-200 pr-4">
                          <small className="text-[#239D94] font-medium">
                            Montant
                          </small>
                        </div>
                        <input
                          type="text"
                          value={amount}
                          onChange={(e) => inputChangeHandler(e, "amount")}
                          className="text-right outline-none w-full bg-transparent font-medium text-lg"
                        />
                      </div>
                      <div className="w-[120px]">
                        <div className="bg-gray-50 rounded-xl py-4 px-5 h-full flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-all">
                          <div className="flex items-center">
                            <span className="mr-2">
                              {getCurrencyIcon(fromCurrency)}
                            </span>
                            <span className="font-medium">{fromCurrency}</span>
                          </div>
                          <FaChevronDown className="text-gray-400 text-xs" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-full z-10">
                      <motion.div
                        animate={{ rotate: isAnimating ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={swapCurrencies}
                        className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:shadow-lg transition-all border border-gray-100"
                      >
                        <FaExchangeAlt className="text-[#239D94]" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="flex justify-between gap-4 mt-8">
                    <div className="flex-1 bg-gray-50 rounded-xl py-4 px-5 flex items-center group focus-within:ring-2 focus-within:ring-[#239D94]/20 transition-all">
                      <div className="border-r border-gray-200 pr-4">
                        <small className="text-[#239D94] font-medium">
                          Équivalent
                        </small>
                      </div>
                      <input
                        type="text"
                        value={equivalent}
                        onChange={(e) => inputChangeHandler(e, "equivalent")}
                        className="text-right outline-none w-full bg-transparent font-medium text-lg"
                      />
                    </div>
                    <div className="w-[120px]">
                      <div className="bg-gray-50 rounded-xl py-4 px-5 h-full flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-all">
                        <div className="flex items-center">
                          <span className="mr-2">
                            {getCurrencyIcon(toCurrency)}
                          </span>
                          <span className="font-medium">{toCurrency}</span>
                        </div>
                        <FaChevronDown className="text-gray-400 text-xs" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <PrimaryButton className="w-full py-4 text-base shadow-xl shadow-teal-200/20">
                    Générer un lien de paiement
                  </PrimaryButton>
                  <div className="flex justify-center mt-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      <span>Taux de change en temps réel</span>
                    </div>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="/assets/wallet.png"
                alt="Conversion Crypto-Fiat"
                className="max-w-full"
              />
            </div>

            {/* Animated elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-10 -right-10 bg-white p-3 rounded-lg shadow-lg z-20"
            >
              <div className="flex items-center gap-2">
                <SiTether className="text-[#26A17B]" />
                <span className="font-medium text-sm">→ €</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 -left-10 bg-white p-3 rounded-lg shadow-lg z-20"
            >
              <div className="flex items-center gap-2">
                <SiUsdcoin className="text-[#2775CA]" />
                <span className="font-medium text-sm">→ €</span>
              </div>
            </motion.div>

            {/* Background decorative elements */}
            <div className="absolute top-1/4 -right-10 w-40 h-40 bg-[#e0f7e9] rounded-full opacity-60 blur-xl -z-10"></div>
            <div className="absolute bottom-1/4 -left-10 w-40 h-40 bg-[#e0f7e9] rounded-full opacity-60 blur-xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
