import "./Banner.scss";
import bannerService from "../../services/bannerService";
import { useEffect, useState } from "react";
import { BannerResponse } from "../../interfaces/BannerResponse";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Banner() {
  const [pageError, setPageError] = useState<boolean>(true);
  const [apiResponse, setApiResponse] = useState<BannerResponse | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await bannerService.fetchBannerDetails();
      if (response.status === "error") {
        setPageError(true);
        return;
      }
      setApiResponse(response.data);
      setPageError(false);
    } catch (error) {
      setPageError(true);
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {apiResponse ? (
          apiResponse["Details"].map((detail, index) => (
            <SwiperSlide key={index}>
              <div
                className="home-banner-wrapper"
                style={{
                  background: `linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%), url(${detail["ImageUrl"]}) center 25% / cover no-repeat`,
                }}
              >
                <div className="col home-banner-cta-col">
                  <div className="home-banner-cta-wrapper">
                    <h1 className="banner-header">{detail["Title"]}</h1>
                    <h5 className="banner-subheader">
                      {detail["Subtitle"].slice(0, 50)}
                    </h5>
                    <button className="banner-button button-dark">
                      Contact us
                    </button>
                  </div>
                </div>
                <div className="col home-banner-placeholder-col"></div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="home-banner-wrapper">
            <div className="col home-banner-cta-col">
              <div className="home-banner-cta-wrapper">
                <h1 className="banner-header">Lorem ipsum solor</h1>
                <h5 className="banner-subheader">
                  {pageError && "There was an error loading banner data"}
                </h5>
                <button className="banner-button button-dark">
                  Contact us
                </button>
              </div>
            </div>
            <div className="col home-banner-placeholder-col"></div>
          </div>
        )}
      </Swiper>
    </>
  );
}
