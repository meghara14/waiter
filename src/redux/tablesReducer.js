//selectors

export const getAllTables = (state) => state.tables;

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

//action creators

export const updateTables = payload => ({ type: UPDATE_TABLES, payload});

export const fetchTables = () => {
  return (dispatch) => {
    console.log("Próba pobrania tabel z serwera.");
    fetch(`http://localhost:3131/tables`)
      .then(response => response.json())
      .then(tables => {
        console.log("Pobrane tabele:", tables);
        dispatch(updateTables(tables));
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
        status: values.selectedOption,
        peopleAmount: values.peopleAmount,
        maxPeopleAmount: values.maxPeopleAmount,
        bill: values.billValue
      }),
    }
    fetch(`http://localhost:3131/tables/${values.tableId}`, options)
    .then(response => response.json())
    .then(updatedTable => {
      console.log("Dane przesyłane do updateTables:", updatedTable);
      dispatch(updateTables({
        id: values.tableId,
        status: values.selectedOption,
        peopleAmount: values.peopleAmount,
        maxPeopleAmount: values.maxPeopleAmount,
        bill: values.billValue
      }));
    })
  }
};



const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      console.log({action})
      return [...statePart, action.payload];


    default:
      return statePart;
  }
};

export default tablesReducer;