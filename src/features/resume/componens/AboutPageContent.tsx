"use client"

import React from "react";
import Page from "@/shared/components/Page";
import Wrapper from "@/shared/components/Wrapper";

import {resumeData} from "@/features/resume/resumeData";

import styles from "@/features/resume/style.module.scss";
import Experience from "@/features/resume/componens/Experience";
import {Button} from "@/shared/ui/button";

import type {ExperienceType} from "@/features/resume/types/types";

function AboutPageContent({data}: { data: ExperienceType[] }) {
  const handleScrollToExperience = (id: string) => {

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <Page mainClass={` ${styles.about}`}>
      <Wrapper>
        <div className="w-full">
          <h1 className="text-4xl my-8">Про мене</h1>
          <p>Опис про мене...</p>
        </div>
      </Wrapper>
      <nav className="sticky top-0 backdrop-blur-xl py-2 z-10 mb-8">
        <Wrapper wrapperClass="flex items-center justify-center gap-4">
          {data.map((item: ExperienceType) => {
            const id = `company-${item.id}`;
            return (
              <Button key={item.id} type="button" onClick={() => handleScrollToExperience(id)}>
                {item.name}
              </Button>
            )
          })}
        </Wrapper>
      </nav>

      <Wrapper>
        <div className="w-full">
          {data && data.map((item: ExperienceType, i: number) => {
            return (
              <Experience key={item.id} {...item}/>
            )
          })}
        </div>
      </Wrapper>
    </Page>
  );
}

export default AboutPageContent;