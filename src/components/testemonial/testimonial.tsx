"use client"
import Image from "next/image"
import { FaSquareCheck } from "react-icons/fa6"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../testemonial/slider.css'


export const Testimonial = () => {
  const towards = [
    {toward: 'Buscam qualidade de vida'},
    {toward: 'Se sentem estagnadas na vida'},
    {toward: 'Almejam crescimento em sua vida'},
    {toward: 'Não entendem o que precisa ser feito'},
    {toward: 'Buscam aumentar sua produtividade'},
    {toward: 'Não tem o controle da própria vida'},
    {toward: 'Desejam largar a mediocridade'}
  ]
  return (
    <>
      <section className="bg-dark px-5">
        <div className="container py-24 mx-auto text-center text-white">
          <h2 className="font-bold text-xl">É para <strong className="text-golden-wellow underline">pessoas que...</strong></h2>
          <div className="my-5 max-w-xl mx-auto">
            <ul className="text-lg font-bold py-6 ">
              {towards.map((item) => (<li><FaSquareCheck className="text-wellows mr-1 inline-block"/>{item.toward}</li>))}
            </ul>
          </div>
          <button className="bg-wellows hover:bg-wellows/80 duration-500 shadow-wellows/70 shadow-lg px-4 h-12 rounded-xl text-white text-lg font-bold md:px-16">QUERO ACESSAR AGORA!</button>
        </div>
      </section>

      <section className="py-24 px-5 container text-center mx-auto">
        <h2 className="text-xl font-bold">Quem já usou, <strong className="text-golden-wellow underline">aprovou!</strong></h2>
        <div className="max-w-lg mx-auto">
          <Swiper className="flex flex-col"
          modules={[Pagination, Autoplay]}
          pagination={{clickable: true}}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={true}
          loop={true}>
            <SwiperSlide>
              <div className="my-10 p-5 bg-wellows/70 rounded-3xl max-w-xs mx-auto">
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
              <div className="my-10 p-5 bg-wellows/70 rounded-3xl max-w-xs mx-auto">
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
              <div className="my-10 p-5 bg-wellows/70 rounded-3xl max-w-xs mx-auto">
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

        <button className="bg-wellows hover:bg-wellows/80 duration-500 shadow-wellows/70 shadow-lg mt-5 px-4 h-12 rounded-xl text-white text-lg font-bold md:px-20">QUERO USAR TAMBÉM!</button>
      </section>
    </>
  )
}