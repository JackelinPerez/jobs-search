import React from 'react'
import {Form, Container, Row, Col} from 'react-bootstrap'
import Select from './select'

class BoxFilter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type: this.props.type,
            value: this.props.value
        }
    }

    handleChange(result) {
        this.setState({type: result.name, value: result.value}, () => this.props.callBack({type: this.state.type, value: this.state.value}))
    }

    render(){
        return(
            <Form >
                <Row className="justify-content-md-center">
                    {this.props.filters.map((ele, index)=> 
                    <Col key ={index}>
                        <Select  name={ele.name} options={ele.options} callBack ={this.handleChange.bind(this)} />
                    </Col>)}
                </Row>
            </Form>
        )
    }
}

export default BoxFilter;