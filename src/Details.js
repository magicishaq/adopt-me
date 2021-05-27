import { useParams } from "react-router";
import {Component} from 'react'; 
import {withRouter} from 'react-router-dom';
import Carousel from './Carousel'

class Details extends Component {
    // constructor() {
    //     super()
    //     this.state = {loading: true}
    // }
    state = {loading: true}

    async componentDidMount () {
        const url = `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        const res = await  fetch(url);
        const json = await res.json()
        this.setState(Object.assign({loading: false}, json.pets[0]))
    }

    render() {
        console.log(this.state);

        if(this.state.loading){
            return(
                <h2>Loading...</h2>
            )
        }

        const {animal, breed, city, state, description, name, images} = this.state;

        return (
            <div className="details">
                <Carousel images={images} />  
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${city} - ${state}`}</h2>
                    <button>{name}</button>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}


export default withRouter(Details)