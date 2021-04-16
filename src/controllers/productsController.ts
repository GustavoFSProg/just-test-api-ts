import actProductModel from '../models/productModel'
import { Response, Request } from 'express'

async function create(req: Request, res: Response) {
  try {
    await actProductModel.create({
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
    })

    return res.status(201).send({ message: 'produto cadastrado com sucesso!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function getAll(req: Request, res: Response) {
  try {
    const data = await actProductModel.find()

    return res.status(201).send(data)
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function update(req: Request, res: Response) {
  try {
    await actProductModel.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
      },
    })

    return res.status(200).send({ msg: 'Tudo Editado!!!' })
  } catch (error) {
    return res.status(400).send({ msg: 'Tudo ERRADO!' })
  }
}

async function deleteOne(req: Request, res: Response) {
  try {
    await actProductModel.findByIdAndRemove(req.params.id)

    return res.status(201).send({ msg: 'Produto Removido!!' })
  } catch (error) {
    return res.status(201).send({ msg: 'ERRO!!' })
  }
}

export default { create, getAll, update, deleteOne }
