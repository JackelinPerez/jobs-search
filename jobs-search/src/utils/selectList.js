import {jobs} from './list'

const onlyUnique = (value, index, self) => { 
  return self.indexOf(value) === index;
}

const getArray = (array, type , key) =>{
  return (array.map(ele => ele[type][key])).filter( onlyUnique )
}

const getArrayArray = (array, type , key) =>{
  return (array.map(ele => {
    return (ele[type][0]!==undefined)?(ele[type][0][key]):'N.A'})).filter( onlyUnique )
}

export const filters = [
    {
      name: 'País',
      options: ['Todos', ...getArrayArray(jobs, 'countries', 'name')]
    },
    {
      name: 'Ciudad',
      options: ['Todos', ...getArrayArray(jobs,'cities','name')]
    },
    {
      name: 'Compañia',
      options: ['Todos', ...getArray(jobs,'company','name')]
    }
]