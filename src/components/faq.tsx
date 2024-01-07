"use client"
import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

interface FAQItem {
  id: number;
  summary: string;
  detail: string;
  open?: boolean;
}

export const Faq = () => {
  const [openDetails, setOpenDetails] = useState<number[]>([]);

  const faq: FAQItem[] = [
    { id: 1,
      summary: "Como receberei o acesso ao Despertar lendário?",
      detail: "Você receberá o acesso automaticamente quando finaliza a compra através do email fornecido no momento da compra.",
      open: true
    },
    { id: 2,
      open: true,
      summary: "Como funciona a garantia?",
      detail: "Você tem 7 dias de garantia e caso não tenha feito sentido para você, por qualquer motivo que seja, pode pedir seu dinheiro 100% de volta."
    },
    { id: 3,
      summary: "Quais são as formas de pagamento?",
      open: true,
      detail: "Cartão de Crédito em até 12x, dois cartões, boleto bancário ou pix à vista."
    },
    { id: 4,
      summary: "Por quanto tempo vou ter acesso ao Despertar Lendário?",
      open: true,
      detail: "Você terá acesso aos materiais e ao sistema por 1 ano."
    },
    { id: 5,
      summary: "O pagamento é seguro?",
      open: true,
      detail: "Sim, 100% seguro. A transação é realizada pela Kiwify, uma plataforma segura e totalmente livre de riscos."
    },
    { id: 6,
      summary: "Preciso instalar algo no meu computador para usar o [PRODUTO]?",
      open: true,
      detail: "Não, o [PRODUTO] é uma plataforma online. Basta ter uma conexão com a internet e você poderá acessá-lo de qualquer dispositivo sem precisar instalar nada."
    },
    { id: 7,
      summary: "Existe algum treinamento incluído para ajudar a entender o [PRODUTO]?",
      open: true,
      detail: "Sim, oferecemos materiais de treinamento e tutoriais para ajudá-lo a começar e a tirar o máximo proveito da plataforma."
    },
  ];

  const ToggleDetails = (id: number) => {
    setOpenDetails((prevOpenDetails) => {
      const updatedOpenDetails = [...prevOpenDetails];
      const index = updatedOpenDetails.indexOf(id);

      if (index === -1) {updatedOpenDetails.push(id);} 
      else {updatedOpenDetails.splice(index, 1);}
      return updatedOpenDetails as number[]; }); };

  return (
  <div className="px-2 py-16 bg-dark text-white">
    <div className="max-w-xl mx-auto">
      <h2 className="text-center font-bold pb-8 text-2xl">Perguntas frequentes</h2>

      {faq.map((item) => (
      <details className="my-2 p-4 rounded-lg border-b-2 border-wellows/30">
        <summary className="cursor-pointer flex items-center" onClick={() => ToggleDetails(item.id)}>
          <span className="text-lg text-white/70 font-bold mb-2">{item.summary}</span>
          <span className="ml-auto text-wellows/50">{openDetails.includes(item.id) ? <RiArrowDownSLine/> : <RiArrowUpSLine/>}</span>
        </summary>
        <div className="py-2 ">{item.detail}</div>
      </details> ))}
    </div> 
  </div> );
};