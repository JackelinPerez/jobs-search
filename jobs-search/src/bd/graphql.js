import React, {useState, useMemo} from 'react'
import {useQuery} from '@apollo/react-hooks'
import CardModel from '../components/body/card'
import {Alert, Spinner} from 'react-bootstrap'
import fsort from '../functions/sort'
import ffilter from '../functions/filter'
import fsearch from '../functions/search'

const Jobs = (props) => {
    const { loading, error, data } = useQuery(props.query);
    const [newBd, setNewBd] = useState([]);
    const [bd, setBd] = useState([]);

    useMemo(() => {
        setBd({...data}.jobs);
        setNewBd({...data}.jobs);
    }, [data]);

    //Cambio en sort
    useMemo(() => {
        setNewBd(fsort(newBd, props.sort))
    }, [props.sort]);

    //Cambio en filter
    useMemo(() => { 
        setNewBd(ffilter(bd, props.filter.type, props.filter.value))
    }, [props.filter]);

    //Cambio en search
    useMemo(() => {
        setNewBd(fsearch(bd, props.search));
    }, [props.search]);
    
    
    if (loading) return <div className="container"><div className="abs-center"><Spinner animation="border" /><strong> Cargando ... </strong></div></div>;
    if (error) return <div className="container"><div className="abs-center"><Alert variant="danger">No pudo cargar, lo sentimos :(</Alert></div></div>;

    return newBd.map((job, id) => {
        const postdate = job.postedAt.slice(0,job.postedAt.indexOf('T'));
        const posthour = job.postedAt.slice(job.postedAt.indexOf('T')+1, job.postedAt.length - 5);
        return(<CardModel 
            key={id} id={id}
            title={job.title}
            company={job.company.name}
            locationName={job.locationNames}
            citie={(job.cities[0]!==undefined)?job.cities[0].name:''}
            countrie={(job.countries[0]!==undefined)?job.countries[0].name:''}
            postdate={postdate}
            posthour={posthour}
            description={job.description}
            tags={['angular','java','python']}
            >
            </CardModel>)
    });
}

export default Jobs;
