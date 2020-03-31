const fsearch = (data, value) =>{
    return data.filter(ele => ele.title.toLowerCase().indexOf(value.toLowerCase())>-1)
}

export default fsearch