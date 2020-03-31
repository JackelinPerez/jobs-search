import React from 'react';
import Select from './select';

class Sort extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }

    getResponseSelect(result){
        this.setState(
            {value: result.value},
            () => this.props.callBack(this.state.value)            
            )
    }

    render(){
        return(
            <div>
                <Select name="" options={['Los más recientes','Los más antiguos']} callBack = {this.getResponseSelect.bind(this)}></Select>
            </div>
        )
    }
}

export default Sort;