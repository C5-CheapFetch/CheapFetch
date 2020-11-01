import Link from "next/link";
import RightNav from '../RightNav';
import { Nav, Figure, Div} from "./styles";

const Navigation = () => {
  return (
    <Div>
      <Nav>
        <Figure>
        <img src="images/menu.png"
        height={50}
        alt="Logo de CheapFetch"
        />
      </Figure> 
      <RightNav />  
      </Nav>
    </Div>
  );
};

export default Navigation;
