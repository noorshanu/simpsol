import Navbar from "components/Navbar";
import About from "sections/About";
// import FeaturedOn from "sections/Partners";
import Hero from "sections/Hero";
import JoinCommunity from "sections/JoinCommunity";
// import Product from "sections/Product";
import Roadmap from "sections/Roadmap";
// import Tokenomics from "sections/Tokenomics";

function App() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="relative z-10">
          <div className="lg:absolute relative sm:top-8 2xl:top-10 left-0 w-full z-50">
            <Navbar />
          </div>

          <div className=" ">
          {/* <section className="section">
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
        </section> */}
            <Hero />
          </div>
        </div>

        <div className="" id="about">
          <About />
        </div>
        <div id="roadmap">
          <Roadmap />
        </div>

        {/* <div className="mb-14 lg:mb-20" id="tokenomics">
          <Tokenomics />
        </div>
        <div className="mb-14 lg:mb-20" id="tokenomics">
          <Product />
        </div>

      

        <div className="mb-20">
          <FeaturedOn />
        </div> */}
      </main>

      <div id="contact">
        <JoinCommunity />
      </div>
    </div>
  );
}

export default App;
