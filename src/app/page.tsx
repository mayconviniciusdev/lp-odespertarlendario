"use client"
import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Testimonial } from "@/components/testemonial/testimonial";
import { Promise } from "@/components/promise";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <About/>
      <Testimonial/>
      <Promise/>
      <Faq/>
      <Footer/>
    </main>
  )
}
