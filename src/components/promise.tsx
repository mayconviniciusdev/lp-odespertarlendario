import Image from "next/image";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBook, FaChartLine, FaCheckToSlot, FaRegCalendarCheck } from "react-icons/fa6";
import { PiStudentFill, PiCalendarFill, PiShoppingBagOpenFill } from "react-icons/pi";

export const Promise = () => {
  return (
    <>
      <section className="bg-dark">
        <div className="pt-14 text-center max-w-2xl mx-auto text-white">
          <h2 className="font-bold text-2xl max-w-xl mx-auto">Cansado de <strong className="text-golden-wellow underline">acordar não sabendo o que precisar se feito e terminar o dia com pendencias</strong> que te desanimam?</h2>
          <p className="mt-5 max-w-xl mx-auto">Então transforme sua vida atual em uma 100% lendária com o template <strong>Despertar Lendário</strong>, onde você será o protagonista da vida que deseja.</p>
          <Image className="mx-auto mt-16"
          src="/layers.png"
          width={800}
          height={800}
          alt="Imagem ilustrativa"/>
        </div>
      </section>

      <section>
        <div className="py-16 text-center max-w-3xl mx-auto text-dark">
          <Image className="mx-auto mb-16"
          src="/img05.png"
          width={500}
          height={500}
          alt="Imagem ilustrativa"/>

          <p className="text-lg">Muito mais que um template…</p>
          <p className="mb-6 font-bold text-xl">Um sistema único para sua transformação e crescimento de vida!</p>
          <h2 className="font-bold text-3xl">VEJA TUDO O QUE VOCÊ RECEBE</h2>

          <ul className="text-dark text-lg py-6">
            <li className="flex items-center justify-center bg-wellows/70 py-3 my-2 rounded-xl"><BiSolidDashboard className="text-dark/80 mr-2 my-2 text-3xl"/>Dashboard tangível</li>
            <li className="flex items-center justify-center bg-wellows/70 py-3 my-2 rounded-xl"><FaCheckToSlot className="text-dark/80 mr-2 my-2 text-3xl"/>Gerenciamento de hábitos</li>
            <li className="flex items-center justify-center bg-wellows/70 py-3 my-2 rounded-xl"><PiShoppingBagOpenFill className="text-dark/80 mr-2 my-2 text-3xl"/>Sistema de controle de compras</li>
            <li className="flex items-center justify-center bg-wellows/70 py-3 my-2 rounded-xl"><PiCalendarFill className="text-dark/80 mr-2 my-2 text-3xl"/>Sistema de organização pessoal</li>
            <li className="flex items-center justify-center bg-wellows/70 py-3 my-2 rounded-xl"><PiStudentFill className="text-dark/80 mr-2 my-2 text-3xl"/>Planejamento de estudos</li>
            <li className="flex items-center justify-center bg-wellows/70 py-3 my-2 rounded-xl"><FaChartLine className="text-dark/80 mr-2 my-2 text-3xl"/>Planejamento de metas</li>
            <li className="flex items-center justify-center bg-wellows/70 py-3 my-2 rounded-xl"><FaBook className="text-dark/80 mr-2 my-2 text-3xl"/>Controle de leitura</li>
          </ul>

          <p className="mt-5 mb-2 text-lg">E não acaba por aí…</p>
          <h2 className="font-bold text-xl">Você ainda vai ganhar 2 bônus!</h2>

          <ul className="flex gap-4 justify-center pt-10">
            <li>
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

          <div className="mt-12">
            <p className="mb-2 text-lg">E o preço disso tudo?</p>
            <h2 className="font-bold text-xl">Um investimento com tanto potencial de retorno em sua vida...</h2>

            <div className="bg-wellows/70 my-6 p-10 rounded-3xl text-white">
              <p className="font-semibold text-lg">POR APENAS:</p>
              <h1 className="text-5xl font-black text-golden-wellow my-6">12x de 9,90</h1>
              <p className="font-semibold text-lg">ou R$ 97,00 à vista</p>
              <button className="bg-golden-wellow/70 hover:bg-golden-wellow duration-500 px-16 mt-6 h-12 rounded-xl text-white text-lg font-bold">QUERO ADQUIRIR AGORA!</button>
            </div>

            <p className="text-lg">Pagamento 100% seguro | Garantia de 7 dias</p>
          </div>
        </div>
      </section>
    </>
  )
}