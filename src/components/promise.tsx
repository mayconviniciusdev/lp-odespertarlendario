import Image from "next/image";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBook, FaChartLine, FaCheckToSlot } from "react-icons/fa6";
import { PiStudentFill, PiCalendarFill, PiShoppingBagOpenFill } from "react-icons/pi";

export const Promise = () => {
  return (
    <>
      <section className="bg-dark px-2">
        <div className="container pt-24 mx-auto text-center text-white">
          <h2 className="font-bold text-xl max-w-2xl mx-auto">Cansado de <strong className="text-golden-wellow underline">acordar não sabendo o que precisar se feito e terminar o dia com pendencias</strong> que te desanimam?</h2>
          <p className="mt-5 max-w-xl mx-auto">Então transforme sua vida atual em uma 100% lendária com o template <strong>Despertar Lendário</strong>, onde você será o protagonista da vida que deseja.</p>
          <Image className="mx-auto mt-16"
          src="/layers.png"
          width={800}
          height={800}
          alt="Imagem ilustrativa"/>
        </div>
      </section>

      <section className="px-2 container mx-auto">
        <div className="max-w-2xl mx-auto pt-24 pb-16 text-center text-dark">
          <Image className="mx-auto mb-10"
          src="/img05.png"
          width={500}
          height={500}
          alt="Imagem ilustrativa"/>

          <p className="text-lg mb-2">Muito mais que um template…</p>
          <p className="max-w-md mx-auto mb-6 font-bold text-xl text-dark/90">Um sistema único para sua transformação e crescimento de vida!</p>
          <h2 className="font-bold text-2xl">VEJA TUDO O QUE VOCÊ RECEBE</h2>

          <ul className="max-w-xl mx-auto text-dark text-lg py-6">
            <li className="bg-wellows/70 p-3 my-2 rounded-xl flex flex-wrap lg:flex items-center justify-center"><BiSolidDashboard className="text-dark/80 mr-2 my-2 text-3xl"/>Dashboard tangível</li>
            <li className="bg-wellows/70 p-3 my-2 rounded-xl flex flex-wrap lg:flex items-center justify-center"><FaCheckToSlot className="text-dark/80 mr-2 my-2 text-3xl"/>Gerenciamento de hábitos</li>
            <li className="bg-wellows/70 p-3 my-2 rounded-xl flex flex-wrap lg:flex items-center justify-center"><PiShoppingBagOpenFill className="text-dark/80 mr-2 my-2 text-3xl"/>Sistema de controle de compras</li>
            <li className="bg-wellows/70 p-3 my-2 rounded-xl flex flex-wrap lg:flex items-center justify-center"><PiCalendarFill className="text-dark/80 mr-2 my-2 text-3xl"/>Sistema de organização pessoal</li>
            <li className="bg-wellows/70 p-3 my-2 rounded-xl flex flex-wrap lg:flex items-center justify-center"><PiStudentFill className="text-dark/80 mr-2 my-2 text-3xl"/>Planejamento de estudos</li>
            <li className="bg-wellows/70 p-3 my-2 rounded-xl flex flex-wrap lg:flex items-center justify-center"><FaChartLine className="text-dark/80 mr-2 my-2 text-3xl"/>Planejamento de metas</li>
            <li className="bg-wellows/70 p-3 my-2 rounded-xl flex flex-wrap lg:flex items-center justify-center"><FaBook className="text-dark/80 mr-2 my-2 text-3xl"/>Controle de leitura</li>
          </ul>

          <p className="mt-5 mb-2 text-lg">E não acaba por aí…</p>
          <h2 className="font-bold text-xl">Você ainda ganha 2 bônus!</h2>

          <ul className="my-10 md:flex gap-4 justify-center">
            <li className="mb-5 md:m-0">
            <Image className="mx-auto"
            src="/img06.png"
            width={500}
            height={500}
            alt="Imagem ilustrativa"/>
            <p className="bg-wellows/70 text-dark/70 font-bold p-10 rounded-b-3xl">A intenção do protocolo é que você se torne uma pessoa que busque aprimorar suas habilidades e adotar comportamentos mais eficientes, aproximando-se de uma mentalidade mais eficaz e disciplinada.</p>
            </li>

            <li>
              <Image className="mx-auto"
              src="/img07.jpg"
              width={500}
              height={500}
              alt="Imagem ilustrativa"/>
              <p className="bg-wellows/70 text-dark/70 font-bold p-10 rounded-b-3xl">A intenção do protocolo é que você se torne uma pessoa que busque aprimorar suas habilidades e adotar comportamentos mais eficientes, aproximando-se de uma mentalidade mais eficaz e disciplinada.</p>
            </li>
          </ul>

          <div className="mt-10">
            <p className="mb-2 text-lg">E o preço disso tudo?</p>
            <h2 className="font-bold text-xl max-w-md mx-auto">Um investimento com tanto potencial de retorno em sua vida...</h2>
            <div className="bg-wellows/70 my-6 py-10 rounded-3xl text-dark/70 shadow-2xl shadow-golden-wellow">
              <p className="font-bold text-lg mb-3">POR APENAS:</p>
              <h1 className="text-5xl font-black text-golden-wellow">12x de 9,90</h1>
              <p className="font-bold text-lg">ou R$ 97,00 à vista</p>
              <button className="bg-golden-wellow/70 hover:bg-golden-wellow duration-500 px-2 mt-6 h-12 rounded-xl text-white text-lg font-bold md:px-20">QUERO ADQUIRIR AGORA!</button>
            </div>
            <p className="text-lg mt-12">Pagamento 100% seguro com garantia de 7 dias</p>
          </div>
        </div>
      </section>
    </>
  )
}