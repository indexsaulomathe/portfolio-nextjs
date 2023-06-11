import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Vamos criar algo incrível
          </p>
          <h1 className='py-4 text-gray-700'>
           Olá, sou <span className='text-[#C80F0F] drop-shadow'> Saulo</span>
          </h1>
          <h1 className='py-2 text-gray-700'>Um Desenvolvedor Front-end</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          Um desenvolvedor front-end focado em proporcionar experiências incríveis para os usuários.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/indexsaulomathe/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full  shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn  className='fill-red-700'/>
              </div>
            </a>
            <a
              href='https://github.com/indexsaulomathe/indexsaulomathe'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub className='fill-red-700' />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail className='fill-red-700' />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill className='fill-red-700' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
