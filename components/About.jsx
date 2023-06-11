import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl font-bold tracking-widest text-[#C80F0F]">
            Sobre
          </p>
          <h2 className="py-4">Desenvolvedor Front-end</h2>
          <p className="py-2 text-gray-600">
            Eu sou Saulo, um desenvolvedor front-end especializado em criar soluções web visualmente
            agradáveis e interativas. Com habilidades sólidas na
            construção de aplicações web responsivas e na integração de
            tecnologias back-end avançadas, estou empenhado em unir forma e
            função para criar experiências excepcionais para os usuários. Minhas
            competências técnicas abrangem HTML, CSS, JavaScript e outros
            frameworks modernos, permitindo que eu crie interfaces intuitivas e
            amigáveis que ofereçam desempenho otimizado em diversas plataformas
            e dispositivos.
          </p>
          <p className="py-2 text-gray-600">
            Movido pela busca incessante pela excelência, estou sempre
            atualizado com as últimas tendências e melhores práticas do setor.
            Acredito em construir parcerias sólidas com meus clientes,
            entendendo seus objetivos, requisitos e identidade de marca para
            entregar resultados extraordinários. Se você está buscando um
            desenvolvedor front-end dedicado em transformar suas ideias em
            realidade, estou aqui para ajudar.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Veja alguns dos projetos que ja contribui            
           </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
