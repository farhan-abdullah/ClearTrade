function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero"
          className="img-fluid mb-5"
        />
        <h1>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="btn btn-primary  mx-auto custom-btn" type="button">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
