import React , {useEffect} from "react";
import { useSelector , useDispatch } from "react-redux";  
import { useNavigate, useParams } from "react-router-dom";
import { fetchUsers, deleteCard } from "../actions/cardActions";

const Card = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let { user } = useParams();
        const card = useSelector((state) => { //#useSelector is connecting the Card component to the redux store
            return state.cards.find((card) => card.title === user);
        });

        //const {title, body} = card;

        const users = useSelector((state) => {   //for use from the rootReducer
            return state.users;
        })
        console.log(users);

        useEffect(() => {     // to perform something after each render of component 
            dispatch(fetchUsers());
        });

        const onButtonClick = () => {
            let id = card.id;
            dispatch(deleteCard(id));//{type:'DELETE_CARD', id}) //or , id:id //dispatching to the rootreducer. Moved to cardActions.js
            navigate('/contact') //since this card is now deleted!
        }

        return users.map((user) => {
            return (
                <div
                    className='ui raised very padded text container segment'
                    style={{marginTop:'80px'}}
                    key={user.id}
                >
                <h3 className='ui header'>{ user.name }</h3>
                <p>{ user.email }</p>

                <button 
                    className="ui primary right floated button" 
                    onClick={onButtonClick}
                >
                    Delete!
                </button>
            </div>
            )
        });
    };

export default Card;