import React from 'react';
import {Form, Button} from 'react-bootstrap'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    getInput(){
        this.props.callBack(this.state.value);
    }

    render(){
        return(
            <Form inline className="justify-content-md-center">
                <Form.Group>
                    <Form.Control type="" placeholder="Buscar" onChange={this.handleChange.bind(this)}></Form.Control>
                </Form.Group>
                <Button variant="info" onClick={()=>this.getInput()}>Buscar</Button>
            </Form>
        )
    }
}

export default Search;