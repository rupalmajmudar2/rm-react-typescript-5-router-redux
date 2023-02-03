import axios from "axios"

//just creating a function that returns an action
export const deleteCard = (id) => {
    return {
        type: 'DELETE_CARD',
        id: id
    }
}
//in Card.js we had:
//let id = card.id;
//dispatch({type:'DELETE_CARD', id}) 

export const fetchUsers = () => {
    return (dispatch) => {  //returning a JS function instead of data. "Only with redux-thunk is this possible, btw"
                            //dispatch taken as param, to be able to use it to dispatch to the reducer!
         axios
            .get('https://jsonplaceholder.typicode.com/users')  //asynch method so use .then
            .then(({ data }) => {                               //we'll get the "data" when it returns
                dispatch( { type: 'FETCH_USERS', payload: data });
            });                            
    };
};