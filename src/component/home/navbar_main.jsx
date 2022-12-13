import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/img/logo/Logo.svg';
import '../../assets/css/navbar.css';
//const Logo = require('../assets/img/logo/Logo.svg');

function NavMain() {
  return (
    <Navbar className='navbarmain' expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="EE-Dept" width='60%' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbarmain-text'>
          <Nav className="ms-auto" >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Service" id="basic-nav-dropdown">
              <NavDropdown.Item href="/partlist">Partlist Cost</NavDropdown.Item>
              <NavDropdown.Item href="/estimatecost">Estimate Cost</NavDropdown.Item>
              <NavDropdown.Item href="/followup">Project Follow UP</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/auth">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMain;