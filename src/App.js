import Header from "./components/header";
import Slider from "./components/slider";
import logo from "./logo.svg";
import aboutimg from "./assets/about-us.png";
import ThirdComp from "./components/thirdcomp";
import GridImgFrist from "./assets/grid-img1.svg";
import GridImgSec from "./assets/grid-img2.svg";
import GridImgthird from "./assets/grid-img3.svg";
import GridImgFourth from "./assets/grid-img4.svg";
import GridImgFifth from "./assets/grid-img5.svg";
import GridImgSixth from "./assets/grid-img6.svg";
import GridImgSeventh from "./assets/grid-img7.svg";
import GridImgEighth from "./assets/grid-img8.svg";
import Fifthcompimg from "./assets/customization1.svg";
import Footer from "./components/footer";
// import "./App.css";

function App() {
  return (
    <main className="font-poppins">
      <Header />
      <Slider />
      <div className="flex flex-row items-center justify-center gap-5 my-14 text-[#212529] xs:flex-col">
        <div className="w-[38vw] ">
          <img src={aboutimg} alt="" />
        </div>
        <div className="w-[55vw] text-lg xs:text-xs xs:w-[80vw]">
          <h5 className="font-bold w-[41vw] xs:w-full">
            Welcome to Koko Bliss, your one-stop destination for all things
            related to permanent makeup.
          </h5>
          <p className="font-normal mt-10 w-[46vw] xs:w-full">
            Welcome to Koko Bliss, your ultimate destination for tranquility and
            rejuvenation in the beautiful city of Nice. We are thrilled to have
            you here, and we are committed to providing you with an unparalleled
            experience that will leave you feeling refreshed and revitalized.
          </p>
          <p className="font-normal mt-2">
            At Koko Bliss, we believe in the power of self-care and the
            importance of taking time for oneself. Our team of dedicated
            professionals is dedicated to ensuring that your visit is nothing
            short of exceptional, providing personalized services tailored to
            your unique needs and preferences. Thank you for choosing Koko
            Bliss. We are excited to be a part of your journey towards
            relaxation and well-being.
          </p>
        </div>
      </div>
      <div className="bg-[#F7F7F7] py-20 space-y-10">
        <h2 className="text-[30px] text-[#8F776B] text-center ">SHOP</h2>
        <ThirdComp />
      </div>
      {/* fourth comp */}
      <div className=" py-20 space-y-10">
        <div className="flex flex-col justify-center">
          <h2 className=" text-[30px] text-[#8F776B] text-center ">WORK</h2>
          <hr className="h-1 bg-[#8F776B] w-10 mx-auto" />
        </div>
        <div className="flex flex-col justify-center gap-10">
          <div className="flex md:gap-20 sm:gap-10 mx-auto xs:gap-4">
            <p className="underline underline-offset-4 text-[#8F776B] font-medium font-poppins text-lg xs:text-base">
              All
            </p>
            <p className="text-[#8F776B] font-light text-lg xs:text-base">
              Lip Blush
            </p>
            <p className="text-[#8F776B] font-light text-lg xs:text-base">
              Eyebrow Tattoo
            </p>
            <p className="text-[#8F776B] font-light text-lg xs:text-base">
              Eyelash Exensions
            </p>
          </div>
          <div className="grid lg:grid-cols-4 mx-auto gap-4 sm:grid-cols-3 xs:grid-cols-2">
            <img className="w-[23.7vw] lg:w-[20vw]" src={GridImgFrist} />
            <img className="w-[23.7vw] lg:w-[20vw]" src={GridImgSec} />
            <img className="w-[23.7vw] lg:w-[20vw]" src={GridImgthird} />
            <img className="w-[23.7vw] lg:w-[20vw]" src={GridImgFourth} />
            <img className="w-[23.7vw] lg:w-[20vw]" src={GridImgFifth} />
            <img className="w-[23.7vw] lg:w-[20vw]" src={GridImgSixth} />
            <img className="w-[23.7vw] lg:w-[20vw]" src={GridImgSeventh} />
            <img className="w-[23.7vw] lg:w-[20vw]" src={GridImgEighth} />
          </div>
          <button className="border-[#8F776B] border-[1px] text-[#8F776B] py-2 px-2 w-[110.91px] mx-auto rounded-[25px]">
            More
          </button>
        </div>
      </div>
      {/* fifthcomp */}
      <div className="flex justify-center mb-10">
        <div className="bg-[#F0E8E4] p-10 w-[80vw]">
          <div className="bg-white flex flex-row xs:flex-col xs:items-center xs:py-10">
            <img className="w-[34vw] xs:w-[25vw]" src={Fifthcompimg} />
            <div className="w-[34vw] pt-10 xs:w-[45vw]">
              <div>
                <h3 className="text-[#8F776B] font-normal text-[30px]">
                  TRAINING
                </h3>
                <hr className="h-1 bg-[#8F776B] w-10 " />
              </div>
              <h5 className="text-lg xs:text-xs font-bold text-[#212529] mt-10">
                Empower Yourself with Comprehensive Training Programs at Koko
                Bliss
              </h5>
              <p className="text-lg xs:text-xs font-normal text-[#212529] mt-5">
                Discover the power of knowledge and empower yourself with our
                expert training programs at Koko Bliss. Our comprehensive
                training programs cover a range of topics, including permanent
                makeup, skincare techniques, and holistic health. Led by
                experienced professionals, our training programs are tailored to
                meet your unique needs and goals.{" "}
              </p>
              <p className="text-lg xs:text-xs font-normal text-[#212529] mt-2">
                Join us at Koko Bliss and take your skills to the next level.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* footer  */}
      <Footer />
    </main>
  );
}

export default App;
