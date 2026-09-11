import React from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin,
  FaCircle
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ICON_MAPPING = {
  default: FaCircle,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: XIcon,
};

export const Socialicons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {Object.entries(socialprofils).map(([platform, url]) => {
          const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
          return (
            <li key={platform}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <IconComponent />
              </a>
            </li>
          );
        })}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
