import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';

export const NuestroEquipo = () => {
  // Datos de los miembros del equipo
  const teamMembers = [
    {
      name: 'Jemmy Watson',
      role: 'Graphic Designer',
    //   imageSrc: 'https://via.placeholder.com/800x1000',
      imageSrc: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80&w=1023&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      socialLinks: [
        { url: 'https://www.facebook.com/', icon: 'fa-facebook-f' },
        { url: 'https://twitter.com/', icon: 'fa-twitter' },
        // Agrega otros enlaces aquí
      ],
    },
    {
      // Datos del segundo miembro del equipo
    },
    // Agrega datos de otros miembros del equipo
  ];

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 text-center margin-4-half-rem-bottom">
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
