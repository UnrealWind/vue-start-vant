/**
 * API 接口路由全部在这里定义
 * mockjs 参考 http://mockjs.com/examples.html
 */

const express = require('express')
const mockjs = require('mockjs')

const router = express.Router()

router.post('/test/:id', function(req, res, next) {
  const paramsId = req.params.id
  const queryId = req.query.id
  console.log(paramsId, queryId)
  const data = mockjs.mock({
    'data': {
      'id': '@id',
      'nickname': '@cname()',
      'sex|1': [1, 2],
      'time': "@datetime('yyyy-MM-dd HH:mm:ss')",
      'total|10000-99999': 0,
      'name': '@ctitle(1,20)模板',
      'subjectPlans|3': [
        {
          'id': '@id',
          'name': '@word(3, 5)',
          'time': "@date('yyyy-MM-dd')",
          'type|1': ['baseInterview', 'interview', 'tempInterview', 'endingInterview', 'resultInterview',
            'questionInterview', 'scoreInterview'],
          'crfTemplateId': '@id',
          'crfTemplateName': '@cword(5,10)-CRF'
        }
      ]
    },
    'status': 'ok',
    'description': '数据请求成功'
  })
  res.json(data)
})

router.get('/test/:id', function(req, res, next) {
  const paramsId = req.params.id
  const queryId = req.query.id
  console.log(paramsId, queryId)
  const data = mockjs.mock({
    'data': {
      'id': '@id',
      'nickname': '@cname()',
      'sex|1': [1, 2],
      'time': "@datetime('yyyy-MM-dd HH:mm:ss')",
      'total|10000-99999': 0,
      'name': '@ctitle(1,20)模板',
      'subjectPlans|3': [
        {
          'id': '@id',
          'name': '@word(3, 5)',
          'time': "@date('yyyy-MM-dd')",
          'type|1': ['baseInterview', 'interview', 'tempInterview', 'endingInterview', 'resultInterview',
            'questionInterview', 'scoreInterview'],
          'crfTemplateId': '@id',
          'crfTemplateName': '@cword(5,10)-CRF'
        }
      ]
    },
    'status': 'ok',
    'description': '数据请求成功'
  })
  res.json(data)
})

module.exports = router
