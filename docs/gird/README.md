# Grid 栅格


<ClientOnly>
  <gird/>
</ClientOnly>


我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。

我们定义了两个概念，行row和列col，具体使用方法如下：

使用row在水平方向创建一行
将一组col插入在row中
在每个col中，键入自己的内容
通过设置col的span参数，指定跨越的范围，其范围是1到24
每个row中的col总和应该为24



### 基础用法
水平排列的布局。
col必须放在row里面。
<ClientOnly>
  <gird-basic/>
</ClientOnly>

### 区块间隔
通过给 row 添加 gutter 属性，可以给下属的 col 添加间距，推荐使用 (16+8n)px 作为栅格间隔。
<ClientOnly>
  <gird-gutter/>
</ClientOnly>

### 左右偏移
通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。
<ClientOnly>
  <gird-offset/>
</ClientOnly>


### 水平对齐方式

通过给row设置参数align为不同的值，默认left

左侧对齐

<ClientOnly>
  <gird-align-left/>
</ClientOnly>

居中
<ClientOnly>
  <gird-align-center/>
</ClientOnly>

右侧对齐
<ClientOnly>
  <gird-align-right/>
</ClientOnly>

row props
| 属性           | 说明                                               | 类型      |默认值     |
| -------------  |:-------------:                                     | -----:   |    -----: |
| gutter         | 栅格间距，单位 px，左右平分                          | Number or String   |       0   |
| align          | 水平排列方式，可选值为 left、right、center或者不设置  |   String |      ''   |

col props

| 属性           | 说明                                               | 类型      |默认值     |
| -------------  |:-------------:                                     | -----:   |    -----: |
| span         | 栅格的占位格数，可选值为0~24的整数 | Number or String   |      	-  |
| offset          | 栅格左侧的间隔格数，间隔内不可以有栅格  | Number or String   |      	-  |
