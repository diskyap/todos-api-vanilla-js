import ServiceTodos from '../models/todosModel.js'
import Utils from '../utils.js'

const Todo = new ServiceTodos()
const utils = new Utils()

class TodosControllers {
  /**
   *
   * @desc    Error handling
   */
  errorMessage = (req, res) => {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(
      JSON.stringify({
        code: res.statusCode,
        status: res.statusMessage
      })
    )
  }

  /**
   *
   * @desc    Get All Todolist
   * @route   GET /api/todos
   */
  getTodos = async (req, res) => {
    try {
      const todos = await Todo.findAll()

      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(
        JSON.stringify({
          code: 200,
          status: 'OK',
          data: [...todos],
          total: todos.length
        })
      )
    } catch (error) {
      console.log(error)
    }
  }

  /**
   *
   * @desc    Get Todolist By Id
   * @route   GET /api/todos/:id
   */
  getTodo = async (req, res, id) => {
    try {
      const todo = await Todo.findById(id)
      const todos = await Todo.findAll()

      if (!todo) {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(
          JSON.stringify({
            code: 404,
            status: 'Not Found',
            data: []
          })
        )
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(
          JSON.stringify({
            code: 200,
            status: 'OK',
            data: [todo],
            total: 1,
            skip: todos.length - 1
          })
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  /**
   *
   * @desc    add Todolist
   * @route   POST /api/todos
   */
  createTodos = async (req, res) => {
    try {
      const body = await utils.getPostData(req)

      const { title, description, completed } = JSON.parse(body)

      const todo = {
        title,
        description,
        completed
      }

      const newTodos = await Todo.create(todo)

      res.writeHead(201, { 'Content-Type': 'application/json' })
      return res.end(
        JSON.stringify({
          code: 201,
          status: 'Created',
          data: newTodos,
          total: 1
        })
      )
    } catch (error) {
      console.log(error)
    }
  }

  /**
   *
   * @desc    update Todolist
   * @route   PUT /api/todos/:id
   */
  updateTodo = async (req, res, id) => {
    try {
      const todo = await Todo.findById(id)

      if (!todo) {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: res.statusMessage }))
      } else {
        const body = await utils.getPostData(req)

        const { title, description, completed } = JSON.parse(body)
        const date = new Date().toString()
        const todoData = {
          title: title || todo.title,
          description: description || todo.description,
          completed: completed || todo.completed,
          updateAt: date
        }

        const updateTodo = await Todo.update(id, todoData)

        res.writeHead(200, { 'Content-Type': 'application/json' })
        return res.end(
          JSON.stringify({
            code: 202,
            status: 'OK',
            data: updateTodo,
            total: 1
          })
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * TODO:    Create delete todo controller
   * @desc    delete Todolist
   * @route   DELETE /api/todos/:id
   */
  deleteTodo = async (req, res, id) => {
    try {
      const todo = await Todo.findById(id)

      if (!todo) {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Todo Not Found' }))
      } else {
        await Todo.remove(id)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(
          JSON.stringify({
            code: 200,
            status: 'OK',
            message: `todos succes removed`,
            data: [`id: ${todo.id}`]
          })
        )
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default TodosControllers
