import Image from "next/image";
import Container from "@/components/Container";
import Banner  from "@/components/Banner";
import Facilities from "@/components/Facilities";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <Container>
      <Banner/>
      <Facilities/>
      <ProductList/>
    </Container>
  );
}
