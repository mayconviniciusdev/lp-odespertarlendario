import Image from "next/image"
import { FaChartColumn, FaCircleHalfStroke, FaDesktop, FaEarthAmericas, FaFeather, FaRoute, FaShapes, FaSquareCheck, FaUserGear } from "react-icons/fa6";

export const About = () => {
  const benefits = [
    {benefit: 'Clareza de objetivos'},
    {benefit: 'Redução da procrastinação'},
    {benefit: 'Criação de hábitos saudáveis'},
    {benefit: 'Crescimento pessoal contínuo'},
    {benefit: 'Metas e objetivos realizáveis'},
    {benefit: 'Aumento da produtividade'}, ] 

  return (
    <>
      <section className="container mx-auto py-24 px-5 text-center lg:flex items-center justify-center gap-20">
        <div className="max-w-md mx-auto mb-10 lg:m-0">
          <h2 className="font-bold text-xl"><strong className="text-golden-wellow underline">Quer tomar as rédeas da sua vida</strong> saindo de ciclos ruins e improdutivos?</h2>
          <p className="py-5">O <strong>Despertar lendário</strong> ajudará você em sua transformação de vida, conquistando metas e sonhos de uma forma leve e visual.</p>
          <p>Esse <strong>sistema</strong> foi desenvolvido para que você foque naquilo que verdadeiramente importa, tendo <strong>uma visão palpável</strong> e geral do que necessita ser executado em prol <strong>dos seus objetivos</strong>.</p>
        </div>
        <Image className="mx-auto lg:m-0"
        src="/img02.jpg"
        width={500}
        height={500}
        alt="Imagem ilustrativa"/>
      </section>

      <section className="bg-dark px-5">
        <div className="py-24 text-center container mx-auto text-white">
          <h2 className="text-xl max-w-md mx-auto font-bold">O que você irá encontrar e obter com o template <strong className="text-golden-wellow underline">Despertar Lendário?</strong></h2>
          <div className="my-6 max-w-xl mx-auto shadow-2xl shadow-golden-wellow rounded-2xl">
            <ul className="bg-white text-dark/70 font-semibold py-6 rounded-2xl">
              {benefits.map((item)=> (<li className="flex items-center justify-center my-1"><FaSquareCheck className="text-wellows mr-1"/>{item.benefit}</li>))}
            </ul>
          </div>
          <button className="bg-wellows hover:bg-wellows/80 duration-500 mt-12 h-12 rounded-xl px-4 text-lg font-bold md:px-24">QUERO ACESSAR AGORA!</button>
        </div>
      </section>

      <section className="container mx-auto py-24 px-5 text-center">
        <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-bold ">Um <strong className="text-golden-wellow underline">sistema para organização de vida</strong> em tempo recorde em um único lugar, foque seu tempo  no que realmente importa!</h2>
        <Image className="my-10 mx-auto px-4"
        src="/img03.png"
        width={400}
        height={400}
        alt="Imagem ilustrativa"/>

        <div className="text-dark/70 text-lg font-semibold lg:grid grid-cols-3">
          <div className="flex flex-col items-center justify-center bg-wellows/70 p-6 m-2 rounded-2xl">
            <FaFeather className="mb-2 text-2xl"/>
            <p>Design intuitivo e amigável</p>
          </div>

          <div className="flex flex-col items-center justify-center col-span-2 bg-wellows/70 p-6 m-2 rounded-2xl">
            <div className="flex gap-4 mb-2 text-2xl">
              <FaEarthAmericas/>
              <FaDesktop/>
            </div>
            <p>Acesse de qualquer lugar e também de qualquer dispositivo</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-wellows/70 p-6 m-2 rounded-2xl">
            <FaShapes className="mb-2 text-2xl"/>
            <p>100% personalizável e editável</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-wellows/70 p-6 m-2 rounded-2xl">
            <FaRoute className="mb-2 text-2xl"/>
            <p>Foque em metas e produtividade</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-wellows/70 p-6 m-2 rounded-2xl">
            <FaCircleHalfStroke className="mb-2 text-2xl"/>
            <p>Modo noturno</p>
          </div>

          <div className="flex flex-col items-center justify-center col-span-2 bg-wellows/70 p-6 m-2 rounded-2xl">
            <FaChartColumn className="mb-2 text-2xl"/>
            <p>Acompanhe teus resultados de forma simples, tangível e palpável</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-wellows/70 p-6 m-2 rounded-2xl">
            <FaUserGear className="mb-2 text-2xl"/>
            <p>Suporte técnico e dedicado</p>
          </div>
        </div>
        <button className="bg-wellows hover:bg-wellows/80 duration-500 shadow-wellows/70 shadow-lg mt-5 px-4 h-12 rounded-xl text-white text-lg font-bold md:px-36">QUERO ACESSAR AGORA!</button>
        </div>
      </section>
    </>
  )
}