<template>
  <view>
    <!-- 顶部导航栏 -->
    <view class="header home-header">
      <!-- 左侧按钮 -->
      <view class="menu-btn">
        <!-- <image src="../../static/img/icon-menu.png" mode=""></image> -->
      </view>
      <!-- logo -->
      <view class="logo">
        <image src="../../static/img/logo2.jpg" mode=""></image>
      </view>
      <!-- 右侧图标按钮 -->
      <view class="icon-btn">
        <view class="cart-btn" @tap="toshopcart(shopcart)">
          <image src="../../static/img/icon-cart.png" mode=""></image>
        </view>
      </view>
    </view>
    <!-- 消息 -->
    <view class="content" @touchstart="hideEmoji">
      <scroll-view
        class="msg-list"
        scroll-y="true"
        :scroll-with-animation="scrollAnimation"
        :scroll-top="scrollTop"
        :scroll-into-view="scrollToView"
      >

        <view v-for="(row,index) in msgList" :id="'msg'+row.id" :key="index" class="row">
          <view v-if="row.align == 'center'" class="system">
            {{ row.msg.content }}
          </view>
          <!-- 自己发出的消息 -->
          <view v-if="row.align == 'right'" class="my">
            <view class="left">
              <view v-if="row.type=='text'" class="bubble">
                <rich-text :nodes="row.msg.content"></rich-text>
              </view>
              <view v-if="row.type=='voice'" class="bubble voice" :class="playMsgid == row.id?'play':''" @tap="playVoice(row)">
                <view class="length">{{ row.msg.length }}</view>
                <view class="icon my-voice"></view>
              </view>
              <view v-if="row.type=='img'" class="bubble img" @tap="showPic(row)">
                <!-- <image :src="row.msg.content" :style="{'width': row.msg.w+'px','height': row.msg.h+'px'}"></image> -->
                <image :src="row.msg.content" :style="{'width': '1920px','height': '1080px'}"></image>
              </view>
            </view>
            <view class="right">
              <image :src="thisUserEntity.attr.userHeadimg"></image>
            </view>
          </view>
          <!-- 别人发出的消息 -->
          <view v-if="row.align == 'left'" class="other">
            <view class="left">
              <image :src="otherUserEntity.attr.userHeadimg"></image>
            </view>
            <view class="right">
              <view class="username">
                <view class="name">{{ otherUserEntity.attr.nickName }}</view>
                <view class="time">{{ row.time }}</view>
              </view>
              <view v-if="row.type=='text'" class="bubble">
                <rich-text :nodes="row.msg.content"></rich-text>
              </view>
              <view v-if="row.type=='voice'" class="bubble voice" :class="playMsgid == row.id?'play':''" @tap="playVoice(row)">
                <view class="icon other-voice"></view>
                <view class="length">{{ row.msg.length }}</view>
              </view>
              <view v-if="row.type=='img'" class="bubble img" @tap="showPic(row)">
                <!-- <image :src="row.msg.content" :style="{'width': row.msg.w+'px','height': row.msg.h+'px'}"></image> -->
                <image :src="row.msg.content" :style="{'width': '1920px','height': '1080px'}"></image>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
    <!-- 表情栏 -->
    <view class="emoji-box" :class="showEmji" @touchmove.stop.prevent="discard">
      <div class="shoe_emoji-ul fix">
        <div class="li" @tap="chooseImage(1,0)">
          <image src="../../static/img/tabBar/photo.png" mode=""></image>
          访问照片
        </div>
        <div class="li" @tap="chooseImage(1,1)">
          <image src="../../static/img/tabBar/photo2.png" mode=""></image>
          拍照
        </div>
        <div class="li">
          <image src="../../static/img/tabBar/photo3.png" mode=""></image>
          上传文件
          <div class="upload">
            <view ref="input" class="input"></view>
          </div>
        </div>
      </div>
    </view>
    <!-- 底部输入栏 -->
    <view class="input-box" :class="showEmji" @touchmove.stop.prevent="discard">
      <!-- H5下不能录音，输入栏布局改动一下 -->
      <!-- #ifndef H5 -->
      <view class="voice">
        <view class="icon" :class="isVoice?'jianpan':'yuyin'" @tap="switchVoice"></view>
      </view>
      <!-- #endif -->
      <!-- #ifdef H5 -->
      <view class="more">
        <img src="../../static/img/tabBar/add.png" alt="" @tap="chooseEmoji">
        <!-- <view class="icon tupian"></view> -->
      </view>
      <!-- #endif -->
      <view class="textbox">
        <view
          class="voice-mode"
          :class="[isVoice?'':'hidden',recording?'recording':'']"
          @touchstart="voiceBegin"
          @touchmove.stop.prevent="voiceIng"
          @touchend="voiceEnd"
          @touchcancel="voiceCancel"
        >{{ voiceTis }}</view>
        <view class="text-mode" :class="isVoice?'hidden':''">
          <view class="box">
            <textarea id="textMsg" v-model="textMsg" auto-height="true" placeholder="请输入您的信息" />
          </view>
          <!-- <view class="em" >
            <view class="icon biaoqing"></view>
          </view> -->
        </view>
      </view>
      <!-- #ifndef H5 -->
      <view class="more">
        <view class="icon tupian"></view>
      </view>
      <!-- #endif -->
      <label for="textMsg">
        <view class="send" :class="isVoice?'hidden':''" @tap="sendText">
          <view class="btn">
            <img src="../../static/img/tabBar/send.png" alt="">
          </view>
        </view>
      </label>
    </view>
    <!-- 录音效果(上滑取消) -->
    <view class="record" :class="recording?'':'hidden'">
      <view class="ing" :class="willStop?'hidden':''"><view class="icon luyin2"></view></view>
      <view class="cancel" :class="willStop?'':'hidden'"><view class="icon chehui"></view></view>
      <view class="tis" :class="willStop?'change':''">{{ recordTis }}</view>
    </view>
  </view>
</template>

