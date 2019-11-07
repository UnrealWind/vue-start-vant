<!-- home -->
<template>
  <van-container :status="status">
    <div slot="header" class="fix">
      <div class="hesde_l" @click="$router.back()"> <van-icon name="arrow-left" /> </div>
      <div class="hesde_l2">
        <div class="p"> 新增地址 </div>
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
          areaColumns: ['请选择', '请选择', '请选择']
      }
    },
    computed: {
    },
    mounted() {
        this.init()
    },
    methods: {
        async init() {
            this.areaList = areaList
            try {
                // await this.getData()
            } catch (e) {
                this.status = 'error'
                throw e
            }
            this.status = 'success'
        },
        async getData() {
            const res = await this.$http.get('/user/12345')
            console.log(res)
        },
        onSave() {
            // Toast('save')
        },
        onDelete() {
            // Toast('delete')
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [{
                    name: '黄龙万科中心',
                    address: '杭州市西湖区'
                }]
            } else {
                this.searchResult = []
            }
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
