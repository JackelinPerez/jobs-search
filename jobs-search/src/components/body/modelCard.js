import React from 'react';
import {Card, Button} from 'react-bootstrap'
import job from '../../img/jobs.jpg';

class ModelCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id
        }
    }

    render(){
        return(
            <div>
            <Card style={{ width: '18rem'}}>
                <Card.Img alt="logo" src={job} />
                <Card.Body> 
                <Card.Title>
                Card N° {this.state.id} <br/>
                <strong>{this.props.job}</strong>
                </Card.Title>
                <Card.Text>
                Compañia: <strong>{this.props.company}</strong><br/>
                Localidad: <strong>{this.props.locationName}</strong><br/>
                Ciudad: <strong>{this.props.citie}</strong><br/>
                País: <strong>{this.props.countrie}</strong><br/>
                Publicación <br/>
                Fecha: {this.props.postdate} , 
                Hora: {this.props.posthour}
                </Card.Text>
                <Button variant="warning">Ver más</Button>
                </Card.Body>
            </Card>
            </div>
        )
    }
}

export default ModelCard;