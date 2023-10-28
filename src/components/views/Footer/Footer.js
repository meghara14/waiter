import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={{ background: 'white', color: 'rgba(128, 128, 128, 0.7)', padding: '10px 0', textAlign: 'center', fontSize: '12px' }}>
            <Container>
                <p>Copyright © BlogApp 2023 </p>
            </Container>
        </footer>
    );
};

export default Footer;