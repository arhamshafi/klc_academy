import CollaborationSection from "./components/CollaborationSection";
import CoursesSection from "./components/CoursesSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import StorySection from "./components/StorySection";


export const metadata = {
  title: "KLC Academy Gujranwala | Professional Web Development Training",
  description: "KLC Academy in collaboration with ARHAFi - Learn MERN Stack, Full Stack, Multi Stack Development in Gujranwala",
  keywords: "KLC Academy, Gujranwala, MERN Stack, Full Stack, Web Development, ARHAFi",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* <HeroSection /> */}
      {/* <StorySection /> */}
      {/* <CollaborationSection /> */}
      {/* <CoursesSection /> */}
      {/* <CTASection /> */}
      {/* <Footer /> */}
    </div>
  );
}