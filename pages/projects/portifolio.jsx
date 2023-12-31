import Image from "next/image";
import React from "react";
import portifolioImg from "/public/assets/projects/portifolio01.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const netflix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={portifolioImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Portifolio App</h2>
          <h3>React.js / Next.js / Tailwind </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Projeto</p>
          <h2>Resumo</h2>
          <p>
            Bem-vindo ao projeto do meu portfólio, um showcase profissional do
            meu trabalho como programador front-end, utilizando React, Next.js e
            Tailwind CSS! Sou Saulo, um desenvolvedor front-end qualificado e apaixonado por criar experiências digitais
            impressionantes. Com o React, uma das bibliotecas JavaScript mais
            populares, tenho a capacidade de construir interfaces interativas e
            escaláveis, fornecendo uma base sólida para o desenvolvimento web
            moderno. O Next.js, um framework React de alto desempenho, me
            permite criar aplicativos rápidos, otimizados para SEO e com
            excelente renderização do lado do servidor. E o Tailwind CSS, um
            utilitário de classe CSS altamente configurável, agiliza o processo
            de estilização, permitindo a criação de designs elegantes e
            responsivos de forma eficiente. Neste projeto de portfólio, estou
            comprometido em apresentar meu trabalho de forma profissional e
            impactante. 
          </p>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 ">
          <div className="p-2 ">
            <p className="text-center font-bold pb-2">Technologias</p>
            <div className="grid grid-cols-3 md:grid-cols-1 justify-items-center ">
              <div>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              </div>          
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Voltar</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
