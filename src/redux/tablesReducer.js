import { API_URL } from '../config';
//selectors
export const getAllTables = (state) => state.tables;

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const FETCH_TABLES = createActionName('FETCH_TABLES');

//action creators

export const updateTables = payload => ({ type: UPDATE_TABLES, payload});
export const getTables = payload => ({type: FETCH_TABLES, payload});

export const fetchTables = () => {
  return (dispatch) => {
    console.log("Próba pobrania tabel z serwera.");
    fetch(`${API_URL}/tables/`)
      .then(response => response.json())
      .then(tables => {
        console.log("Pobrane tabele:", tables);
        dispatch(getTables(tables));
      })
  };
};

export const updateTablesRequest = (values) => {
  console.log({values})
  return (dispatch) =>  {
    console.log('Próba wysłania żądania PUT z tableId:', values.tableId);
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: values.tableId,
        status: values.status,
        peopleAmount: values.peopleAmount,
        maxPeopleAmount: values.maxPeopleAmount,
        bill: values.bill
      }),
    }
    fetch(`${API_URL}/tables/${values.tableId}`, options)
    .then(response => response.json())
    .then(updatedTable => {
      console.log("Dane przesyłane do updateTables:", updatedTable);
      dispatch(updateTables({
        id: values.tableId,
        status: values.status,
        peopleAmount: values.peopleAmount,
        maxPeopleAmount: values.maxPeopleAmount,
        bill: values.bill
      }));
    })
  }
};



const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case FETCH_TABLES:
      return [...action.payload];
    case UPDATE_TABLES:
      console.log({action})
      const newPayload = statePart.map(item => {
        console.log(item.id, action.payload.id, item.id === action.payload.id)
        if(item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });

      return newPayload;


    default:
      return statePart;
  }
};

export default tablesReducer;