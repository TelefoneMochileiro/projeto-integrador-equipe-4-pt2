import Foguete from "../../assets/foguete.png";
import { Link } from "react-router-dom"
import { Container, H3Styled, Div, HeaderStyled, ImgStyled, Menu } from "./style";

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <Container>
          <Div>
            <ImgStyled src={Foguete} alt=""></ImgStyled>
            <H3Styled>Velocity</H3Styled>
          </Div>
          <Menu>
            <ul>
              <li>
                <Link to="/pedidos">Início</Link>
              </li>
              <li>
                <Link to="/servicos">Serviços</Link>
              </li>
              <li>
                <Link to="/relatorios">Relátorios</Link>
              </li>
            </ul>
          </Menu>
        </Container>
      </HeaderStyled>
    </>
  );
}
