import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTablesRequest } from '../../redux/tablesReducer';
import { Container, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const TableForm = (props) => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState(props.status);
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
  const [bill, setBill] = useState(props.bill);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    if (newStatus !== 'Busy') {
      setBill(0);
    }
    if (newStatus === 'Free' || newStatus === 'Cleaning') {
      setPeopleAmount(0);
    }
  };

  const handlePeopleAmountChange = (newPeopleAmount) => {
    if (newPeopleAmount < 0) {
      newPeopleAmount = 0;
    }
    if (newPeopleAmount > 10) {
      newPeopleAmount = 10;
    }
    if (newPeopleAmount > maxPeopleAmount) {
      newPeopleAmount = maxPeopleAmount;
    }
    setPeopleAmount(newPeopleAmount);
  };

  const handleMaxPeopleAmountChange = (newMaxPeopleAmount) => {
    if (newMaxPeopleAmount < 0) {
      newMaxPeopleAmount = 0;
    }
    if (newMaxPeopleAmount > 10) {
      newMaxPeopleAmount = 10;
    }
    if (peopleAmount > newMaxPeopleAmount) {
      setPeopleAmount(newMaxPeopleAmount);
    }
    setMaxPeopleAmount(newMaxPeopleAmount);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateTablesRequest({ ...props, status, peopleAmount, maxPeopleAmount, bill }));
  };

  return (
    <Container>
      <Form>
        <Form.Group>
          <p>
            Status:
            <Form.Select value={status} name="status" onChange={(e) => handleStatusChange(e.target.value)}>
              <option value="Free">Free</option>
              <option value="Busy">Busy</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Reserved">Reserved</option>
            </Form.Select>
          </p>
          <p>
            People:
            <Form.Control type="number" value={peopleAmount} onChange={(e) => handlePeopleAmountChange(parseInt(e.target.value))} />
            /
            <Form.Control type="number" value={maxPeopleAmount} onChange={(e) => handleMaxPeopleAmountChange(parseInt(e.target.value))} />
          </p>
          {status === 'Busy' && (
            <p>
              Bill ($):
              <Form.Control type="number" value={bill} onChange={(e) => setBill(parseInt(e.target.value))} />
            </p>
          )}
          <p>
            <Button onClick={handleSubmit}>Update</Button>
          </p>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default TableForm;
