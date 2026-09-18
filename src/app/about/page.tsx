import type {Metadata} from "next";
import AboutPageContent from "@/features/resume/componens/AboutPageContent";
import {getCompany} from "@/shared/helpers/get-company";

export const metadata: Metadata = {
  title: "Про мене",
  description: "Про те що робив і що роблю",
};

async function AboutPage() {
  const data = await getCompany();

  return <AboutPageContent data={data}/>;
}

export default AboutPage;