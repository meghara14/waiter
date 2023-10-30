import { Spinner, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getAllTables, updateTablesRequest } from '../../redux/tablesReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TableList = (props) => {
    const tables = useSelector(getAllTables);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleSubmit = (e, id) => {
        e.preventDefault();
        console.log(id);
        dispatch(updateTablesRequest(id));
        navigate('/');
    }  
  
    // Dodaj warunek sprawdzający, czy tables jest tablicą
    if (!Array.isArray(tables) || tables.length === 0) {
        return (
          <div>
            <Spinner animation='border' variant='primary' />
            <p>Loading</p>
          </div>
        );
    }

    return (
        <Container>
            {tables.map(table => (
                <Row key={table.id} className="text-left" >
                    <Col md={6}>
                        <h3>{`Table ${table.id}`}</h3>
                    </Col>
                    <Col md={2}>
                        <p>{`Status: ${table.status}`}</p>
                    </Col>
                    <Col md={2}>                        
                        <Link to={'/table/' + table.id}>
                            <Button>SHOW MORE</Button>
                        </Link>
                    </Col>
                    <Col md={2}>
                        <Button onClick={(e) => handleSubmit(e, table.id)}>REMOVE</Button>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}

export default TableList;
