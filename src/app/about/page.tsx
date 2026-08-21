import type {Metadata} from "next";
import AboutPageContent from "@/features/resume/componens/AboutPageContent";

export const metadata: Metadata = {
  title: "Про мене",
  description: "Про те що робив і що роблю",
};

function AboutPage() {
  return <AboutPageContent/>;
}

export default AboutPage;