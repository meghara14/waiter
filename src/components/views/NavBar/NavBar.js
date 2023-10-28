import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{ background: 'blue', color: 'white', margin: 'auto', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Container>               
                <Nav className="me-auto">
                    <p style={{ color: 'white', marginTop: 'auto', marginBottom: '0.5rem' }}>Waiter.app</p> 
                    <Nav.Link as={NavLink} to="/" style={{ color: 'white', marginLeft: 'auto' }}>Home</Nav.Link>
                </Nav>    
            </Container>
        </nav>
    );
};
  
  export default NavBar;