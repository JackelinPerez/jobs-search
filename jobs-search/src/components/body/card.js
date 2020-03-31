import React from 'react';
import {Card, Button, Modal, Container,Row,Col} from 'react-bootstrap'
import job from '../../img/jobs.jpg';

class CardModel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            show: false
        }
    }

    openModal(){
        return this.setState({show: true})
    }

    close(){
        return this.setState({show: false})
    }

    render(){
        return(
            <div>
            <Card style={{ width: '18rem'}}>
                <Card.Img alt="logo" src={job} />
                <Card.Body> 
                <Card.Title>
                Card N° {this.state.id} <br/>
                <strong>{this.props.title}</strong>
                </Card.Title>
                <Card.Text>
                Compañia: <strong>{this.props.company}</strong><br/>
                Localidad: <strong>{this.props.locationName}</strong><br/>
                Ciudad: <strong>{this.props.citie}</strong><br/>
                País: <strong>{this.props.countrie}</strong><br/>
                Publicación <br/>
                Fecha: {this.props.postdate}, 
                Hora: {this.props.posthour}
                </Card.Text>
                <Button id={this.props.id} variant="warning" onClick={()=>this.openModal()}>Ver más</Button>

                <Modal
                show={this.state.show}
                id={this.state.id}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"                
                onHide={()=>this.close()}>
                    <Modal.Header closeButton>
                        <Modal.Title><strong>{this.props.title}</strong></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            {/* <Row>
                                <Col>{this.props.description}</Col>
                            </Row>
                            <Row>
                                <Col><strong>Aptitudes:</strong></Col>
                                {this.props.tags.map((ele, index)=><Col key={index}>*{ele}</Col>)}}
                            </Row> */}
                            <p>{this.props.description}</p>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="info" onClick={()=>this.close()}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>

                </Card.Body>
            </Card>
            </div>
        )
    }
}

export default CardModel;