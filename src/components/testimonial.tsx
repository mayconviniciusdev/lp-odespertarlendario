"use client"
import Image from "next/image"
import { FaSquareCheck } from "react-icons/fa6"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../style/slider.css'

export const Testimonial = () => {
  return (
    <>
      <section className="bg-dark">
        <div className="py-14 text-center max-w-2xl mx-auto text-white">
          <h2 className="font-bold text-3xl">Para <strong className="text-golden-wellow underline">quais pessoas</strong> é?</h2>
          <div className="my-5 max-w-xl mx-auto">
            <ul className="text-xl py-6 ">
              <li><FaSquareCheck className="text-wellows mr-1 inline-block"/>Que buscam qualidade de vida</li>
              <li><FaSquareCheck className="text-wellows mr-1 inline-block"/>Que se sentem estagnadas na vida</li>
              <li><FaSquareCheck className="text-wellows mr-1 inline-block"/>Que almejam crescimento pessoal e profissional</li>
              <li><FaSquareCheck className="text-wellows mr-1 inline-block"/>Que tem dificuldades de saber o que precisa feito</li>
              <li><FaSquareCheck className="text-wellows mr-1 inline-block"/>Que buscam aumentar sua produtividade</li>
              <li><FaSquareCheck className="text-wellows mr-1 inline-block"/>Que não tem o controle da própria vida</li>
              <li><FaSquareCheck className="text-wellows mr-1 inline-block"/>Que desejam largar a mediocridade</li>
            </ul>
          </div>
          <button className="bg-wellows hover:bg-wellows/80 duration-500 shadow-wellows/70 shadow-lg px-16 h-12 rounded-xl text-white text-lg font-bold">QUERO ACESSAR AGORA!</button>
        </div>
      </section>

      {/**
        <section className="py-14 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold">Quem já usou, <strong className="text-golden-wellow underline">aprovou!</strong></h2>
        
        <div className="flex">
          <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{clickable: true}}
          slidesPerView={2}
          spaceBetween={5}
          autoplay={true}
          loop={true}>
            <SwiperSlide>
              <div className="my-10 p-5 bg-wellows/95 rounded-3xl max-w-xs mx-auto">
                <Image className="mx-auto my-4 rounded-full"
                src="/"
                width={80}
                height={80}
                alt="Tetse"/>

                <p className="text-dark font-bold">Robbs Santos</p>
                <p className="text-dark/80 font-bold">Estudante</p>
                <p className="text-sm my-4"></p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="my-10 p-5 bg-wellows/95 rounded-3xl max-w-xs mx-auto">
                <Image className="mx-auto my-4 rounded-full"
                src="/"
                width={80}
                height={80}
                alt="Foto pessoal"/>

                <p className="text-dark font-bold">Alice Ranow</p>
                <p className="text-dark/80 font-bold">Estudante</p>
                <p className="text-sm my-4"></p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="my-10 p-5 bg-wellows/95 rounded-3xl max-w-xs mx-auto">
                <Image className="mx-auto my-4 rounded-full"
                src="/"
                width={80}
                height={80}
                alt="Tetse"/>

                <p className="text-dark font-bold">Robbs Santos</p>
                <p className="text-dark/80 font-bold">Designer</p>
                <p className="text-sm my-4"></p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <button className="bg-wellows hover:bg-wellows/80 duration-500 shadow-wellows/70 shadow-lg mt-5 px-32 h-12 rounded-xl text-white text-lg font-bold">QUERO USAR TAMBÉM!</button>
      </section>
      **/}
    </>
  )
}