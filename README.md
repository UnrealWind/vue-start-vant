### 基于 vue + vant

#### 前言
因为要与小程序保持一致，所以选择了vant （https://youzan.github.io/vant/#/zh-CN/），基本也够用了

#### 目录说明
1. src/assets  静态资源文件
2. components  与angular保持一致，components为非模板型组件<br>
   1). http  拦截器，基于axios<br>
   2). socket  websocket 没啥大用唯一的用处就是走的统一配置<br>
   3). uninit  作为webview内嵌于app中时，可以调用uni部分api实现跳转<br>
   4). upload  文件上传<br>
   5). wxinit  调用wxjssdk<br>

3. config  除打包外的所有配置
4. directive  angular 思想，directive为含模板组件，内含最基本的container组件
5. filters  部分常用filter
6. plugin  项目初始化时自动加载的插件，目前只含有鉴权（ 该鉴权包含了页面切换效果，routehistory，以及各种权限限制页面的进入 ）
7. router  路由 ( 这里集成了路由自动注册，如/page/index.vue 路由自动注册为 /#/index 这样子开发者即使对vue一无所知也不用关心路由相关的知识，简化学习以及开发成本，虽然只减少了一点)
8. store  store
9. pages  页面（ 页面新建完成后会进行自动注册 ）
10. test-services   基于express+mockjs 本地测试服务器，接口文档有之后可以脱离后台进行开发，开发规范也很倾向于适配器模式，就算接口变动适配器能够解决大部分问题
11. vue.config.js   单拿出来说的原因，一个这里是能够进行自动注册的基础，同时集成了cdn，减少了部分服务器资源消耗

### 开发规范

1. eslint
2. 不允许使用 var function 使用 let，const 以及箭头函数代替

3. 每个页面初始化进行数据获取，请采用这种方式，结合 container 组件使用，获取到数据之后在对应的方法下进行数据处理即可<br>

```
   async init() {
         try {
           // await this.getUserInfo()
         } catch (e) {
           this.status = 'error'
           throw e
         }
         this.status = 'success'
       },
```

4. ide强烈推荐vscode 和 webstorm


###  运行
npm run dev  配置使用.env.development 中的配置，对应本地生产环境<br>
npm run test  配置使用.env.test 中的配置，对应测试环境<br>
npm run build  配置使用.env.production 中的配置，对应线上环境<br>

做这个的目的是，如果条件允许，可以直接通过git进行自动部署，节省了git，项目部署的学习成本以及时间成本

#### question

Q: 为什么使用vant？<br>
A:因为要与小程序保持一致，所以选择了vant （https://youzan.github.io/vant/#/zh-CN/），基本也够用了

Q: 为什么使用 eslint？<br>
A: eslint 能够大部分解决代码不规范的问题，一定程度上能够将解决代码风格的问题

Q:为什么要使用 let const 箭头函数<br>
A:为了解决作用域，this 绑定，原有的 var 以及 function 过于混乱,搞清楚了复杂的 js 静态作用域以及 this 在各种不同情况下的绑定问题对业务代码的开发帮助不大（当然面试很有用）

Q:为什么要使用 init 函数<br>
A:

1. 从 mvvm 框架大火之后，前端从 js 操作 dom 变化为 js 操作数据，前端的大部分工作都在数据处理中，大部分页面都需要获取数据，对数据进行处理，统一 init 书写方式能够最大程度统一每个人的开发风格。
2. 获取数据之后不可避免的数据处理，这个与业务或者接口有关，在统一的管理之下与 container 组件能够有效的统一的定义当前页面的状态
3. 不推荐集中管理 api 方式书写代码，没有节省任何代码，业务代码在自己的页面存在非常合理
4. 接口变动或者各种不可抗力造成数据变动，无需改动其他代码，直接在代码后书写适配器即可
5. async await 很大程度上解决了异步同步，代码执行顺序的问题



ToDo :
1. route history 未完成

后记： 这个架构一切的一切都是为了尽可能能够以最少的成本规范前端的开发以及减少学习成本，个人会不断地完善该架构
