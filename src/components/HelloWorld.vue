<template>
  <div class="hello">
    <v-button  type='error' icon='qiandao' >按钮</v-button>
    <v-button  type='info' icon='qiandao' >按钮</v-button>
    <v-button  type='success' icon='qiandao' >按钮</v-button>
    <v-button  type='primary' icon='qiandao' >按钮</v-button>
    <v-button  type='waring' icon='qiandao' >按钮</v-button>
    <v-button position='right' :loading=true icon='qiandao'>按钮</v-button>
    <v-button position='left' icon='qiandao' :loading=true>按钮</v-button>
    <v-icon name='qiandao'></v-icon>

    <div id="test"></div>
    <div class="input">
        <v-input prefix='qiandao' size='small'></v-input>
    </div>
    <div class="input">
        <v-input prefix='qiandao' suffix='qiandao'></v-input>
    </div>
  </div>
</template>

<script>
import vButton from '@/components/button/index'
import vIcon from '@/components/icon/index'
import vInput from '@/components/input/index'

export default {
  name: 'HelloWorld',
  components: {
    vButton,
    vIcon,
    vInput
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
