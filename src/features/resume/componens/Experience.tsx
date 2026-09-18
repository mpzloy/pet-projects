import ReactMarkdown from "react-markdown";
import type {ExperienceType, ProjectType, TechnologyType} from "@/features/resume/types/types";

import {Badge} from "@/shared/ui/badge"

import Image from "next/image";
import styles from "@/features/resume/style.module.scss";

function Experience(props: ExperienceType) {
  const id = `company-${props.id}`;

  return (
    <div id={id} className="mb-8 w-full relative">
      <h2>Компанія: <strong>{props.name}</strong></h2>
      <div className="mb-8">Посада: <strong>{props.position}</strong></div>
      <p className="mb-4">{props.description}</p>
      <div className="flex items-center flex-wrap gap-4 mb-8">
        {props.technologies.map((tech: TechnologyType) => {
          const logoName = tech.name.toLowerCase().replace(/[/.]/g, '-');
          const logoPath = `/logo/${logoName}.svg`;

          return (
            <figure key={tech.id} className="flex items-center justify-center p-2 rounded-2xl bg-black/10 dark:bg-white/30" title={tech.name}>
              <img src={logoPath} alt={tech.name} width={50} height={50} style={{width:'100%', minWidth: '32px', maxHeight:'32px'}} />
            </figure>
          )
        })}
      </div>

      {props.projects && props.projects.length > 0 && (
        <>
          <div className="mb-4"><h2>Проєкти:</h2></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {props.projects.map((project: ProjectType) => (
              <div key={project.id}
                   className="border p-2 shadow-[10px_10px_0px_rgba(0,0,0,.5)] dark:shadow-[10px_10px_0px_rgba(255,255,255,0.1)] bg-white dark:bg-black">
                <figure className="mb-4 relative">
                  <Image src={project.image} alt={`${project.technologies[0].name} ${project.id} project image`}
                         width={2500}
                         height={1200} loading="eager"/>
                  <Badge
                    className="absolute top-1 left-1 bg-black/80 text-[#0ff]">{project.technologies[0].name}</Badge>
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