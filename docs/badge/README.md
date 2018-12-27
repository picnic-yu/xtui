# Badge 徽标数

### 基础用法

<ClientOnly>
  <badge-basic/>
</ClientOnly>

### 状态点
用于表示状态的小圆点。
<ClientOnly>
  <badge-status/>
</ClientOnly>
### type 控制颜色
使用 type 属性，可以设置不同的颜色
<ClientOnly>
  <badge-type/>
</ClientOnly>
           

bage props

| 属性           | 说明                                               | 类型      |默认值     |
| -------------  |:-------------:                                     | -----:   |    -----: |
| count         | 显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏 | Number   |      	-  |
| overflowCount  | 展示封顶的数字值 | Number or String  |      	99  |
| dot          | 不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0  | Boolean   |      	false  |
| showZero          | 当数值为 0 时，是否展示 Badge  | Boolean   |      	false  |
| className          | 自定义的class名称，dot 模式下无效  | String   |      	-  |
| text          | 自定义内容，如果设置了 status，则为状态点的文本  | String   |      	''  |
| status          | 设置 Badge 为状态点，可选值为 success、processing、default、error、warning  | String   |      	- |
| type          | 使用预设的颜色，可选值为 success、primary、normal、error、warning、info  | String   |      	- |
| offset          | 设置状态点的位置偏移，格式为 [x, y]  | Array   |      	- |
