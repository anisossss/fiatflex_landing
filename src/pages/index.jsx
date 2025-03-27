import React from "react";
import Layout from "../components/Layout";
import PaymentHero from "../sections/PaymentHero";
import PaymentAdvantages from "../sections/PaymentAdvantages";
import CryptoSupport from "../sections/CryptoSupport";
import AppDownload from "../sections/AppDownload";
import ProcessusComponent from "../sections/ProcessusComponent";
import Faq from "../sections/Faq";
import Partner from "../sections/Partner";
import BackToTop from "../sections/BackToTop";

export default function Main() {
  return (
    <Layout>
      <PaymentHero />
      <PaymentAdvantages />
      <CryptoSupport />
      <ProcessusComponent />
      <AppDownload />
      <Faq />
      <Partner />
      <BackToTop />
    </Layout>
  );
}
