const router = require('koa-router')()
const Person = require('../dbs/modules/person')
const Redis = require('koa-redis')

const Store = new Redis().client // 创建一个redis的客户端实例

router.prefix('/users')

router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

router.post('/addPerson', async function (ctx) {
    const person = new Person({
        name: ctx.request.body.name,
        age: ctx.request.body.age,
    })
    let code
    try {
        await person.save()
        code = 0
    } catch (err) {
        code = -1
    }
    ctx.body = {
        code: code
    }
})

router.post('/findPerson', async function (ctx) {
    let code, result, results
    try {
        result = await Person.findOne({
            name: ctx.request.body.name
        })
        results = await Person.find({
            name: ctx.request.body.name
        })
        code = 0
    } catch (err) {
        code = -1
    }
    ctx.body = {
        code: 0,
        result,
        results
    }
})

router.post('/updatePerson', async function (ctx) {
    const result = await Person.where({
        name: ctx.request.body.name
    }).update({
        age: ctx.request.body.age
    })

    ctx.body = {
        code: 0
    }
})

router.post('/removePerson', async function (ctx) {
    const result = await Person.where({
        name: ctx.request.body.name
    }).remove()

    ctx.body = {
        code: 0
    }
})

router.get('/fix', async function (ctx) {
    // 不通过session，直接存储redis数据
    /* 在redis cli中查看变量
    * 1. keys *
    * 2. hget fix name 获取值
    * */
    const st = await Store.hset('fix', 'name', Math.random())
    ctx.body = {
        code: 0
    }
})

module.exports = router
