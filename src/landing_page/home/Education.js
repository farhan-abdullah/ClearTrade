import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Education() {
  return (
    <div className="container p-5">
      <div className="row justify-content-between align-content-center align-items-center">
        <div className="col-lg-6">
          <img src="media/images/education.svg" alt="" />
        </div>
        <div className="col-lg-6">
          <h1 className="mb-4 fs-2">Free and open market education</h1>
          <div>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
              <br />
              <br />
              <a
                className=" link-underline-opacity-0 link-underline"
                href="http://"
              >
                Varsity
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="arrowCustom"
                  area-hidden="true"
                />
              </a>
            </p>
          </div>
          <div>
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <br />
            <a
              className="link-underline-opacity-0 link-underline"
              href="http://"
            >
              TradingQ&A{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="arrowCustom"
                area-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
