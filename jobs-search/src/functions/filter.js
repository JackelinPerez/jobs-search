const ffilter = (data, condition, value) =>{

    let dataNew = [];

    if(value.toLowerCase()==='todos') dataNew = data;
    else {
        switch (condition) {
            case 'Compañia':
                dataNew = data.filter(ele => {return ele.company.name.toLowerCase().indexOf(value.toLowerCase()) > -1});
                break;
            case 'Ciudad':
                dataNew = data.filter(ele => {
                    return ((ele.cities[0]!== undefined) ? 
                    (ele.cities[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1):'')})
                break;
            case 'País':
                dataNew = data.filter(ele => {
                    return ((ele.countries[0]!== undefined) ? 
                    (ele.countries[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1):'')})
                break;                
            default:
                dataNew = data;
                break;
        }
    }


    return dataNew;
}

export default ffilter;