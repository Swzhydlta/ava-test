import "./Banner.scss";
import bannerService from "../../services/bannerService";
import { useEffect, useState } from "react";
import { BannerResponse } from "../../interfaces/BannerResponse";

export default function Banner() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pageError, setPageError] = useState<boolean>(true);
  const [apiResponse, setApiResponse] = useState<BannerResponse | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await bannerService.fetchBannerDetails();
      if (response.status === "error") {
        setPageError(true);
        return;
      }
      setApiResponse(response.data);
      console.log("response", response);
      setIsLoading(false);
      setPageError(false);
    } catch (error) {
      setPageError(true);
    }
  };
  return (
    <div id="home-banner-wrapper">
      <div className="col home-banner-cta-col">
        <div className="home-banner-cta-wrapper">
          <h1 id="banner-header">Lorem ipsum solor</h1>
          <h5 id="banner-subheader">
            Quem vide tincidunt pri el, id mea omnium denique
          </h5>
          <button id="banner-button" className="button-dark">
            Contact us
          </button>
        </div>
      </div>
      <div className="col home-banner-placeholder-col"></div>
    </div>
  );
}
