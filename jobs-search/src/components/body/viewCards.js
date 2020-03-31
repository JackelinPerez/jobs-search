import React from 'react';
import {CardDeck} from 'react-bootstrap';
import {ApolloProvider} from '@apollo/react-hooks';
import {client, jobsQuery} from '../../bd/graphqlConfig';
import Jobs from '../../bd/graphql'


class GridCards extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        return(
            <ApolloProvider client = {client}>
                <CardDeck>
                    <Jobs query={jobsQuery} search={this.props.search} filter={this.props.filter} sort={this.props.sort}></Jobs>
                </CardDeck>
            </ApolloProvider>
        )
    }
}

export default GridCards;