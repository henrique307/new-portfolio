import { title } from "process";
import React from "react";

export interface TechIconInterface {
  className?: string;
}
export const icons = {
  IconJavascript(props: TechIconInterface) {
    return <i className={`${props.className} devicon-javascript-plain`} title="Javascript"></i>;
  },
  
  IconHtml5(props: TechIconInterface) {
    return <i className={`${props.className} devicon-html5-plain`} title="HTML"></i>;
  },
  
  IconSass(props: TechIconInterface) {
    return <i className={`${props.className} devicon-sass-original`} title="SASS CSS"></i>;
  },
  
  IconCss3(props: TechIconInterface) {
    return <i className={`${props.className} devicon-css3-plain`} title="CSS"></i>;
  },
  
  IconReact(props: TechIconInterface) {
    return <i className={`${props.className} devicon-react-original`} title="ReactJS"></i>;
  },
  
  IconRedux(props: TechIconInterface) {
    return <i className={`${props.className} devicon-redux-original`} title="Redux"></i>;
  },
  
  IconTailwindcss(props: TechIconInterface) {
    return <i className={`${props.className} devicon-tailwindcss-original`} title="Tailwind CSS"></i>
  },
  
  IconWordpress(props: TechIconInterface) {
    return <i className={`${props.className} devicon-wordpress-plain`} title="Wordpress"></i>;
  },
  
  IconNestjs(props: TechIconInterface) {
    return <i className={`${props.className} devicon-nestjs-original`} title="NestJS"></i>;
  },
  
  IconMongodb(props: TechIconInterface) {
    return <i className={`${props.className} devicon-mongodb-plain`} title="MongoDB"></i>;
  },
  
  IconExpress(props: TechIconInterface) {
    return <i className={`${props.className} devicon-express-original font-bold`} title="Express"></i>
  },
  
  IconSwagger(props: TechIconInterface) {
    return <i className={`${props.className} devicon-swagger-plain`} title="Swagger"></i>;
  },
  
  IconMysql(props: TechIconInterface) {
    return <i className={`${props.className} devicon-mysql-plain`} title="Mysql"></i>;
  },
  
  IconGoogle(props: TechIconInterface) {
    return <i className={`${props.className} devicon-google-plain`} title="Google APIs"></i>;
  },
  
  IconStripe(props: TechIconInterface) {
    return <i className={`${props.className} text-base`} title="Stripe">Stripe</i>;
  },
  
  IconDocker(props: TechIconInterface) {
    return <i className={`${props.className} devicon-docker-plain`} title="Docker"></i>;
  },
  
  IconAmazonWebServices(props: TechIconInterface) {
    return <i className={`${props.className} devicon-amazonwebservices-plain`} title="AmazonWebServices"></i>;
  },
  
  IconHeroku(props: TechIconInterface) {
    return <i className={`${props.className} devicon-heroku-plain`} title="Heroku"></i>;
  },
  
  IconVercel(props: TechIconInterface) {
    return <i className={`${props.className} devicon-vercel-original`} title="Vercel"></i>;
  },

  IconGithub(props: TechIconInterface) {
    return <i className={`${props.className} devicon-github-original`} title="github"></i>;
  },
}