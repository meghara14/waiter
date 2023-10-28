import { Container, Row } from 'react-bootstrap';
import TableList from '../features/TableList';

const Home = () => {
	
	return (
		<Container>
			<Row className="mb-3 mt-3 justify-content-md-center text-center" >
                <h1>All tables:</h1>
            </Row>
            <Row className="justify-content-md-center" >
                <TableList />
            </Row>
		</Container>
	);
};

export default Home;
