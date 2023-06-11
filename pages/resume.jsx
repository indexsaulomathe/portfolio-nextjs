import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Saulo | Resume</title>
        <meta
          name="description"
          content="Um desenvolvedor front-end qualificado e apaixonado por criar experiências digitais impressionantes."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Saulo Matheus</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/indexsaulomathe/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn
                className="fill-red-700"
                size={20}
                style={{ marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://github.com/indexsaulomathe/indexsaulomathe"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                className="fill-red-700"
                size={20}
                style={{ marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Desenvolvimento Web <span className="px-1">|</span> UX Designer
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Eu sou Saulo, um desenvolvedor front-end especializado em criar
          soluções web visualmente agradáveis e interativas. Com habilidades
          sólidas na construção de aplicações web responsivas e na integração de
          tecnologias back-end avançadas, estou empenhado em unir forma e função
          para criar experiências excepcionais para os usuários. Minhas
          competências técnicas abrangem HTML, CSS, JavaScript e outros
          frameworks modernos, permitindo que eu crie interfaces intuitivas e
          amigáveis que ofereçam desempenho otimizado em diversas plataformas e
          dispositivos. Movido pela busca incessante pela excelência, estou
          sempre atualizado com as últimas tendências e melhores práticas do
          setor. Acredito em construir parcerias sólidas com meus clientes,
          entendendo seus objetivos, requisitos e identidade de marca para
          entregar resultados extraordinários. Se você está buscando um
          desenvolvedor front-end dedicado em transformar suas ideias em
          realidade, estou aqui para ajudar.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Habilidades Technicas</span>
            <span className="px-2">|</span>Desenvolvedor Front-End
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Bootstrap
          </p>
          <p className="py-2">
            {/* <span className="font-bold">Amazon Web Services</span>
            <span className="px-2">|</span>Amazon Web Services Cloud
            Practitioner */}
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Experiência Profissional
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Kosmo Studio</span>
            <span className="px-2">|</span>Campo Grande, MS
          </p>
          <p className="py-1 italic">
            Desenvolvedor Front-End (2012 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Implementar designs de interfaces de usuário, traduzindo layouts e
              wireframes em código HTML, CSS e JavaScript funcionais.
            </li>
            <li>
              Desenvolver componentes reutilizáveis e modularizados, permitindo
              uma manutenção mais fácil e eficiente do código.
            </li>
            <li>
              Otimizar o desempenho das aplicações front-end, garantindo tempos
              de carregamento rápidos e uma experiência fluida para os usuários.
            </li>
            <li>
              Garantir a responsividade das aplicações, assegurando que elas se
              adaptem a diferentes dispositivos e tamanhos de tela.
            </li>
          </ul>
        </div>

        {/*  */}
        {/* <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5> */}
      </div>
    </>
  );
};

export default resume;
