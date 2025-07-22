import Container from "../Container";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <div className="py-4 bg-slate-700 text-white">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 space-y-4">
          <FooterList title="Shop Categories">
            <li>Phone</li>
            <li>Laptop</li>
            <li>TVs</li>
            <li>Desktops</li>
            <li>Accessories</li>
          </FooterList>
          <FooterList title="Shop Categories">
            <li>Phone</li>
            <li>Laptop</li>
            <li>TVs</li>
            <li>Desktops</li>
            <li>Accessories</li>
          </FooterList>
          <FooterList title="Shop Categories">
            <li>Phone</li>
            <li>Laptop</li>
            <li>TVs</li>
            <li>Desktops</li>
            <li>Accessories</li>
          </FooterList>
          <FooterList title="Shop Categories">
            <li>Phone</li>
            <li>Laptop</li>
            <li>TVs</li>
            <li>Desktops</li>
            <li>Accessories</li>
          </FooterList>
        </div>
        <div className="text-center font-semibold text-white mt-2">&copy; {new Date().getFullYear()} Shopping App. All rights reserved.</div>
      </Container>
    </div>
  );
};

export default Footer;
