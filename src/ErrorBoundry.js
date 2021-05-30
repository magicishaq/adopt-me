import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'


class ErrorBoundry extends Component{
    state = {hasError: false, redirect: false }; 

    static getDerivedStateFromError() {
        return {hasError: true}
    }

    componentDidCatch(error, info) {
        console.error("Error found", error, info )
        setTimeout(() => this.setState({redirect: true}, 5000))
  
    }
    componentDidUpdate() {
        if(this.state.hasError) {
                 }
    }

    render() {
if(this.state.redirect) {
    return <Redirect to="/" /> 
}


 if(this.state.hasError) {
return(
    <h2>
        There was an error with this listing. <Link to="/"> Click Here </Link> to go back to homepage or wait 5 seconds
    </h2>
)
        }
        return this.props.children
    }

    
}

export default ErrorBoundry