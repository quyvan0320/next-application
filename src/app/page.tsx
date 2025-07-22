import { products } from "../../utils/products";
import truncateText from "../../utils/truncateText";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";

export default function Home() {
  return (
    <div className="py-4">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div>
          {products.map((product: any) => {
            return <div>{truncateText(product.name)}</div>;
          })}
        </div>
      </Container>
    </div>
  );
}

