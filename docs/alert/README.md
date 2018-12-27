# alert

### 概述
静态地呈现一些警告信息，可手动关闭

### 基础用法
基本使用方法，有四种样式可以选择info、success、warning、error
<ClientOnly>
  <alert-basic/>
</ClientOnly>

### 含描述信息

自定义slot描述内容。

<ClientOnly>
  <alert-desc/>
</ClientOnly>

### 图标
添加type 通过show-icon控制实现icon

<ClientOnly>
  <alert-icon/>
</ClientOnly>

### close
closable 控制是否能关闭 若监听关闭事件 加上@on-close='xxx'
<ClientOnly>
  <alert-close/>
</ClientOnly>

alert props

| 属性           | 说明                                               | 类型      |默认值     |
| -------------  |:-------------:                                     | -----:   |    -----: |
| type         | 警告提示样式，可选值为info、success、warning、error | String   |     info  |
| closable  | 是否可关闭 | Boolean  |      	true  |
| show-icon          | 是否显示图标  | Boolean   |      	true  |


alert events

| 属性            | 说明          | 返回值  |
| -------------  |:-------------:| -----:  | 
| on-close       | 关闭时触发     | event   |   

alert slot

| 属性            | 说明          | 
| -------------  |:-------------:|
| 无       | 警告提示内容     | 
| desc      | 警告提示辅助性文字介绍     | 
