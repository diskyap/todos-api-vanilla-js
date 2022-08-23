import { v4 as uuidv4 } from 'uuid'
import Utils from '../utils.js'
import todos from '../data/todos.json' assert { type: 'json' }

const utils = new Utils()

class ServiceTodos {
  findAll = () => {
    return new Promise((resolve, reject) => {
      resolve(todos)
    })
  }

  findById = (id) => {
    return new Promise((resolve, reject) => {
      const todo = todos.find((t) => t.id === id)
      resolve(todo)
    })
  }

  create = (todo) => {
    return new Promise((resolve, reject) => {
      const date = new Date().toLocaleString()
      const newTodos = {
        id: uuidv4(),
        title: todo.title || '',
        description: todo.description || '',
        completed: todo.completed || false,
        createdAt: date
      }
      todos.push(newTodos)
      utils.writeFile('./data/todos.json', todos)
      resolve(newTodos)
    })
  }

  update = (id, todo) => {
    return new Promise((resolve, reject) => {
      const index = todos.findIndex((t) => t.id === id)
      todos[index] = {
        id,
        title: todo.title || '',
        description: todo.description || '',
        completed: todo.completed || false,
        updateAt: new Date().toLocaleString()
      }
      utils.writeFile('./data/todos.json', todos)
      resolve(todos[index])
    })
  }

  remove = (id) => {
    return new Promise((resolve, reject) => {
      id = todos.find((t) => t.id === id)
      todos.splice(id, 1)
      utils.writeFile('./data/todos.json', todos)
      resolve()
    })
  }
}

export default ServiceTodos
