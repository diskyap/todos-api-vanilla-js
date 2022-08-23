import http from 'http'
import TodosControllers from './controllers/todosController.js'

const controllers = new TodosControllers()

const server = http.createServer((req, res) => {
  if (req.url === '/api/todos' && req.method === 'GET') {
    controllers.getTodos(req, res)
  } else if (req.url.match(/\/api\/todos\/\w+/) && req.method === 'GET') {
    const id = req.url.split('/')[3]
    controllers.getTodo(req, res, id)
  } else if (req.url === '/api/todos' && req.method === 'POST') {
    controllers.createTodos(req, res)
  } else if (req.url.match(/\/api\/todos\/\w+/) && req.method === 'PUT') {
    const id = req.url.split('/')[3]
    controllers.updateTodo(req, res, id)
  } else if (req.url.match(/\/api\/todos\/\w+/) && req.method === 'DELETE') {
    const id = req.url.split('/')[3]
    controllers.deleteTodo(req, res, id)
  } else {
    controllers.errorMessage(req, res)
  }
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
