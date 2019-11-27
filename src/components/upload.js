import { Toast } from 'vant'
import config from '../config/config'
import axios from 'axios'

const init = {
  install: (Vue) => {
    const upload = async(file) => {
      const formdata = new FormData()
      formdata.append('file', file.file)
      const res = await axios({
        method: 'post',
        url: config.fileUploadUrl + 'common/upload',
        data: formdata
        // dataType: 'json'
      })
      if (res.data.code !== 0) {
        Toast.fail('上传失败！')
      }
      return res
    }
    Vue.prototype.$upload = upload
  }
}

export default init
