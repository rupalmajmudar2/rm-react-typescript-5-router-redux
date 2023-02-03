const initialState = {
    cards: [
        {
            id: 1,
            title: 'Alex',
            body: 'AlexAlexAlexAlexAlex'
        },
        {
            id: 2,
            title: 'Wilma',
            body: 'WilmaWilmaWilmaWilmaWilma'
        },
        {
            id: 3,
            title: 'John',
            body: 'JohnJohnJohnJohnJohn'
        }
    ],
    users: []
}

const rootReducer = (state = initialState, action) => {
    console.log(action);
    
    switch(action.type) {
        case 'DELETE_CARD':
            let newCards = state.cards.filter((card) => {  //non-destructive i.e. create a new array
                return action.id !== card.id;                //filter out the "deleted" card
            });
            return {
                ...state,           //keep all the other state fields as-is...
                cards: newCards     //just change the cards state
            };
        
        case 'FETCH_USERS' :
            return {
                ...state,           //keep all the other state fields as-is...
                users: action.payload     //just change the cards state
            };

        default: return state;
    }
}

export default rootReducer