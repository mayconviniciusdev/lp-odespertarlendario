import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Testimonial } from "@/components/testimonial";
import { Promise } from "@/components/promise";

export default function Home() {
  return (
    <main>
      <Header/>
      <About/>
      <Testimonial/>
      <Promise/>
    </main>
  )
}
