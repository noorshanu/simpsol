function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#ffd51e]">
      <div className="container-wrapper lg:h-screen flex flex-col items-center justify-center pt-6 pb-12 lg:pt-0 lg:pb-0 lg:drop-shadow-[0_0_10rem_white]">
        <img
          src="images/cloud1.png"
          alt=""
          className="x1 absolute top-[5%] sm:top-[20%] left-0 w-auto h-[50px] sm:h-[160px]  "
        />
        <img
          src="images/star.png"
          alt=""
          className="floating  absolute top-[25%] sm:top-[46%] left-3 sm:left-[10%] w-auto h-[120px] "
        />
        <img
          src="images/star2.png"
          alt=""
          className="floating  absolute top-5 sm:top-[46%] right-[10%] w-auto h-[120px] "
        />
        <img
          src="images/cloud2.png"
          alt=""
          className="x2 absolute w-auto h-[170px] hidden sm:block"
        />
        <img
          src="images/cloud2.png"
          alt=""
          className="x4 absolute w-auto h-[150px] hidden sm:block"
        />
        <img
          src="images/cloud1.png"
          alt=""
          className="x3 absolute top-[5%] sm:top-[20%] left-0 w-auto h-[50px] sm:h-[170px]  "
        />
        <img
          src="/images/hero-img.png"
          className="w-full lg:w-[55%] lg:h-[60%] object-contain mt-0 sm:mt-[4rem] "
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
          alt=""
        />
        <div className="   flex  justify-center items-center gap-6 mt-7 sm:mt-2">
          <div className=" relative">
            <a
              href="/"
              className="  btn-main  font-bold text-sm sm:text-xl rounded-full px-12 py-2"
            >
              PINKSALE
            </a>
          </div>
          <div className="relative">
            <h1 className="btn-main   font-bold text-sm sm:text-xl rounded-full px-12 py-2">
              COMMUNITY
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
