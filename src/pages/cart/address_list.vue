<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> {{ title }} </div>
      </div>
    </div>

    <div class="dan_wrap fix">
      <div class="wp">
        <van-address-edit
          :area-list="areaList"
          :show-postal="false"
          show-delete
          show-set-default
          show-search-result
          :search-result="searchResult"
          :area-columns-placeholder="areaColumns"
          :address-info="addressInfo"
          @save="onSave"
          @delete="onDelete"
          @change-detail="onChangeDetail"
        />
      </div>
    </div>

  </van-container>
</template>

<script>
import { Icon, AddressEdit } from 'vant'
import { areaList } from '@/assets/json/areaList'
  export default {
    components: {
        'van-icon': Icon,
        'van-address-edit': AddressEdit
    },
    data() {
      return {
          areaList: [],
          status: 'loading',
          searchResult: [],
          areaColumns: ['请选择', '请选择', '请选择'],
          title: '新增地址',
          addressInfo: {
              name: '',
              tel: '',
              areaCode: '',
              isDefault: false,
              addressDetail: ''
          }
      }
    },
    computed: {
    },
    mounted() {
        this.init()
    },
    methods: {
        async init() {
            if (this.$route.query.address) {
                this.title = '修改地址'
                this.addressInfo.name = this.$route.query.receiverName
                this.addressInfo.tel = this.$route.query.receiverPhone
                this.addressInfo.areaCode = this.$route.query.areaId
                this.addressInfo.addressDetail = this.$route.query.addressDetail
                this.addressInfo.isDefault = this.$route.query.isDefault
            }
            this.areaList = areaList
            try {
                // await this.getData()
            } catch (e) {
                this.status = 'error'
                throw e
            }
            this.status = 'success'
        },
        async onSave(val) {
            let url = ''
            // 适配器
            val.isDefault ? val.isDefault = 1 : val.isDefault = 0
            const data = {
                receiverName: val.name,
                receiverPhone: val.tel,
                // areaIdPath:'',
                areaId: val.areaCode,
                addressDetail: val.addressDetail,
                isDefault: val.isDefault,
                addressType: 0
            }
            this.$route.query.address ? (url = 'product/userAddress/edit', data['id'] = this.$route.query.id) : url = 'product/userAddress/add'
            await this.$http.post(url, data)
            this.$router.back()
        },
        onDelete() {
            // Toast('delete')
        },
        onChangeDetail(val) {
            /*  这里可以进行查询操作
              if (val) {
                this.searchResult = [{
                    name: '黄龙万科中心',
                    address: '杭州市西湖区'
                }]
            } else {
                this.searchResult = []
            }*/
        }
    }
  }

</script>
<style lang='scss' scoped>
  h1 {
    background: red;
    width: 375px;
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
  .dan_wrap{
    padding-top: 55px;
    background: #f2f2f2;
    .wp{
      width: 95%;
      margin: 0 auto;
    }
  }

  .header{
    .fix{
      background: #fff;
    }
  }
  .hesde_l{
    position: absolute;
    left: 0px;
    top: 2px;
    font-size: 20px;
    color: #333;
  }
  .hesde_l2{
    position: relative;
    width: 62%;
    margin: 0 auto;
    text-align: center;
    .p {
      font-size: 16px;
      color: #333;
    }
  }

</style>
