import Router from 'express'
import productsController from './controllers/productsController'

const route = Router()

route.get('/', productsController.getAll)
route.post('/register', productsController.create)
route.put('/update/:id', productsController.update)
route.delete('/del/:id', productsController.deleteOne)

export default route