<script>

    export default {
        data() {
            return {
                socketOpen: false,
                // 文字消息
                textMsg: '',
                // 消息列表
                scrollAnimation: false,
                scrollTop: 0,
                scrollToView: '',
                msgList: [],
                msgImgList: [],
                myuid: 0,
                systemuid: 1,
                theiruid: 2,
                // 录音相关参数
                // #ifndef H5
                // H5不能录音
                RECORDER: uni.getRecorderManager(),
                // #endif
                isVoice: false,
                voiceTis: '按住 说话',
                recordTis: '手指上滑 取消发送',
                recording: false,
                willStop: false,
                initPoint: { identifier: 0, Y: 0 },
                recordTimer: null,
                recordLength: 0,
                // 播放语音相关参数
                AUDIO: uni.createInnerAudioContext(),
                playMsgid: null,
                VoiceTimer: null,
                // 是否显示抽屉菜单
                showMenu: false,
                // 表情定义
                showEmji: '',
                otherUserEntity: {
                    'attr': {
                        'headImg': '/static/img/face.jpg',
                        'nickName': 'NumberOne'
                    },
                    'intOsType': 0,
                    'intType': 1,
                    'online': true,
                    'osType': 0,
                    'userCode': '1',
                    'userType': 1
                },
                thisUserEntity: {
                    'attr': {
                        'headImg': '/static/img/face.jpg',
                        'nickName': 'gss'
                    },
                    'intOsType': 0,
                    'intType': 1,
                    'online': true,
                    'osType': 0,
                    'userCode': '1',
                    'userType': 1
                },
                emojiList: [
                    [{ 'url': '100.gif', alt: '[微笑]' }, { 'url': '101.gif', alt: '[伤心]' }, { 'url': '102.gif', alt: '[美女]' }, { 'url': '103.gif', alt: '[发呆]' }, { 'url': '104.gif', alt: '[墨镜]' }, { 'url': '105.gif', alt: '[哭]' }, { 'url': '106.gif', alt: '[羞]' }, { 'url': '107.gif', alt: '[哑]' }, { 'url': '108.gif', alt: '[睡]' }, { 'url': '109.gif', alt: '[哭]' }, { 'url': '110.gif', alt: '[囧]' }, { 'url': '111.gif', alt: '[怒]' }, { 'url': '112.gif', alt: '[调皮]' }, { 'url': '113.gif', alt: '[笑]' }, { 'url': '114.gif', alt: '[惊讶]' }, { 'url': '115.gif', alt: '[难过]' }, { 'url': '116.gif', alt: '[酷]' }, { 'url': '117.gif', alt: '[汗]' }, { 'url': '118.gif', alt: '[抓狂]' }, { 'url': '119.gif', alt: '[吐]' }, { 'url': '120.gif', alt: '[笑]' }, { 'url': '121.gif', alt: '[快乐]' }, { 'url': '122.gif', alt: '[奇]' }, { 'url': '123.gif', alt: '[傲]' }],
                    [{ 'url': '124.gif', alt: '[饿]' }, { 'url': '125.gif', alt: '[累]' }, { 'url': '126.gif', alt: '[吓]' }, { 'url': '127.gif', alt: '[汗]' }, { 'url': '128.gif', alt: '[高兴]' }, { 'url': '129.gif', alt: '[闲]' }, { 'url': '130.gif', alt: '[努力]' }, { 'url': '131.gif', alt: '[骂]' }, { 'url': '132.gif', alt: '[疑问]' }, { 'url': '133.gif', alt: '[秘密]' }, { 'url': '134.gif', alt: '[乱]' }, { 'url': '135.gif', alt: '[疯]' }, { 'url': '136.gif', alt: '[哀]' }, { 'url': '137.gif', alt: '[鬼]' }, { 'url': '138.gif', alt: '[打击]' }, { 'url': '139.gif', alt: '[bye]' }, { 'url': '140.gif', alt: '[汗]' }, { 'url': '141.gif', alt: '[抠]' }, { 'url': '142.gif', alt: '[鼓掌]' }, { 'url': '143.gif', alt: '[糟糕]' }, { 'url': '144.gif', alt: '[恶搞]' }, { 'url': '145.gif', alt: '[什么]' }, { 'url': '146.gif', alt: '[什么]' }, { 'url': '147.gif', alt: '[累]' }],
                    [{ 'url': '148.gif', alt: '[看]' }, { 'url': '149.gif', alt: '[难过]' }, { 'url': '150.gif', alt: '[难过]' }, { 'url': '151.gif', alt: '[坏]' }, { 'url': '152.gif', alt: '[亲]' }, { 'url': '153.gif', alt: '[吓]' }, { 'url': '154.gif', alt: '[可怜]' }, { 'url': '155.gif', alt: '[刀]' }, { 'url': '156.gif', alt: '[水果]' }, { 'url': '157.gif', alt: '[酒]' }, { 'url': '158.gif', alt: '[篮球]' }, { 'url': '159.gif', alt: '[乒乓]' }, { 'url': '160.gif', alt: '[咖啡]' }, { 'url': '161.gif', alt: '[美食]' }, { 'url': '162.gif', alt: '[动物]' }, { 'url': '163.gif', alt: '[鲜花]' }, { 'url': '164.gif', alt: '[枯]' }, { 'url': '165.gif', alt: '[唇]' }, { 'url': '166.gif', alt: '[爱]' }, { 'url': '167.gif', alt: '[分手]' }, { 'url': '168.gif', alt: '[生日]' }, { 'url': '169.gif', alt: '[电]' }, { 'url': '170.gif', alt: '[炸弹]' }, { 'url': '171.gif', alt: '[刀子]' }],
                    [{ 'url': '172.gif', alt: '[足球]' }, { 'url': '173.gif', alt: '[瓢虫]' }, { 'url': '174.gif', alt: '[翔]' }, { 'url': '175.gif', alt: '[月亮]' }, { 'url': '176.gif', alt: '[太阳]' }, { 'url': '177.gif', alt: '[礼物]' }, { 'url': '178.gif', alt: '[抱抱]' }, { 'url': '179.gif', alt: '[拇指]' }, { 'url': '180.gif', alt: '[贬低]' }, { 'url': '181.gif', alt: '[握手]' }, { 'url': '182.gif', alt: '[剪刀手]' }, { 'url': '183.gif', alt: '[抱拳]' }, { 'url': '184.gif', alt: '[勾引]' }, { 'url': '185.gif', alt: '[拳头]' }, { 'url': '186.gif', alt: '[小拇指]' }, { 'url': '187.gif', alt: '[拇指八]' }, { 'url': '188.gif', alt: '[食指]' }, { 'url': '189.gif', alt: '[ok]' }, { 'url': '190.gif', alt: '[情侣]' }, { 'url': '191.gif', alt: '[爱心]' }, { 'url': '192.gif', alt: '[蹦哒]' }, { 'url': '193.gif', alt: '[颤抖]' }, { 'url': '194.gif', alt: '[怄气]' }, { 'url': '195.gif', alt: '[跳舞]' }],
                    [{ 'url': '196.gif', alt: '[发呆]' }, { 'url': '197.gif', alt: '[背着]' }, { 'url': '198.gif', alt: '[伸手]' }, { 'url': '199.gif', alt: '[耍帅]' }, { 'url': '200.png', alt: '[微笑]' }, { 'url': '201.png', alt: '[生病]' }, { 'url': '202.png', alt: '[哭泣]' }, { 'url': '203.png', alt: '[吐舌]' }, { 'url': '204.png', alt: '[迷糊]' }, { 'url': '205.png', alt: '[瞪眼]' }, { 'url': '206.png', alt: '[恐怖]' }, { 'url': '207.png', alt: '[忧愁]' }, { 'url': '208.png', alt: '[眨眉]' }, { 'url': '209.png', alt: '[闭眼]' }, { 'url': '210.png', alt: '[鄙视]' }, { 'url': '211.png', alt: '[阴暗]' }, { 'url': '212.png', alt: '[小鬼]' }, { 'url': '213.png', alt: '[礼物]' }, { 'url': '214.png', alt: '[拜佛]' }, { 'url': '215.png', alt: '[力量]' }, { 'url': '216.png', alt: '[金钱]' }, { 'url': '217.png', alt: '[蛋糕]' }, { 'url': '218.png', alt: '[彩带]' }, { 'url': '219.png', alt: '[礼物]' }]
                ],
                // 表情图片图床名称
                onlineEmoji: { '100.gif': 'AbNQgA.gif', '101.gif': 'AbN3ut.gif', '102.gif': 'AbNM3d.gif', '103.gif': 'AbN8DP.gif', '104.gif': 'AbNljI.gif', '105.gif': 'AbNtUS.gif', '106.gif': 'AbNGHf.gif', '107.gif': 'AbNYE8.gif', '108.gif': 'AbNaCQ.gif', '109.gif': 'AbNN4g.gif', '110.gif': 'AbN0vn.gif', '111.gif': 'AbNd3j.gif', '112.gif': 'AbNsbV.gif', '113.gif': 'AbNwgs.gif', '114.gif': 'AbNrD0.gif', '115.gif': 'AbNDuq.gif', '116.gif': 'AbNg5F.gif', '117.gif': 'AbN6ET.gif', '118.gif': 'AbNcUU.gif', '119.gif': 'AbNRC4.gif', '120.gif': 'AbNhvR.gif', '121.gif': 'AbNf29.gif', '122.gif': 'AbNW8J.gif', '123.gif': 'AbNob6.gif', '124.gif': 'AbN5K1.gif', '125.gif': 'AbNHUO.gif', '126.gif': 'AbNIDx.gif', '127.gif': 'AbN7VK.gif', '128.gif': 'AbNb5D.gif', '129.gif': 'AbNX2d.gif', '130.gif': 'AbNLPe.gif', '131.gif': 'AbNjxA.gif', '132.gif': 'AbNO8H.gif', '133.gif': 'AbNxKI.gif', '134.gif': 'AbNzrt.gif', '135.gif': 'AbU9Vf.gif', '136.gif': 'AbUSqP.gif', '137.gif': 'AbUCa8.gif', '138.gif': 'AbUkGQ.gif', '139.gif': 'AbUFPg.gif', '140.gif': 'AbUPIS.gif', '141.gif': 'AbUZMn.gif', '142.gif': 'AbUExs.gif', '143.gif': 'AbUA2j.gif', '144.gif': 'AbUMIU.gif', '145.gif': 'AbUerq.gif', '146.gif': 'AbUKaT.gif', '147.gif': 'AbUmq0.gif', '148.gif': 'AbUuZV.gif', '149.gif': 'AbUliF.gif', '150.gif': 'AbU1G4.gif', '151.gif': 'AbU8z9.gif', '152.gif': 'AbU3RJ.gif', '153.gif': 'AbUYs1.gif', '154.gif': 'AbUJMR.gif', '155.gif': 'AbUadK.gif', '156.gif': 'AbUtqx.gif', '157.gif': 'AbUUZ6.gif', '158.gif': 'AbUBJe.gif', '159.gif': 'AbUdIO.gif', '160.gif': 'AbU0iD.gif', '161.gif': 'AbUrzd.gif', '162.gif': 'AbUDRH.gif', '163.gif': 'AbUyQA.gif', '164.gif': 'AbUWo8.gif', '165.gif': 'AbU6sI.gif', '166.gif': 'AbU2eP.gif', '167.gif': 'AbUcLt.gif', '168.gif': 'AbU4Jg.gif', '169.gif': 'AbURdf.gif', '170.gif': 'AbUhFS.gif', '171.gif': 'AbU5WQ.gif', '172.gif': 'AbULwV.gif', '173.gif': 'AbUIzj.gif', '174.gif': 'AbUTQs.gif', '175.gif': 'AbU7yn.gif', '176.gif': 'AbUqe0.gif', '177.gif': 'AbUHLq.gif', '178.gif': 'AbUOoT.gif', '179.gif': 'AbUvYF.gif', '180.gif': 'AbUjFU.gif', '181.gif': 'AbaSSJ.gif', '182.gif': 'AbUxW4.gif', '183.gif': 'AbaCO1.gif', '184.gif': 'Abapl9.gif', '185.gif': 'Aba9yR.gif', '186.gif': 'AbaFw6.gif', '187.gif': 'Abaiex.gif', '188.gif': 'AbakTK.gif', '189.gif': 'AbaZfe.png', '190.gif': 'AbaEFO.gif', '191.gif': 'AbaVYD.gif', '192.gif': 'AbamSH.gif', '193.gif': 'AbaKOI.gif', '194.gif': 'Abanld.gif', '195.gif': 'Abau6A.gif', '196.gif': 'AbaQmt.gif', '197.gif': 'Abal0P.gif', '198.gif': 'AbatpQ.gif', '199.gif': 'Aba1Tf.gif', '200.png': 'Aba8k8.png', '201.png': 'AbaGtS.png', '202.png': 'AbaJfg.png', '203.png': 'AbaNlj.png', '204.png': 'Abawmq.png', '205.png': 'AbaU6s.png', '206.png': 'AbaaXn.png', '207.png': 'Aba000.png', '208.png': 'AbarkT.png', '209.png': 'AbastU.png', '210.png': 'AbaB7V.png', '211.png': 'Abafn1.png', '212.png': 'Abacp4.png', '213.png': 'AbayhF.png', '214.png': 'Abag1J.png', '215.png': 'Aba2c9.png', '216.png': 'AbaRXR.png', '217.png': 'Aba476.png', '218.png': 'Abah0x.png', '219.png': 'Abdg58.png' },
                msgList: [],
                params: {
                    pageNum: 1,
                    pageSize: 10,
                    pages: 0
                }
                /* {id:0,uid:0,align:'right',username:"大黑哥",face:"/static/img/face.jpg",time:"12:56",type:"text",msg:{content:"为什么温度会相差那么大？"}},
                {id:1,uid:1,align:'left',username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:57",type:"text",msg:{content:"这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。"}},
                {id:2,uid:1,align:'left',username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:59",type:"voice",msg:{url:"/static/voice/3.aac",length:"00:06"}},
                {id:3,uid:0,align:'right',username:"大黑哥",face:"/static/img/face.jpg",time:"13:05",type:"voice",msg:{url:"/static/voice/2.mp3",length:"00:06"}},
                {id:4,uid:0,align:'right',username:"大黑哥",face:"/static/img/face.jpg",time:"13:05",type:"img",msg:{url:"/static/img/goods/p10.jpg",w:200,h:200}},
                {id:5,uid:1,align:'left',username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:59",type:"img",msg:{url:"/static/img/q.jpg",w:1920,h:1080}},
                {align:'center',type:'text',msg:{content:'无客服'}},
                {id:5,uid:1,align:'left',username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:59",type:"img",msg:{url:"/static/img/q.jpg",w:1920,h:1080}}, */
            }
        },
        onLoad(option) {
            this.getUserInfo()
            // 初始化socket
            this.initSocket()

            // this.getMsgList();
            // 语音自然播放结束
            this.AUDIO.onEnded((res) => {
                this.playMsgid = null
            })
            // #ifndef H5
            // 录音开始事件
            this.RECORDER.onStart((e) => {
                this.recordBegin(e)
            })
            // 录音结束事件
            this.RECORDER.onStop((e) => {
                this.recordEnd(e)
            })
            // #endif
        },
        onShow() {
            this.getUserInfo()
        },
        // 上传文件
        mounted() {
            var input = document.createElement('input')
            input.type = 'file'
            input.onchange = (event) => {
                console.log(event)
            }
            this.$refs.input.$el.appendChild(input)
        },
        onPullDownRefresh() {
            // 获取更多历史记录
            var that = this
            if (that.params.pages < that.params.pageNum) {
                uni.stopPullDownRefresh()
                return
            }
            that.params.pageNum = that.params.pageNum + 1

            that.sendSocketMessage({
                pageNum: that.params.pageNum,
                pageSize: that.params.pageSize,
                msgType: 1,
                sendUserCode: that.otherUserEntity.userCode,
                sendUserType: that.otherUserEntity.userType
            })
            uni.stopPullDownRefresh()
        },
        methods: {
            getUserInfo() {
                // 获取登录用户
                var userInfo = uni.getStorageSync('userInfo')
                if (userInfo == '') {
                    uni.navigateTo({
                        url: '/pages/login/login'
                    })
                    return
                }
                userInfo = JSON.parse(userInfo)
                var userEntity = {}
                var attr = {}
                attr.headImg = userInfo.userHeadimg
                attr.nickName = userInfo.nickName
                userEntity.attr = attr
                userEntity.userType = 0
                userEntity.userCode = userInfo.userCode
                userEntity.osType = 0
                this.thisUserEntity = userEntity
            },
            initSocket() {
                var that = this
                // 连接socket
                uni.connectSocket({
                    url: 'ws://192.168.1.2:8888/imServer.do?userCode=' + that.thisUserEntity.userCode + '&userType=' + that.thisUserEntity.userType + '&osType=' + that.thisUserEntity.osType,
                    protocols: [],
                    method: 'GET',
                    success: function(res) {
                        console.log(res)
                    }
                })

                // 连接成功
                uni.onSocketOpen(function(res) {
                    that.socketOpen = true
                    console.log(res)
                    // 获取一个店铺或管理员
                    that.getChatPeople()
                    // 获取和客户的聊天历史
                })

                // 连接错误
                uni.onSocketError(function(res) {
                    console.log('WebSocket连接打开失败，请检查！')
                })

                // 接收消息推送
                uni.onSocketMessage(function(res) {
                    console.log('收到服务器内容：')
                    that.doMsg(res.data)
                })
            },
            // 获取一个店铺客服或者管理员
            getChatPeople() {
                var obj = {}
                obj.msgType = 5
                // obj.otherCode: "123", 如果要获取店铺客服，这个传入店铺code。如果要获取管理员客服，可空
                obj.otherType = 1 // 用户0   管理员1 店铺客服 2
                this.sendSocketMessage(obj)
            },
            // websocket发送消息
            sendSocketMessage(msg) {
                if (this.socketOpen) {
                    uni.sendSocketMessage({
                        data: JSON.stringify(msg)
                    })
                } else {
                    socketMsgQueue.push(msg)
                }
            },
            // 处理接收过来的消息
            doMsg(res) {
                var that = this
                if (res == '') {
                    return
                }
                var msg = JSON.parse(res)

                switch (msg.msgType) {
                    case -1:

                        break
                    case 0:

                        break
                    case 1:
                        // 接收历史消息
                        that.doChatHistory(msg)
                        break
                    case 2:
                        // 接收对方发送过来的消息
                        that.doOtherSendMsg(msg)
                        break
                    case 3:
                        // 发送成功
                        that.doSendSuccess(msg)
                        break
                    case 4:
                        break
                    case 5:
                        if (msg.objData == undefined || msg.objData == null) {
                            that.sendSystemMsg('text', '无在线客服')
                        } else {
                            that.otherUserEntity = msg.objData

                            // 获取聊天历史记录
                            that.sendSocketMessage({
                                pageNum: that.params.pageNum,
                                pageSize: that.params.pageSize,
                                msgType: 1,
                                sendUserCode: that.otherUserEntity.userCode,
                                sendUserType: that.otherUserEntity.userType
                            })
                        }
                        break
                }
                // 到底部
            },
            changeText() {
                var range = document.selection.createRange()
                if (range.text.length > 0) { alert(range.text) } else { alert('select something!') }
            },
            getMsgList() {
                // 消息列表
                const list = this.msgList
                // 获取消息中的图片,并处理显示尺寸
                for (let i = 0; i < list.length; i++) {
                    if (list[i].type == 'img') {
                        list[i] = this.setPicSize(list[i])
                        this.msgImgList.push(list[i].msg.url)
                    }
                }
                this.msgList = list

                this.nextTick()
            },
            // 页面添加系统提示消息
            sendSystemMsg(contentType, content, time) {
                this.sendPageMsg(contentType, content, 'center')
            },
            // 页面添加自己的消息消息
            sendThisMsg(contentType, content, time) {
                this.sendPageMsg(contentType, content, 'right')
            },
            sendOtherMsg(contentType, content, time) {
                this.sendPageMsg(contentType, content, 'left', time)
            },
            sendPageMsg(contentType, content, align, time) {
                var that = this
                that.msgList.push({ align: align, type: contentType, time: time, msg: { content: content }})
                that.nextTick(1)
            },
            // 滚动到底部
            nextTick(length) {
                this.$nextTick(function() {
                    this.scrollTop = Number(this.scrollTop) + parseInt(200 * length)
                    this.scrollAnimation = true
                })
            },
            // 处理图片尺寸，如果不处理宽高，新进入页面加载图片时候会闪
            setPicSize(row) {
                const maxW = uni.upx2px(350)
                const maxH = uni.upx2px(350)
                if (row.msg.w > maxW || row.msg.h > maxH) {
                    const scale = row.msg.w / row.msg.h
                    if (row.msg.w > row.msg.h) {
                        row.msg.w = maxW
                        row.msg.h = row.msg.w / scale
                    } else {
                        row.msg.h = maxH
                        row.msg.w = row.msg.h * scale
                    }
                }
                return row
            },
            doOtherSendMsg(msg) {
                var that = this
                var objData = msg.objData
                var data = objData.object
                that.sendOtherMsg(that.buildMsgType(data.contentType), data.content, data.sendTime)

                // 已读消息
                that.sendSocketMessage({
                    msgType: 4,
                    sendUserCode: that.otherUserEntity.userCode,
                    sendUserType: that.otherUserEntity.userType
                })
            },
            doSendSuccess(msg) {
                var objData = msg.objData
                if (objData.isSuccess) {
                    uni.showToast({
                        title: objData.remark,
                        icon: 'none'
                    })
                } else {
                    uni.showToast({
                        title: '发送失败',
                        icon: 'none'
                    })
                }
            },
            // 聊天记录
            doChatHistory(msg) {
                var that = this
                // 聊天记录
                var objData = msg.objData
                if (objData == undefined || objData == null || objData.length == 0) {
                    return
                }
                that.params.pages = objData.pages
                var msgList = objData.list
                var msgs = []
                for (var i = 0; i < msgList.length; i++) {
                    var m = {}
                    m.align = msgList[i].align
                    m.time = msgList[i].sendTime
                    m.type = that.buildMsgType(msgList[i].contentType)
                    var msg = {}
                    msg.content = msgList[i].content
                    m.msg = msg
                    msgs.push(m)
                }
                msgs.reverse()
                that.msgList = msgs.concat(that.msgList)

                if (that.params.pageNum <= 1) {
                    that.sendSystemMsg('text', '客服 : ' + that.otherUserEntity.attr.nickName + ' 为您服务')
                    that.sendOtherMsg('text', '您好!有什么可以帮助到您', that.getTime(3))
                }

                // 已读消息
                that.sendSocketMessage({
                    msgType: 4,
                    sendUserCode: that.otherUserEntity.userCode,
                    sendUserType: that.otherUserEntity.userType
                })
            },
            // 接受消息(筛选处理)
            screenMsg(msg) {
                // 从长连接处转发给这个方法，进行筛选处理
                if (msg.uid != this.myuid) {
                    uni.vibrateLong()
                }
                switch (msg.type) {
                    case 'text':
                        this.addTextMsg(msg)
                        break
                    case 'voice':
                        this.addVoiceMsg(msg)
                        break
                    case 'img':
                        this.addImgMsg(msg)
                        break
                }
                this.$nextTick(function() {
                    this.scrollToView = 'msg' + msg.id
                })
            },
            // 选择表情
            chooseEmoji() {
                this.showEmji = this.showEmji == 'showEmoji' ? 'hideEmoji' : 'showEmoji'
            },
            // 隐藏表情
            hideEmoji() {
                this.showEmji = this.showEmji == 'showEmoji' ? 'hideEmoji' : ''
            },
            // 购物车跳转
            toshopcart() {
                uni.navigateTo({
                    url: '../order/cart'
                })
            },
            // 添加表情
            addEmoji(em) {
                this.textMsg += em.alt
            },
            // 发送文字消息
            sendText() {
                var that = this
                that.hideEmoji()
                if (!that.textMsg) {
                    uni.showToast({
                        title: '不能为空',
                        icon: 'none'
                    })
                    return
                }
                // let content = this.replaceEmoji(this.textMsg);
                // let msg = {content:content}
                that.sendThisMsg('text', that.textMsg)

                that.sendSocketMessage({
                    msgType: 2,
                    receiveUserType: that.otherUserEntity.userType,
                    receiveUserCode: that.otherUserEntity.userCode,
                    content: that.textMsg,
                    contentType: 0
                })
                that.textMsg = ''
            },
            // 替换表情符号为图片
            replaceEmoji(str) {
                const replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, (item, index) => {
                    console.log('item: ' + item)
                    for (let i = 0; i < this.emojiList.length; i++) {
                        const row = this.emojiList[i]
                        for (let j = 0; j < row.length; j++) {
                            const EM = row[j]
                            if (EM.alt == item) {
                                // 在线表情路径，图文混排必须使用网络路径
                                const onlinePath = 'https://s2.ax1x.com/2019/04/12/'
                                const imgstr = '<img src="' + onlinePath + this.onlineEmoji[EM.url] + '">'
                                console.log('imgstr: ' + imgstr)
                                return imgstr
                            }
                        }
                    }
                })
                return '<div style="display: flex;align-items: center;">' + replacedStr + '</div>'
            },
            // 选择图片发送
            chooseImage(contentType, index) {
                var that = this
                that.hideEmoji()
                var sourceType = []
                if (index == 0) {
                    sourceType.push('album')
                } else if (index == 1) {
                    sourceType.push('camera')
                } else {

                }
                uni.chooseImage({
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: sourceType,
                    success: (res) => {
                        for (let i = 0; i < res.tempFilePaths.length; i++) {
                            uni.getImageInfo({
                                src: res.tempFilePaths[i],
                                success: (image) => {
                                    console.log(image.width)
                                    console.log(image.height)
                                    // let msg = {content:res.tempFilePaths[i],w:image.width,h:image.height};
                                    // 上传图片，然后发送
                                    that.uploadFile(res.tempFilePaths[i], function(res) {
                                        that.sendThisMsg('img', res, '123123')
                                        that.sendSocketMessage({
                                            msgType: 2,
                                            receiveUserType: that.otherUserEntity.userType,
                                            receiveUserCode: that.otherUserEntity.userCode,
                                            content: that.textMsg,
                                            contentType: 1
                                        })
                                    })
                                }
                            })
                        }
                    }
                })
            },
            // 发送消息
            sendMsg(content, type) {
                // 实际应用中，此处应该提交长连接，模板仅做本地处理。
                var nowDate = new Date()
                let lastid = this.msgList[this.msgList.length - 1].id
                lastid++
                let msg = { id: lastid, uid: 0, username: '大黑哥', face: '/static/img/face.jpg', time: nowDate.getHours() + ':' + nowDate.getMinutes(), type: type, msg: content }
                this.screenMsg(msg)
                // 定时器模拟对方回复,三秒
                setTimeout(() => {
                    lastid = this.msgList[this.msgList.length - 1].id
                    lastid++
                    msg = { id: lastid, uid: 1, username: '售后客服008', face: '/static/img/im/face/face_2.jpg', time: nowDate.getHours() + ':' + nowDate.getMinutes(), type: type, msg: content }
                    this.screenMsg(msg)
                }, 3000)
            },

            // 处理文字消息
            addTextMsg(msg) {
                this.msgList.push(msg)
            },
            // 处理语音消息
            addVoiceMsg(msg) {
                this.msgList.push(msg)
            },
            // 处理图片消息
            addImgMsg(msg) {
                msg = this.setPicSize(msg)
                this.msgImgList.push(msg.msg.url)
                this.msgList.push(msg)
            },
            // 预览图片
            showPic(row) {
                uni.previewImage({
                    indicator: 'none',
                    current: row.msg.url,
                    urls: this.msgImgList
                })
            },
            // 播放语音
            playVoice(msg) {
                this.playMsgid = msg.id
                this.AUDIO.src = msg.msg.url
                console.log('msg.msg.url: ' + msg.msg.url)
                this.AUDIO.play()
            },
            // 录音开始
            voiceBegin(e) {
                if (e.touches.length > 1) {
                    return
                }
                this.initPoint.Y = e.touches[0].clientY
                this.initPoint.identifier = e.touches[0].identifier
                this.RECORDER.start({ format: 'aac' })// 录音开始,
            },
            // 录音开始UI效果
            recordBegin(e) {
                this.recording = true
                this.voiceTis = '松开 结束'
                this.recordLength = 0
                this.recordTimer = setInterval(() => {
                    this.recordLength++
                }, 1000)
            },
            // 录音被打断
            voiceCancel() {
                this.recording = false
                this.voiceTis = '按住 说话'
                this.recordTis = '手指上滑 取消发送'
                this.willStop = true// 不发送录音
                this.RECORDER.stop()// 录音结束
            },
            // 录音中(判断是否触发上滑取消发送)
            voiceIng(e) {
                if (!this.recording) {
                    return
                }
                const touche = e.touches[0]
                // 上滑一个导航栏的高度触发上滑取消发送
                if (this.initPoint.Y - touche.clientY >= uni.upx2px(100)) {
                    this.willStop = true
                    this.recordTis = '松开手指 取消发送'
                } else {
                    this.willStop = false
                    this.recordTis = '手指上滑 取消发送'
                }
            },
            // 结束录音
            voiceEnd(e) {
                if (!this.recording) {
                    return
                }
                this.recording = false
                this.voiceTis = '按住 说话'
                this.recordTis = '手指上滑 取消发送'
                this.RECORDER.stop()// 录音结束
            },

            // 录音结束(回调文件)
            recordEnd(e) {
                clearInterval(this.recordTimer)
                if (!this.willStop) {
                    plus.io.resolveLocalFileSystemURL(e.tempFilePath, function(entry) {
                        // 可通过entry对象操作test.html文件
                        entry.file(function(file) {
                            console.log(file.size + '--' + file.name)
                        })
                    }, function(e) {
                        alert('Resolve file URL failed: ' + e.message)
                    })
                    console.log('e: ' + JSON.stringify(e))
                    const msg = {
                        length: 0,
                        url: e.tempFilePath
                    }
                    let min = parseInt(this.recordLength / 60)
                    let sec = this.recordLength % 60
                    min = min < 10 ? '0' + min : min
                    sec = sec < 10 ? '0' + sec : sec
                    msg.length = min + ':' + sec
                    this.sendMsg(msg, 'voice')
                } else {
                    console.log('取消发送录音')
                }
                this.willStop = false
            },
            // 切换语音/文字输入
            switchVoice() {
                this.hideEmoji()
                this.isVoice = !this.isVoice
            },
            discard() {
                return
            },
            buildMsgType(msgType) {
                // 0 文本 1 表情 2 图片 3 视频 4 音乐 5 文件 6富文本
                switch (msgType) {
                    case 0:
                        return 'text'
                    case 1:
                        return 'img'
                    default:
                        return 'text'
                }
                return 'text'
            },
            // 上传文件
            uploadFile(file, callback) {
                callback('/static/img/goods/p10.jpg')
            },
// 			upload(){
// 				let that = this;
// 				uni.chooseImage({
// 					success: (chooseImageRes) => {
// 				  debugger
// 					}
// 				});
// 			},
            getTime: function(type) {
                const date = new Date()
                    let currentDate
                    let currentTime
                    const seperator = '-' // 如果想要其他格式 只需 修改这里
                    const year = date.getFullYear()
                    let month = date.getMonth() + 1
                    const weex = date.getDay()
                    let day = date.getDate()
                    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
                    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
                    const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
                month >= 1 && month <= 9 ? (month = '0' + month) : ''
                day >= 0 && day <= 9 ? (day = '0' + day) : ''
                // 当前 日期
                currentDate = year + seperator + month + seperator + day
                // 当前 时间
                currentTime = hour + ':' + minute + ':' + second
                // 输出格式 为 2018-8-27 14:45:33
                // console.log(currentDate +" "+ currentTime);
                if (type == 3) {
                    return currentDate + ' ' + currentTime
                } else if (type == 0) {
                    return currentDate
                } else if (type == 1) {
                    return currentTime
                } else if (type == 2) {
                    if (weex == 1) {
                        return '星期一'
                    } if (weex == 2) {
                        return '星期二'
                    } if (weex == 3) {
                        return '星期三'
                    } if (weex == 4) {
                        return '星期四'
                    } if (weex == 5) {
                        return '星期五'
                    } if (weex == 6) {
                        return '星期六'
                    } if (weex == 7) {
                        return '星期日'
                    }
                } else {
                    return currentDate + ' ' + currentTime
                }
            }
        }
    }
