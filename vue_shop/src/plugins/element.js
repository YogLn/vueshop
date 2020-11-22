import Vue from 'vue'
import { Button, Form, FormItem, Input, Message} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 全局挂载message $message 为自定义属性
Vue.prototype.$message = Message
