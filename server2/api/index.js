const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const app = express()

const models = require('../models/')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//一覧表示
app.get('/', async (req, res) => {
  //console.log('hoge')
  const rows = await models.User.findAll()
  res.json(rows)
})

//新規登録
app.post('/', async (req, res) => {
  //await console.log(res)
  //await console.log(req.body)
  //await console.log(req,res)
  const rows = await models.User.create(req.body)
  res.send(true)
  //console.log(rows)
})

//閲覧
app.get('/users/:id', async (req, res) => {
  console.log("server:"+req.params.id)
  const id = parseInt(req.params.id)
  const rows = await models.User.findAll({
    where:{
      id: id
    }
  })
  res.json(rows[0])
})

//編集
app.put('/', async (req, res) => {
  models.User.update(req.body, {
    where:{id: req.body.id},
  })
  console.log(true)
})

//削除
app.delete('/', async (req, res) => {
  //console.log(req.body.id)
  await models.User.destroy({
    where: {id: req.body.id},
  })
  res.send(true)
})





export default app