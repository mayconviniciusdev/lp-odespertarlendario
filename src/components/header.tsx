import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-dark">
      <div className="py-14 text-center max-w-2xl mx-auto text-white">
        <h2 className="font-bold text-3xl">Seja o <strong className="text-golden-wellow underline">protagonista</strong> da sua própria vida e crie um estilo de vida <strong className="text-golden-wellow underline">ultra lendário</strong>.</h2>
        <p className="my-5 max-w-xl mx-auto">Nosso template é mais que só uma simples ferramenta, ele é um catalisador onde você conseguirá substituir uma vida de estagnação, por uma de evolução gradual e contínua.</p>
        <Image className="mx-auto"
        src="/img01.png"
        width={500}
        height={500}
        alt="Imagem ilustrativa"/>
        <button className="bg-wellows hover:bg-wellows/80 duration-500 shadow-wellows/70 shadow-lg mt-10 px-16 h-12 rounded-xl text-white text-lg font-bold">QUERO ACESSAR AGORA!</button>
      </div>
    </header>
  )
}