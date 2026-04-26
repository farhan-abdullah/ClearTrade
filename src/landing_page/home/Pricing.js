import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a className="link-underline-opacity-0 link-underline" href="http://">
            See pricing{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="arrowCustom"
              area-hidden="true"
            />
          </a>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-6 ">
          <div className="row ">
            <div className="col">
              <img
                className="img-fluid"
                src="media/images/pricing0.svg"
                alt=""
              />
              <p className="px-5">Free account opening</p>
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="media/images/pricing0.svg"
                alt=""
              />
              <p className="px-5">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="media/images/intradayTrades.svg"
                alt=""
              />
              <p className="px-5">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
