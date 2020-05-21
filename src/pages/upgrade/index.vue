<!-- home -->
<template>
  <van-container :status="status">

  </van-container>
</template>

<script>
  export default {
    components: {

    },
    data() {
      return {
        status: 'loading'
      }
    },
    computed: {},
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        try {
          this.judRoute()
        } catch (e) {
          this.status = 'error'
          throw e
        }
        this.status = 'success'
      },
      judRoute() {
        console.log(this.$route.query, '---------------------query') // 给app确认用
        // 初始化一波
        this.$store.commit('setUser', {
          // Authorization: this.$route.query.Authorization || '', // 认证token
          // userid: this.$route.query.userid || '', // 用户ID
          // roleNo: this.$route.query.roleNo || '', // 角色编号
          // roleId: this.$route.query.roleId || '', // 角色id
          Authorization: 'eyJ0eXAiOiJKV1QiLCJub25jZSI6Ik14Nm9VWEROY3JFQy1wVlZoTUtDTnNCeWlsZmI0c1FDY0NjblhINEdKNmciLCJhbGciOiJSUzI1NiIsIng1dCI6Ilk5cTBEazE3VVpBbmRTdUhISDVmWVZJdmh6cyIsImtpZCI6Ilk5cTBEazE3VVpBbmRTdUhISDVmWVZJdmh6cyJ9.eyJhdWQiOiJodHRwczovL21pY3Jvc29mdGdyYXBoLmNoaW5hY2xvdWRhcGkuY24iLCJpc3MiOiJodHRwczovL3N0cy5jaGluYWNsb3VkYXBpLmNuLzQxNzQxZGNmLWFkODktNDdiOS05MTM2LTQ3MTRlN2EyZjFjNC8iLCJpYXQiOjE1OTAwNDkwNzMsIm5iZiI6MTU5MDA0OTA3MywiZXhwIjoxNTkwMDUyOTczLCJhY3IiOiIxIiwiYWlvIjoiWTJkZ1lHamo2RlNXT1htNksxc2k1Yy9wVDdNN1p1Yi8xWDExZDROdmk1TWgveXB2aFRBQSIsImFtciI6WyJwd2QiXSwiYXBwX2Rpc3BsYXluYW1lIjoiQ1NPX0NoaW5hTW9iaWxlQXV0aG5fTmF0aXZlQXBwMDFfREVWIiwiYXBwaWQiOiI0MTgwOTcyYi01YThjLTQ0YjUtYTEwZC1jMTI2N2JkN2JlM2MiLCJhcHBpZGFjciI6IjAiLCJpcGFkZHIiOiI0MC43My4xMDEuMTIwIiwibmFtZSI6IjEyMzEyMzEyOTAzIiwib2lkIjoiMGY3MDdlMWMtZjdkNi00ZGIzLThmM2YtMjhiZGU0MGFiYzdkIiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMzMjMwQzUyMjhCMUYiLCJzY3AiOiJlbWFpbCBvcGVuaWQgcHJvZmlsZSBVc2VyLlJlYWQiLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJvaEl6XzZQeFd2d1RxTXdNcWxhZkEyWVJkNUdiSUtrVm5kV3VNVDBBSjlNIiwidGlkIjoiNDE3NDFkY2YtYWQ4OS00N2I5LTkxMzYtNDcxNGU3YTJmMWM0IiwidW5pcXVlX25hbWUiOiIxMjMxMjMxMjkwM0BjdW1taW5zY2hpbmFsYWIucGFydG5lci5vbm1zY2hpbmEuY24iLCJ1cG4iOiIxMjMxMjMxMjkwM0BjdW1taW5zY2hpbmFsYWIucGFydG5lci5vbm1zY2hpbmEuY24iLCJ1dGkiOiJsZFBIMFhQX1hFLVlUblUybjE2YkFBIiwidmVyIjoiMS4wIiwieG1zX3N0Ijp7InN1YiI6Ikl0dkw2TGxzLXQwVUVlMXBTX2tsVm1RQlBmejRXQ18xRkRTNFNWVXNTV0EifSwieG1zX3RjZHQiOjE1NDU4MTEzMDZ9.YYyjp7p3VMuWQLROupy-EgyUBsbZYjY6jcihfBXkl7Sw3PVDzrsKfKcFr9fMSQuMV_S87E9QkoyO0WGYFCVRqI_juSwnNVMlLSSbv5f2IUW9tEXKHG2wjXda08F5HNmNIcmzCezkBw46s7MYeVKC_SItEqbGfeC0cVm_Z8hSwXIfECCFbTNMi4dxjD0ZTNdKVzBzwoVm_hcejw7K0Hm7Pm2GeXHHkmnR1C54fPWFdxEblxtJxsDGvhnl165ykNl258f5ycK14hfyYlXEGLyZIqiPRoUVEfil4gXF2bQc_0V_lA8RUgBAPqYbL2cxWC3PVKnowDIo0LxDBnpbkFRwIA', // 认证token
          userid: 'C9D235D5E70428B63A72C9C9A2EA5D24', // 用户ID
          roleNo: 'R0033', // 角色编号
          roleId: '33', // 角色id
          type: this.$route.query.type || 'upgradeList', // upgradeList : 主动升级列表    newUpgrade: 已有工单新建升级      upgradeDetail: 升级详情
          workOrderId: this.$route.query.workOrderId || '', // 服务工单id
          escalationOrderId: this.$route.query.escalationOrderId || '' // 升级工单id
        })
        switch (this.$route.query.type) {
          case 'upgradeList':this.$router.push({ path: '/upgrade/upgrade', query: { type: 'app' }}); break
          case 'newUpgrade':this.$router.push({ path: '/upgrade/newUpgrade', query: { type: 'app' }}); break
          case 'upgradeDetail':this.$router.push({ path: '/upgrade/upgradeDetail', query: { type: 'app' }}); break
          default : this.$router.push({ path: '/upgrade/upgrade', query: { type: 'app' }})
        }
      }
    }
  }

</script>
<style lang='scss' scoped>
  .wrap {
    background: #ffffff;
    padding-top:45px;
    height: 100%;
    .circle{
      width:100%;
      height:100px;
      text-align: center;
      padding: 20px;
    }
    img {
      height:300px;
    }
  }
  .header {
    .fix {
      position: relative;
      background: #f10d3b;
    }
    .header_l {
      line-height: 40px;
      color: #fff;
      font-size: 20px;
      float:left;
      padding-top:5px;
    }
    .header_title {
      text-align: center;
      color: #212121;
      color:#fff;
    }
  }
</style>
