"use client"

import React from "react";
import Page from "@/shared/components/Page";
import Wrapper from "@/shared/components/Wrapper";

import {resumeData} from "@/features/resume/resumeData";

import styles from "@/features/resume/style.module.scss";
import Experience from "@/features/resume/componens/Experience";
import {Button} from "@/shared/ui/button";

function AboutPageContent() {

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
          <h1>Про мене</h1>
          <p>Опис про мене...</p>

          <nav className="flex items-center justify-center gap-4 mb-8 sticky top-0 backdrop-blur-xl py-2 z-10">
            {resumeData.map((item, index) => {
              const id = item.company.toLowerCase()

              return (
                <Button key={id} type="button" onClick={() => handleScrollToExperience(id)}>
                  {item.company}
                </Button>
              )
            })}
          </nav>

          {resumeData.map(item => {
            const id = item.company.toLowerCase()

            return (
              <Experience key={id} {...item}/>
            )
          })}
        </div>
      </Wrapper>
    </Page>
  );
}

export default AboutPageContent;