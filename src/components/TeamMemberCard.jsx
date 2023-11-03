import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa6";

const TeamMemberCard = ({ name, role, imageSrc, socialLinks }) => {
  // Verifica si socialLinks es un array válido
  const hasSocialLinks = Array.isArray(socialLinks) && socialLinks.length > 0;

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 team-style-02 text-center mb-6 sm:mb-8 px-4 wow animate__fadeIn flex justify-center">
      <figure className="w-10/12">
        <div className="team-member-image border-radius-5px overflow-hidden">
          {/* Agrega la capa de oscurecimiento */}
          <div className="overlay"></div>
          <img alt={name} src={imageSrc}/>
          <div className="team-member-details bg-transpararent-gradient-dark-fungus-work-principal padding-2-half-rem-lr flex items-center justify-center flex-col">
            <div className="text-white text-uppercase alt-font font-weight-500">{name}</div>
            {hasSocialLinks && (
              <div className="social-icon w-100 absolute bottom-40px left-0px flex justify-center">
                {socialLinks.map((link, index) => {
                  let IconComponent = null;
                  if (link.icon === "FaLinkedinIn") {
                    IconComponent = FaLinkedinIn;
                  } else if (link.icon === "FaFacebookF") {
                    IconComponent = FaFacebookF;
                  } else if (link.icon === "FaTwitter") {
                    IconComponent = FaTwitter;
                  } else if (link.icon === "FaTiktok") {
                    IconComponent = FaTiktok;
                  }
                  return (
                  <a key={index} href={link.url} target="_blank" rel="noreferrer" className="icon-very-small text-white">
                    {/* {React.createElement(link.icon)} */}
                    {IconComponent && <IconComponent />}
                  </a>
                );
                  })}
              </div>
            )}
          </div>
        </div>
        <figcaption className="team-member-position padding-35px-tb text-center mt-6">
          <div className="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500 text-green-500">{name}</div>
          <span className="text-small text-uppercase">{role}</span>
        </figcaption>
      </figure>
    </div>
  );
};

export default TeamMemberCard;
