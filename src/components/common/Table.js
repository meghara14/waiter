import { Col, Container, Row } from 'react-bootstrap';
import { getAllTables } from '../../redux/tablesReducer';	
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TableForm from '../features/TableForm';

const Table = () => {
    const { tableId } = useParams();
    const tables = useSelector(getAllTables);

    const table = tables.find(table => table.id === tableId);

    if (!table) {
        return <div>Table not found</div>;
    }

    return (
        <Container>
            <Row key={table.id} className='mb-3 mt-3'>
                <h2>{`Table ${table.id}`}</h2>
                <Col md={4}>
                    <TableForm 
                        tableId={table.id}  // Przekazujemy tableId do TableForm
                        status={table.status} 
                        peopleAmount={table.peopleAmount} 
                        maxPeopleAmount={table.maxPeopleAmount} 
                        bill={table.bill}
                    />    
                </Col>
            </Row>
        </Container>
    )
}

export default Table;
