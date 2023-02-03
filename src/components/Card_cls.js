import React from "react";
import { useParams } from "react-router-dom";

//https://stackoverflow.com/questions/58548767/react-router-dom-useparams-inside-class-component
function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class Card extends React.Component {

    state = { user: ''}

    componentDidMount() {
        console.log(this.props); //works, cool! {params: {user:123}}
        //const params = useParams() -> not allowed
        let username = this.props.params.user
        console.log(username)
        this.setState({ user: username})
    }
    render() {
        const {user} = this.state
        return(
            <div
                className='ui raised very padded text container segment'
                style={{marginTop:'80px'}}
            >
                <h3 className='ui header'>Card { user }</h3>
            </div>
        )
    }
}

export default withParams(Card);