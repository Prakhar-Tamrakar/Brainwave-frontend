import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          {" "}
          {new Date().getFullYear()}.All right reserved{" "}
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a 
            className="flex items-center justify-center w-10 h-10 bg-n-7
            rounded-full transition-colors hover:bg-n-6"
            target="_blank"
            key={item.id}
            href={item.url}>
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
