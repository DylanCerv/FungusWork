import React from 'react';

export const CardProyectos = ({ projects }) => {
  return (
    <div className="w-full flex flex-wrap">
            {Array.isArray(projects) ? (
            projects.map((project) => (
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 team-style-02 text-center mb-6 sm:mb-6 mt-6 px-4 wow animate__fadeIn flex justify-center items-center" key={project.id}>
        <figure className="w-10/12">
            <div className="team-member-image border-radius-5px overflow-hidden relative">
            {/* Agrega la capa de oscurecimiento */}
            <div className="overlay"></div>
            <img src={project.image} alt={project.title} />
            <div className="hover-container">
                <div className="team-member-details bg-transpararent-gradient-dark-fungus-work padding-2-half-rem-lr flex items-center justify-evenly flex-col border-radius-5px">
                    <div className="text-white text-uppercase alt-font font-weight-500 titulo-card-proyecto font-bold">{project.title}</div>
                    <div className="w-100 left-0px text-white">
                        {project.description}
                    </div>
                    <a className="text-small text-uppercase text-white hover:text-green-500 underline" href={project.url} target="_blank" rel="noreferrer">Ver Sitio</a>
                </div>
            </div>
            </div>
        </figure>
        </div>
            ))
            ) : (
                <p>No projects available.</p>
                )}
    </div>
  );
};

// export default TeamMemberCard;
