import React from 'react';

const TeamMemberCard = ({ name, role, imageSrc, socialLinks }) => {
  // Verifica si socialLinks es un array válido
  const hasSocialLinks = Array.isArray(socialLinks) && socialLinks.length > 0;

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 team-style-02 text-center mb-4 sm:mb-0 px-4 wow animate__fadeIn">
      <figure>
        <div className="team-member-image border-radius-5px overflow-hidden">
          {/* Agrega la capa de oscurecimiento */}
          <div className="overlay"></div>
          <img alt={name} src={imageSrc} />
          <div className="team-member-details bg-transpararent-gradient-dark-fungus-work-principal padding-2-half-rem-lr flex items-center justify-center flex-col">
            <div className="text-white text-uppercase alt-font font-weight-500">{name}</div>
            {hasSocialLinks && (
              <div className="social-icon w-100 absolute bottom-40px left-0px">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noreferrer" className="icon-very-small text-white">
                    <i aria-hidden="true" className={`fab ${link.icon}`}></i>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <figcaption className="team-member-position padding-35px-tb text-center mt-6">
          <div className="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500">{name}</div>
          <span className="text-small text-uppercase">{role}</span>
        </figcaption>
      </figure>
    </div>
  );
};

export default TeamMemberCard;
