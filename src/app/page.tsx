import { products } from "../../utils/products";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import ProductCart from "./components/products/ProductCart";

export default function Home() {
  return (
    <div className="pt-4 pb-8">
      <Container>
        <div className="mb-8">
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.map((product: any) => {
            return <ProductCart data={product} key={product.name} />;
          })}
        </div>
      </Container>
    </div>
  );
}
