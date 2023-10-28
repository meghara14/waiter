import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesReducer';

const TableList = (props) => {
    const tables = useSelector(getAllTables);
    
  
   
    return(
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
                        <Link to={'/table/' + props.id}>
                            <Button>SHOW MORE</Button>
                        </Link>
                    </Col>
                </Row>
            ))}
        </Container>
    )
}

export default TableList;