import { renderToString } from "react-dom/server";
import Hero from "@/components/Hero";
import Camp from "@/components/Camp";


export default function Home() {
  return (

    <>
      <Hero />


      <Camp />
    </>


    )
}