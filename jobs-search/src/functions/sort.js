const fsort = (data, value) =>{
    return [...data].sort((eleFirst, eleSecond)=>{
        return((value === 'Los más recientes') ? (eleFirst.postedAt < eleSecond.postedAt ? 1:-1) : (eleFirst.postedAt > eleSecond.postedAt ? 1: -1))
    })
}

export default fsort;