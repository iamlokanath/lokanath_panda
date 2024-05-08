import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Instructors from "./components/Instructors";
import MusicSchoolTestimonials from "./components/TestimonialCard";
import UpComingWebinars from "./components/UpComingWebinars";
import WhyChooseUs from "./components/WhyChooseUs";
import TracingBeamDemo from "./components/TracingBeamDemo";
import About from "./components/About";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection />
    <TracingBeamDemo/>
    <Projects/>
    <FeaturedCourses />
    <About/>
    <Instructors />
    {/* <WhyChooseUs /> */}
    {/* <MusicSchoolTestimonials /> */}
    {/* <UpComingWebinars /> */}
    {/* <Footer/> */}
    </main>
  );
}