</script>

<style lang="scss">
  page{
    background-color: #e5e5e5;
  }
  @font-face {font-family:"HMfont-home";src:url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2');}
  .icon {
    font-family:"HMfont-home" !important;
    font-size:56upx;
    font-style:normal;
    color: #333;
    &.biaoqing:before {
      content: "\e797";
    }
    &.jianpan:before {
      content: "\e7b2";
    }
    &.yuyin:before {
      content: "\e805";
    }
    &.tupian:before {
      content: "\e639";
    }
    &.chehui:before {
      content: "\e904";
    }
    &.luyin:before {
      content: "\e905";
    }
    &.luyin2:before {
      content: "\e677";
    }
    &.other-voice:before {
      content: "\e667";
    }
    &.my-voice:before {
      content: "\e906";
    }
  }
  .hidden{
    display: none !important;
  }
  @keyframes showEM {
    0% {transform: translateY(0);}
    100% {transform: translateY(-42vw);}
  }
  @keyframes hideEM {
    0% {transform: translateY(-42vw);}
    100% {transform: translateY(0);}
  }
  // .emoji-box{
  // 	&.hideEmoji{animation: hideEM .15s linear both;}
  // 	&.showEmoji{animation: showEM .15s linear both;}
  // 	width: 96%;
  // 	height: 42vw;
  // 	padding: 20upx 2%;
  // 	background-color: #f3f3f3;
  // 	border-top: solid 1upx #ddd;
  // 	position: fixed;
  // 	z-index: 20;
  // 	top: 92%;
  // 	// bottom: 100upx;
  // 	.swiper{
  // 		swiper-item{
  // 			display: flex;
  // 			flex-wrap: wrap;
  // 			view{
  // 				width: 12vw;
  // 				height: 12vw;
  // 				display: flex;
  // 				justify-content: center;
  // 				image{
  // 					width: 60%;
  // 				}
  // 			}
  // 		}
  // 	}
  // }
  .emoji-box{
    &.hideEmoji{animation: hideEM .15s linear both;}
    &.showEmoji{animation: showEM .15s linear both;}
    width: 96%;
    height: 142vw;
    padding: 20upx 2%;
    background-color: #f3f3f3;
    border-top: solid 1upx #ddd;
    position: fixed;
    z-index: 20;
    top: 92%;
    .swiper{
      swiper-item{
        display: flex;
        flex-wrap: wrap;
        view{
          width: 12vw;
          height: 12vw;
          display: flex;
          justify-content: center;
          image{
            width: 60%;
          }
        }
      }
    }
  }
  .place {
    background-color: #ffffff;
    height: 100upx;
    /*  #ifdef  APP-PLUS  */
    margin-top: var(--status-bar-height);
    /*  #endif  */
  }
  .input-box{
    &.hideEmoji{animation: hideEM .15s linear both;}
    &.showEmoji{animation: showEM .15s linear both;}
    width: 98%;
    min-height: 100upx;
    padding: 0 1%;
    background-color: #f2f2f2;
    display: flex;
    position: fixed;
    z-index: 20;
    bottom: 0;
    /* #ifdef H5 */
    bottom: 100upx;
    /* #endif */
    .voice,.more{
      flex-shrink: 0;
      width: 90upx;
      height: 100upx;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .send{
      //H5发送按钮左边距
      /* #ifdef H5 */
      margin-left: 5px;
      /* #endif */
      flex-shrink: 0;
      width: 100upx;
      height: 100upx;
      display: flex;
      align-items: center;
      .btn{
        width: 90upx;
        height: 56upx;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 6upx;
        font-size: 24upx;
        img{
          display: block;
          width: 48px;
          height: 48px;
          border-radius: 50px;
        }
      }
    }
    .textbox{
      width: 100%;
      min-height: 70upx;
      margin-top: 15upx;
      .voice-mode{
        width: calc(100% - 2upx);
        height: 68upx;
        border-radius: 70upx;
        border:solid 1upx #cdcdcd;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28upx;
        background-color: #fff;
        color: #555;
        &.recording{
          background-color: #e5e5e5;
        }
      }
      .text-mode{
        width: 100%;
        min-height: 70upx;
        display: flex;
        background-color: #fff;
        border-radius: 40upx;
        .box{
          width: 100%;
          padding-left: 30upx;
          min-height: 70upx;
          display: flex;
          align-items: center;
          textarea{
            width: 100%;
          }
        }
        .em{
          flex-shrink: 0;
          width: 80upx;
          height: 70upx;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .record{
    width: 40vw;
    height: 40vw;
    position: fixed;
    top: 55%;
    left: 30%;
    background-color: rgba(0,0,0,.6);
    border-radius: 20upx;
    .ing{
      width: 100%;
      height: 30vw;
      display: flex;
      justify-content: center;
      align-items: center;
      @keyframes volatility {
        0% {background-position: 0% 130%;}
        20% {background-position: 0% 150%;}
        30% {background-position: 0% 155%;}
        40% {background-position: 0% 150%;}
        50% {background-position: 0% 145%;}
        70% {background-position: 0% 150%;}
        80% {background-position: 0% 155%;}
        90% {background-position: 0% 140%;}
        100% {background-position: 0% 135%;}
      }
      .icon{
        background-image:linear-gradient(to bottom,#f09b37,#fff 50%);
        background-size:100% 200%;
        animation: volatility 1.5s ease-in-out -1.5s infinite alternate;
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        font-size: 150upx;
        color: #f09b37;
      }
    }
    .cancel{
      width: 100%;
      height: 30vw;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon{
        color: #fff;
        font-size: 150upx;
      }
    }
    .tis{
      width: 100%;
      height: 10vw;
      display: flex;
      justify-content: center;
      font-size: 28upx;
      color: #fff;
      &.change{
        color: #f09b37;
      }
    }
  }
  .content{
    width: 100%;
    .msg-list{
      width: 96%;
      padding: 0 2%;
      position: absolute;
      top: 100upx;
      bottom: 100upx;
      .row{
        &:first-child{
          margin-top: 20upx;
        }
        padding: 20upx 0;
        .my .left,.other .right{
          width: 100%;
          display: flex;
          .bubble{
            max-width: 70%;
            min-height: 50upx;
            border-radius: 10upx;
            padding: 15upx 20upx;
            display: flex;
            align-items: center;
            font-size: 32upx;
            word-break: break-word;
            &.img{
              background-color: transparent;
              padding:0;
              overflow: hidden;
              image{
                max-width: 350upx;
                max-height: 350upx;
              }
            }
            &.voice{
              .icon{
                font-size: 40upx;
                display: flex;
                align-items: center;
              }
              .icon:after
              {
                content:" ";
                width: 53upx;
                height: 53upx;
                border-radius: 100%;
                position: absolute;
                box-sizing: border-box;
              }
              .length{
                font-size: 28upx;
              }
            }
          }
        }
        .my .right,.other .left{
          flex-shrink: 0;
          width: 80upx;
          height: 80upx;
          image{
            width: 80upx;
            height: 80upx;
            border-radius: 10upx;
          }
        }
        .system{
          color:gray;
          padding:5upx 10upx;
          font-size:13upx;
          text-align: center;
        }
        .my{
          width: 100%;
          display: flex;
          justify-content: flex-end;
          .left{
            min-height: 80upx;

            align-items: center;
            justify-content: flex-end;
            .bubble{
              background-color: #028902;
              color: #fff;
              &.voice{
                .icon{
                  color: #fff;
                }
                .length{
                  margin-right: 20upx;
                }
              }
              &.play{
                @keyframes my-play {
                  0% {
                    transform: translateX(80%);
                  }
                  100% {
                    transform: translateX(0%);
                  }
                }
                .icon:after
                {
                  border-left: solid 10upx rgba(240,108,122,.5);
                  animation: my-play 1s linear infinite;
                }
              }
            }
          }
          .right{
            margin-left: 15upx;
          }
        }
        .other{
          width: 100%;
          display: flex;
          .left{
            margin-right: 15upx;
          }
          .right{
            flex-wrap: wrap;
            .username{
              width: 100%;
              height: 45upx;
              font-size: 24upx;
              color: #999;
              display: flex;
              .name{
                margin-right: 50upx;
              }
            }
            .bubble{
              background-color: #fff;
              color: #333;
              &.voice{
                .icon{
                  color: #333;

                }
                .length{
                  margin-left: 20upx;
                }
              }
              &.play{
                @keyframes other-play {
                  0% {
                    transform: translateX(-80%);
                  }
                  100% {
                    transform: translateX(0%);
                  }
                }
                .icon:after
                {
                  border-right: solid 10upx rgba(255,255,255,.8);

                  animation: other-play 1s linear infinite;
                }
              }
            }
          }
        }
      }
    }
  }
  // 顶部导航
  .header.home-header {
    background-color: #028902;
  }
  .header {
    width: 92%;
    padding: 0 4%;
    height: 100upx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    z-index: 10;
    background-color: #fff;

    /*  #ifdef  APP-PLUS  */
    border-top: var(--status-bar-height) solid #028902;

    /*  #endif  */

    .menu-btn {
      position: relative;
      z-index: 10;
      width: 100upx;
      display: flex;
      justify-content: center;
      align-items: center;

      image {
        width: 40upx;
        height: 40upx;
      }
    }

    .logo {
      padding-top: 14upx;
      position: absolute;
      top: 10upx;
      // var(--status-bar-height)是手机状态栏（显示时间，电量的）的高度
      /*  #ifdef  APP-PLUS  */
      top: calc(10upx+var(--status-bar-height));
      /*  #endif  */
      left: 0;
      right: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      image {
        width: 240upx;
        height: 50upx;
      }
    }

    .icon-btn {
      position: relative;
      z-index: 10;
      height: 60upx;
      flex-shrink: 0;
      display: flex;

      .cart-btn {
        display: flex;
        align-items: center;
        justify-content: center;

        image {
          width: 40upx;
          height: 40upx;
        }
      }

      .addr-btn {
        padding-left: 10upx;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24upx;

        image {
          border-radius: 100%;
          border: 1px solid #fff;
          width: 40upx;
          height: 40upx;
        }

        .addr-text {
          padding-left: 10upx;
          color: #fff;
        }

        .addr-text:after {
          content: ' ';
          font-size: 0;
          border: 10upx solid transparent;
          border-top-color: #fff;
          position: relative;
          top: -5upx;
        }
      }
    }
  }

  .fix {
    *zoom: 1;
  }
  .l{ float: left; }
  .r{ float: right; }
  .fix:after,
  .fix:before {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }

  .shoe_emoji-ul{
    .li{
      float: left;
      width: 33.33%;
      text-align: center;
      font-size: 14px;
    }
    image{
      display: block;
      width: 40px;
      height: 40px;
      margin: 0 auto 10px;
    }
  }

  .upload{
    opacity: 0;
    position: relative;
    top: -68px;
    height: 71px;
    .input{
      height: 71px;
    }
    input{
      display: block;
      height: 71px;
    }
  }

</style>
