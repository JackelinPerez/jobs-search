import React from 'react';
import './App.css';
import GridCards from './components/body/viewCards'
import BoxFilter from './components/body/boxFilter'
import Search from './components/body/search'
import Sort from './components/body/sort'
import Banner from './components/header/banner'
import {filters} from './utils/selectList'
import { Container, Row, Col} from 'react-bootstrap'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data:'',
      sort:'',
      filter: {
        type:'Todos',
        value:'*'
      },
      search:''
    }
  }
  getResponseSearch = (result) =>{
    this.setState({search: result})
  }

  getResponseSort = (result) =>{
    this.setState({sort: result.value})
  }

  getResponseFilter = (result) =>{
    this.setState({filter:{
      type: result.type,
      value: result.value
    }})
  }

  render(){

    return (
      <div className="App">
          <Container>
            <Row className="justify-content-md-center"><Banner></Banner></Row>
            <Row className="justify-content-md-center">
              <Col><Sort callBack={this.getResponseSort.bind(this)}></Sort></Col>
              <Col><Search callBack={this.getResponseSearch.bind(this)}></Search></Col>
            </Row>
              <BoxFilter filters={filters} callBack={this.getResponseFilter.bind(this)}></BoxFilter>
          </Container>
          <GridCards sort={this.state.sort} filter={this.state.filter} search={this.state.search}></GridCards>
      </div>
    );
  }
}

export default App;
