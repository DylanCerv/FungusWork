import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';
import photochica from '../img/photo-chica-2.jpg';
import photochico from '../img/portrait-photography.jpg';
import defaultimg from '../img/800x1000.png';

export const NuestroEquipo = () => {
  // Datos de los miembros del equipo
  const teamMembers = [
    {
      name: 'Jemmy Watson',
      role: 'Graphic Designer',
      imageSrc: photochica,
      equipo: 'a',
      socialLinks: [
        { url: 'https://www.facebook.com/', icon: 'FaFacebookF' },
        { url: 'https://twitter.com/', icon: 'FaTwitter' },
        { url: 'https://www.linkedin.com/', icon: 'FaLinkedinIn' },
        // Agrega otros enlaces aquí
      ],
    },
    {
      // Datos del segundo miembro del equipo
      name: 'Jemmy Watson',
      role: 'Graphic Designer',
      imageSrc: photochico,
      equipo: 'a',
      socialLinks: [
        { url: 'https://www.facebook.com/', icon: 'FaFacebookF' },
        { url: 'https://twitter.com/', icon: 'FaTwitter' },
        { url: 'https://www.linkedin.com/', icon: 'FaLinkedinIn' },
      ],
      
    },
    // Agrega datos de otros miembros del equipo
    {
      // Datos del segundo miembro del equipo
      name: 'Jemmy Watson',
      role: 'Graphic Designer',
      // imageSrc: 'https://via.placeholder.com/800x1000',
      imageSrc: defaultimg,
      equipo: 'a',
      socialLinks: [
        { url: 'https://www.facebook.com/', icon: 'FaFacebookF' },
        { url: 'https://twitter.com/', icon: 'FaTwitter' },
        { url: 'https://www.linkedin.com/', icon: 'FaLinkedinIn' },
      ],
    },
    {
      // Datos del segundo miembro del equipo
      name: 'Jemmy Watson',
      role: 'Graphic Designer',
      imageSrc: defaultimg,
      equipo: 'a',
      socialLinks: [
        { url: 'https://www.facebook.com/', icon: 'FaFacebookF' },
        { url: 'https://twitter.com/', icon: 'FaTwitter' },
        { url: 'https://www.linkedin.com/', icon: 'FaLinkedinIn' },
      ],
    },
    {
      // Datos del segundo miembro del equipo
      name: 'Jemmy Watson',
      role: 'Graphic Designer',
      imageSrc: defaultimg,
      equipo: 'b',
      socialLinks: [
        { url: 'https://www.facebook.com/', icon: 'FaFacebookF' },
        { url: 'https://twitter.com/', icon: 'FaTwitter' },
        { url: 'https://www.linkedin.com/', icon: 'FaLinkedinIn' },
      ],
    }
  ];

  const renderTeamMembers = (equipo) => {
    return teamMembers
      .filter((member) => member.equipo === equipo)
      .map((member, index) => (
        <TeamMemberCard key={index} {...member} />
      ));
  };

  return (
    <div className="container mx-auto mt-32">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 text-center mb-4">
          <span className="alt-font text-2xl text-white mb-1">The Development Team</span>
          <h5 className="alt-font text-extra-dark-gray text-lg font-weight-500 text-green-500">Creative people</h5>
        </div>
      </div>
      <p className="text-lg text-center md:text-start text-white mb-6 font-weight-500">Desarrollo-A</p>
      <div className="flex flex-wrap">
        {renderTeamMembers('a')}
      </div>
      <p className="text-lg text-center md:text-start text-white mb-6 font-weight-500">Desarrollo-B</p>
      <div className="flex flex-wrap">
        {renderTeamMembers('b')}
      </div>
    </div>
  );
};

export default NuestroEquipo;
