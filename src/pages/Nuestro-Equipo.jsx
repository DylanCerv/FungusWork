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
      socialLinks: [
        { url: 'https://www.facebook.com/', icon: 'FaFacebookF' },
        { url: 'https://twitter.com/', icon: 'FaTwitter' },
        { url: 'https://www.linkedin.com/', icon: 'FaLinkedinIn' },
      ],
    }
  ];

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 text-center mb-8">
          <span className="alt-font text-extra-medium">The Development Team</span>
          <h5 className="alt-font text-extra-dark-gray font-weight-500 text-green-500">Creative people</h5>
        </div>
      </div>
      <div className="flex flex-wrap">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default NuestroEquipo;
