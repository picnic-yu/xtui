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
    <div class="input-wrap">
        <v-input @on-enter='handleEnter' v-model='inputValue' placeholder='size small' prefix='qiandao' size='small'></v-input>
    </div>
    <div class="input-wrap">
        <v-input prefix='qiandao' placeholder='size default' suffix='qiandao' ></v-input>
    </div>
    <div class="input-wrap">
        <v-input prefix='qiandao' placeholder='size large' suffix='qiandao' size='large'></v-input>
    </div>
    <div class="input-wrap">
      <v-input  readonly placeholder='readonly' ></v-input>
    </div>
    <div class="input-wrap">
      <v-input  disabled placeholder='disabled' ></v-input>
    </div>
    <div class="input-wrap">
      <v-input  :maxlength='12' placeholder='maxlength 12' ></v-input>
    </div>
    <v-row :gutter='16'>
      <v-col span='12'  >span='12'</v-col>
      <v-col span='12' >span='12'</v-col>
    </v-row>
    <v-row :gutter="16" class='demo-row'>
      <v-col span='6' >
          <div class="demo-col">
              col-6
          </div>
      </v-col>
      <v-col span='6' >
          <div class="demo-col">
              col-6
          </div>
      </v-col>
      <v-col span='6' >
          <div class="demo-col">
              col-6
          </div>
      </v-col>
      <v-col span='6' >
          <div class="demo-col">
              col-6
          </div>
      </v-col>
    </v-row>
    <v-row  class='demo-row'>
      <v-col span='6' >
          <div class="demo-col">
              col-6
          </div>
      </v-col>
      <v-col span='6' :offset='6'>
          <div class="demo-col light">
              col-6
          </div>
      </v-col>
    </v-row>   
    <v-badge :count="3">
      <a href="#" class="demo-badge"></a>
    </v-badge>
    <br>
    <br>
    <v-badge dot>
        <a href="#">可以是一个链接</a>
    </v-badge>
    <br>
    <br>
    <v-badge :count="100">
        <a href="#" class="demo-badge"></a>
    </v-badge>
    <br>
    <br>
    <v-badge text="new">
      <a href="#" class="demo-badge"></a>
    </v-badge>

    <v-badge status="success" text='success' />
    <v-badge status="error" text='error' />
    <v-badge status="default" text='default' />
    <v-badge status="processing" text='processing' />
    <v-badge status="warning" text='warning' />
    <br>
    <br>
    <v-badge :count="5" type="primary">
        <a href="#" class="demo-badge"></a>
    </v-badge>
    <v-badge :count="5" type="success">
        <a href="#" class="demo-badge"></a>
    </v-badge>
    <v-badge :count="5" type="normal">
        <a href="#" class="demo-badge"></a>
    </v-badge>
    <v-badge :count="5" type="info">
        <a href="#" class="demo-badge"></a>
    </v-badge>
    <v-badge :count="5" type="error">
        <a href="#" class="demo-badge"></a>
    </v-badge>
    <v-badge :count="5" type="warning">
        <a href="#" class="demo-badge"></a>
    </v-badge>
    <!-- <v-table></v-table> -->
    <v-alert>alert info</v-alert>
    <v-alert type='success'>alert success</v-alert>
    <v-alert type='error'>alert error</v-alert>
    <v-alert type='warning' closable>alert warning 可关闭</v-alert>
    <v-alert type='warning' closable>alert warning
      <template slot='desc' closable>122112212 可关闭</template>
    </v-alert>
    <v-alert type='warning' closable showIcon @on-close='handleClose'>alert warning  可关闭
      <template slot='desc'>122112212</template>
    </v-alert>
    <!-- <pagination></pagination> -->


    <v-collapse>
        <collapse-item title='标题1'>内容1</collapse-item>
        <collapse-item title='标题2'>内容2</collapse-item>
        <collapse-item title='标题3'>内容3</collapse-item>
        <collapse-item title='标题4'>内容4</collapse-item>
    </v-collapse>
  </div>
</template>

<script>
import pagination from './pagination'
export default {
  name: 'HelloWorld',
  components: {
    // vButton,
    // vIcon,
    // vInput
    pagination
  },
  data(){
    return{
      inputValue:''
    }
  },
  methods:{
    handleEnter(event){
      console.log(event,'handleEnter')
    },
    handleClose(e){
      console.log(e)
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-wrap{
  padding:10px;
}
.demo-badge{
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}


.demo-col{
    color: #fff;
    padding: 15px 0;
    text-align: center;
    font-size: 18px;
    background: rgba(0,153,229,.7);
}
.demo-col.light{
    background: rgba(0,153,229,.5);
}
.demo-row{
    margin-top:10px;
}
</style>
