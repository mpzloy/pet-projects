"use client"

import ReactMarkdown from "react-markdown";
import type {ExperienceType} from "@/features/resume/types/types";

import {Badge} from "@/shared/ui/badge"

import Image from "next/image";
import styles from "@/features/resume/style.module.scss";

function Experience(props: ExperienceType) {
  const id = props.company.toLowerCase();

  return (
    <div id={id} className="mb-8 w-full relative">
      <h2>Компанія: <strong>{props.company}</strong></h2>
      <div className="mb-8">Посада: <strong>{props.position}</strong></div>
      <p className="mb-4">{props.description}</p>
      <div className="mb-8">
        {props.technologies.map((tech, index) => (
          <span key={index}>{tech}&nbsp;</span>
        ))}
      </div>

      {props.projects && props.projects.length > 0 && (
        <>
          <div className="mb-4"><h2>Проєкти:</h2></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {props.projects.map((project, index) => (
              <div key={project.id} className="border p-2 shadow-[10px_10px_0px_rgba(0,0,0,.5)] dark:shadow-[10px_10px_0px_rgba(255,255,255,0.1)] bg-white dark:bg-black">
                <figure className="mb-4 relative">
                  <Image src={project.imageSrc} alt={`${project.technologies} ${index} project image`} width={2500}
                         height={1200}/>
                  <Badge className="absolute top-1 left-1 bg-black/80 text-[#0ff]">{project.technologies}</Badge>
                </figure>
                <div className={styles['about__project-description']}>
                  <ReactMarkdown children={project.description}
                                 allowedElements={["a", "p", "br", "strong", "em", "h1", "h2", "h3", "h4", "ul", "ol", "li"]}/>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Experience;