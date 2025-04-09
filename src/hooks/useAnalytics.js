import { useEffect } from "react";
import ReactGA from "react-ga4";

const GA_ID = "G-PX31ELZ005";

export const useAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize(GA_ID);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
};
