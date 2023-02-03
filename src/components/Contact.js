//Functional component
import { React } from 'react';
import { Link , useNavigate} from 'react-router-dom'
import {connect} from 'react-redux' //higher-order component. Also usable: useSelector, useDispatch

/*
 For React 6+ :
 https://stackoverflow.com/questions/70403329/how-to-redirect-in-react-v6
*/
const Contact = ({cardsProp}) => { //same as (props) and then using props.cardsProp
    console.log(cardsProp);
    let navigate = useNavigate();
    setTimeout( () => {
        //props.history.push('/about')
        //<Navigate replace to="/about" />
        navigate('/')
    }, 20000) //wait 20s then go to /home
    return (
        <div>
            { cardsProp.map((card) => {
                return (
                    <div
                        className='ui raise very padded text container segment'
                        style = {{marginTop : '80px'}}
                        key = {card.id}
                    >
                        <Link to={`/${card.title}`} className='uiHeader'>
                            {card.title}
                        </Link>
                        <p>{card.body}</p> 
                    </div>
                )
            })}
                       
        </div>
    )
}

//Define what state data will come as props for this component. And then pass this defn to the connect!
const mapStateToProps = (state) => {
    return {
        cardsProp: state.cards
    }
}
export default connect(mapStateToProps)(Contact); //returns a HigherOrder Component which is wrapping Contact.
                        //Thus we've connected the Contact component to the Redux store!