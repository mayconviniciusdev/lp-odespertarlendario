import Image from "next/image"
import { FaChartColumn, FaCircleHalfStroke, FaDesktop, FaEarthAmericas, FaFeather, FaRoute, FaShapes, FaSquareCheck, FaUserGear } from "react-icons/fa6";

export const About = () => {
  return (
    <>
      <section className="py-20 flex items-center justify-center gap-20">
        <div className="max-w-md">
          <h2 className="font-bold text-xl"><strong className="text-golden-wellow underline">Quer tomar as rédeas da sua vida</strong> saindo de ciclos ruins e improdutivos?</h2>
          <p className="py-5">O <strong>Despertar lendário</strong> ajudará você em sua transformação de vida, conquistando metas e sonhos de uma forma leve e visual.</p>
          <p>Esse <strong>sistema</strong> foi desenvolvido para que você foque naquilo que verdadeiramente importa, tendo <strong>uma visão palpável</strong> e geral do que necessita ser executado em prol <strong>dos seus objetivos</strong>.</p>
        </div>

        <Image
        src="/img02.jpg"
        width={500}
        height={500}
        alt="Imagem ilustrativa"/>
      </section>

      <section className="bg-dark">
        <div className="py-14 text-center max-w-2xl mx-auto text-white">
          <h2 className="text-xl font-bold">O que o <strong className="text-wellows underline">Despertar Lendário</strong> irá te fornecer?</h2>
          <div className="my-8 max-w-xl mx-auto shadow-2xl shadow-wellows rounded-2xl">
            <ul className="bg-white text-dark text-lg py-6 rounded-2xl">
              <li><FaSquareCheck className="text-wellows mr-1 inline-block"/>Redução da procrastinação</li>
              <li><FaSquareCheck className="text-wellows mr-1 inline-block"/>Crescimento pessoal contínuo</li>
              <li><FaSquareCheck className="text-wellows mr-1 inline-block"/>Desenvolvimento de hábitos saudáveis</li>
              <li><FaSquareCheck className="text-wellows mr-1 inline-block"/>Metas e objetivos realizáveis</li>
              <li><FaSquareCheck className="text-wellows mr-1 inline-block"/>Aumento da produtividade</li>
              <li><FaSquareCheck className="text-wellows mr-1 inline-block"/>Clareza de objetivos</li>
            </ul>
          </div>
          <button className="bg-wellows hover:bg-golden-wellow duration-500 mt-10 px-20 h-12 rounded-xl text-white text-lg font-bold">QUERO ACESSAR AGORA!</button>
        </div>
      </section>

      <section className="py-14 text-center max-w-2xl mx-auto">
        <h2 className="text-xl font-bold ">Um <strong className="text-golden-wellow underline">sistema para organização de vida</strong> em tempo recorde em um único lugar, foque seu tempo  no que realmente importa!</h2>
        
        <Image className="my-10 mx-auto"
        src="/img03.jpg"
        width={350}
        height={350}
        alt="Imagem ilustrativa"/>

        <div className="grid grid-cols-3 gap-4 text-white text-lg">
          <div className="flex flex-col items-center justify-center bg-golden-wellow p-6 rounded-2xl">
            <FaFeather className="mb-2 text-2xl"/>
            <p>Design intuitivo e amigável</p>
          </div>

          <div className="flex flex-col items-center justify-center col-span-2 bg-golden-wellow p-6 rounded-2xl">
            <div className="flex gap-4">
              <FaEarthAmericas className="mb-2 text-2xl"/>
              <FaDesktop className="mb-2 text-2xl"/>
            </div>
            <p>Acesse de qualquer lugar e também de qualquer dispositivo</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-golden-wellow p-6 rounded-2xl">
            <FaShapes className="mb-2 text-2xl"/>
            <p>100% personalizável e editável</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-golden-wellow p-6 rounded-2xl">
            <FaRoute className="mb-2 text-2xl"/>
            <p>Foque em metas e produtividade</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-golden-wellow p-6 rounded-2xl">
            <FaCircleHalfStroke className="mb-2 text-2xl"/>
            <p>Modo noturno</p>
          </div>

          <div className="flex flex-col items-center justify-center col-span-2 bg-golden-wellow p-6 rounded-2xl">
            <FaChartColumn className="mb-2 text-2xl"/>
            <p>Acompanhe teus resultados de forma simples, tangível e palpável</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-golden-wellow p-6 rounded-2xl">
            <FaUserGear className="mb-2 text-2xl"/>
            <p>Suporte técnico e dedicado</p>
          </div>
        </div>
        <button className="bg-golden-wellow hover:bg-wellows/80 duration-500 shadow-wellows/90 shadow-lg mt-10 px-28 h-12 rounded-xl text-white text-lg font-bold">QUERO ACESSAR AGORA!</button>
      </section>
    </>
  )
}