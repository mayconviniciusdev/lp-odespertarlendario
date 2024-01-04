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
      summary: "Como receberei o acesso ao Despertar lendário?",
      detail: "Você receberá o acesso automaticamente quando finaliza a compra através do email fornecido no momento da compra.",
      open: true
    },
    { id: 3,
      open: true,
      summary: "Como funciona a garantia?",
      detail: "Você tem 7 dias de garantia e caso não tenha feito sentido para você, por qualquer motivo que seja, pode pedir seu dinheiro 100% de volta."
    },
    { id: 4,
      summary: "Quais são as formas de pagamento?",
      open: true,
      detail: "Cartão de Crédito em até 12x, dois cartões, boleto bancário ou pix à vista."
    },
    { id: 5,
      summary: "Por quanto tempo vou ter acesso ao Despertar Lendário?",
      open: true,
      detail: "Você terá acesso aos materiais e ao sistema por 1 ano."
    },
    { id: 6,
      summary: "O pagamento é seguro?",
      open: true,
      detail: "Sim, 100% seguro. A transação é realizada pela Kiwify, uma plataforma segura e totalmente livre de riscos."
    },
    { id: 7,
      summary: "Preciso instalar algo no meu computador para usar o [PRODUTO]?",
      open: true,
      detail: "Não, o [PRODUTO] é uma plataforma online. Basta ter uma conexão com a internet e você poderá acessá-lo de qualquer dispositivo sem precisar instalar nada."
    },
    { id: 8,
      summary: "Existe algum treinamento incluído para ajudar a entender o [PRODUTO]?",
      open: true,
      detail: "Sim, oferecemos materiais de treinamento e tutoriais para ajudá-lo a começar e a tirar o máximo proveito da plataforma."
    },
  ];

  const toggleDetails = (id: number) => {
    setOpenDetails((prevOpenDetails) => {
      const updatedOpenDetails = [...prevOpenDetails];
      const index = updatedOpenDetails.indexOf(id);

      if (index === -1) {updatedOpenDetails.push(id);} 
      else {updatedOpenDetails.splice(index, 1);}
      return updatedOpenDetails as number[]; }); };

  return (
  <div className="py-10 border-t-2 border-wellows/70 max-w-xl mx-auto">
    <h2 className="text-center">Perguntas frequentes</h2>

    {faq.map((item) => (
    <details className="bg-wellows/70 my-2 p-4 rounded-xl">
      <summary className="cursor-pointer hover:text-dark/70 flex items-center">
        <span>{item.summary}</span>
        <span className="ml-auto">{openDetails.includes(item.id) ? <RiArrowDownSLine/> : <RiArrowUpSLine/>}</span> {/* Unicode character for a right-pointing triangle (▶) */}
      </summary>
      {item.detail}
    </details> ))}
  </div> );
};