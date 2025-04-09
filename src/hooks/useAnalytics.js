import { useEffect } from "react";
import ReactGA from "react-ga4";

const GA_ID = "G-K3HK20Q86G";

export const useAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize(GA_ID);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
};
