import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row mb-5">
        <div className="col-lg-6">
          <h1 className="mb-5 fs-2">Trust with confidence</h1>
          <div className="flex-row flex-wrap ">
            <div>
              <h2 className="fs-4">Customer-first always</h2>
              <p className="mb-4 w-75 p-custom">
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments, making us India’s largest broker;
                contributing to 15% of daily retail exchange volumes in India.
              </p>
            </div>
            <div>
              <h2 className="fs-4">No spam or gimmicks</h2>
              <p className="mb-4 w-75 p-custom">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like. Our philosophies.
              </p>
            </div>
            <div>
              <h2 className="fs-4">The Zerodha universe</h2>
              <p className="mb-4 w-75 p-custom">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>
            <div>
              <h2 className="fs-4">Do better with money</h2>
              <p className="mb-4 w-75 p-custom">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src="media/images/ecosystem.png"
            alt=""
            className="img-fluid"
            style={{ width: "90%" }}
          />
          <div className="row text-center">
            <div className="col-lg-6">
              <a
                className="mx-5 link-underline-opacity-0 link-underline"
                href="http://"
              >
                Explore our products
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="arrowCustom"
                  area-hidden="true"
                />
              </a>
            </div>
            <div className="col-lg-6">
              <a
                className="mx-5 link-underline-opacity-0 link-underline"
                href="http://"
              >
                Try Kite demo
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
    </div>
  );
}

export default Stats;
