import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-dark px-5">
      <div className="py-12 mx-auto container text-center text-white">
        <h2 className="max-w-lg mx-auto font-bold text-xl">Seja o <strong className="text-golden-wellow underline">protagonista</strong> da sua própria vida e crie um estilo de vida <strong className="text-golden-wellow underline">ultra lendário</strong>.</h2>
        <p className="my-8 max-w-xl mx-auto">Nosso template é mais que só uma simples ferramenta, ele é um catalisador onde você conseguirá substituir uma vida de estagnação, por uma de evolução gradual e contínua.</p>
        <Image className="mx-auto px-4"
        src="/img01.png"
        width={600}
        height={600}
        alt="Imagem ilustrativa"/>
        <button className="bg-wellows hover:bg-wellows/80 duration-500 shadow-wellows/70 shadow-lg mt-10 px-4 h-12 rounded-xl text-lg font-bold md:px-24">QUERO ACESSAR AGORA!</button>
      </div>
    </header>
  )
}