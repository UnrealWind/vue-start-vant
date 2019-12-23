/**
 * API 接口路由全部在这里定义
 */

const express = require('express')
const mockjs = require('mockjs')

var router = express.Router()

router.get('/wechat/oauth2/get/user', function(req, res, next) {
  var data = mockjs.mock({
    'data': {
      'id': 7,
      'subscribe': null,
      'openId': 'oXL5M1pApcenxiH9gluvrjTTTB2A',
      'nickname': 'Schrodinger',
      'sex': 1,
      'language': 'zh_CN',
      'city': '石家庄',
      'province': '河北',
      'country': '中国',
      'headImgUrl': 'http://thirdwx.qlogo.cn/mmopen/vi_32/icibHCyZDte5IY7HEic2q0N6HQRh5kVJtXkjYtYOn7gmiaD12ZEIObBbkO82hhHLR4Iq889oiajGHAD07raM3xJfxRQ/132',
      'subscribeTime': null,
      'unionId': null,
      'remark': null,
      'groupId': null,
      'subscribeScene': null,
      'qrScene': null,
      'qrSceneStr': null
    },
    'status': 'ok',
    'description': '数据请求成功'
  })
  res.json(data)
})

module.exports = router
