import Hero from "@/components/(home)/Hero";
import Overview from "@/components/(home)/Overview";
import ServicesHome from "@/components/(home)/ServicesHome";
import Testimoni from "@/components/(home)/Testimoni";

export default function Home() {
  return (
    <div>
      <Hero />
      <Overview/>
      <ServicesHome/>
      <Testimoni />
    </div>
  );
}
