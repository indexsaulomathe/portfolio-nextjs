import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import portifolioImg from "../public/assets/projects/portifolio01.png";
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl font-bold tracking-widest uppercase text-[#C80F0F]'>
          Projetos
        </p>
        <h2 className='py-4'>Ja participei dos seguintes projetos</h2>
        <div className='grid md:grid-cols-2 gap-8'>

        <ProjectItem
            title='Portifolio App'
            backgroundImg={portifolioImg}
            projectUrl='/projects/portifolio'
            tech='Next.js'
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
