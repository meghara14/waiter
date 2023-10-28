
// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

//selectors

export const getAllTables = (state) => state.tables;

//action creators

export const updateTables = payload => ({ type: UPDATE_TABLES, payload});

export const fetchTables = () => {
  return (dispatch) => {
    fetch(`http://localhost:3131/tables`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        else return res.json()
      })
      .then((tables) => dispatch(updateTables(tables)));
  }
};

export const updateTablesRequest = (values, tableId) => {
  return (dispatch) =>  {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: tableId,
        status: values.selectedOption,
        peopleAmount: values.peopleAmount,
        maxPeopleAmount: values.maxPeopleAmount,
        bill: values.billValue
      }),
    }
    fetch(`http://localhost:3131/tables/tables/${tableId}`, options)
    .then(response => response.json())
  }
};
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return[...action.payload]

    default:
      return statePart;
  };
};
export default tablesReducer;