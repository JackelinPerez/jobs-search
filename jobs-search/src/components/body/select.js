import React from 'react'
import {Form} from 'react-bootstrap'

const Options = (props) =>{
    return props.options.map((ele, index)=>
        <option value={ele} key={index}>{ele}</option>)
}

class Select extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            options: this.props.options,
            value: 0
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value}, () => this.props.callBack({name: this.state.name, value: this.state.value}))
    }

    render() {
        return(
                <Form.Group inline = "true" className="justify-content-md-center">
                    <Form.Label>{this.state.name}</Form.Label>
                    <Form.Control as="select" onChange={this.handleChange.bind(this)} custom>
                        <Options options={this.state.options}></Options>
                    </Form.Control>
                </Form.Group>
        )
    }
}

export default Select;