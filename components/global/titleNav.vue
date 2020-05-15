<template>
  <div class="title-nav-box">
    <div class="title" :class="{wireb:iswireb}" :style="sHeight">
      <div
        :class="{verticalLine:isLine || (type == 2 && isLine)}"
        :style="{
          color:titleObj.color ? titleObj.color:( type == 2 ? '#323232':'#ff6620'),
          fontWeight: type == 2||3 ? '400':'',
          borderBottom: type == 3 ?'2px solid red':'',
          lineHeight: type == 3 ?'38px':'',
          fontSize:titleObj.fontSize ? titleObj.fontSize:(type == 2 ? '28px':'20px'),...titleObj.constyle
        }"
      >
        <slot name="titleIcon" />
        {{ titleObj.con }}
        <slot name="title" />
      </div>
      <div class="describe" :style="{color:type == 2 ? '#666':'#999',fontSize:type == 2 ? '25px':'14px',...titleObj.describestyle}">
        {{ titleObj.describe }}
        <slot name="con" />
      </div>
      <div v-if=" ((type == 2 && titleObj.ismore) || titleObj.ismore) ? true:false" class="right">
        <el-button type="text" :style="{color:boxSizeAndClass.color}" @click="save(titleObj)">
          更多<i class="el-icon-d-arrow-right" />
        </el-button>
      </div>
      <div v-else class="right">
        <slot name="btn" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
/**
 *  @type 标题类别 默认参数1,表示工程赶集标题，参数为2时表示团队详情标签
 *  @接收参数 titleObj  => :title-obj='params'
 *      color: 字体颜色
 *      fontSize:字体大小
 *      con:标题
 *      constyle：标题样式
 *      describe:描述文件
 *      describestyle：描述文件样式
 *      ismore:是否显示更多
 * @isunderline 是否显示下划线
 * @isLine 是否显示左侧 竖线
 */
export default {
    name: 'TitleNav',
    props: {
        titleObj: {
            type: Object,
            default() {
                return {
                    color: '#ff6620',
                    fontSize: '20px',
                    con: '默认标题',
                    constyle: {},
                    describe: '默认描述',
                    describestyle: {},
                    ismore: true
                }
            }
        },
        type: {
            type: Number,
            default: 1
        },
        isLine: {
            type: Boolean,
            default: false
        },
        iswireb: {
            type: Boolean,
            default: false
        },
        isunderline: {
            type: Boolean,
            default: false
        },
        boxSizeAndClass: {
            type: Object,
            default() {
                return {}
            }
        },
        sHeight: { // 标题高度
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        save({ con, type }) {
            this.$emit('clickType', { con, type })
        }
    }
}
</script>

<style lang="scss" scoped>
.title-nav-box{
    .title{
        height: 40px;
        position: relative;
        display: flex;
        align-items: center;
        >div{
            display: flex;
            align-items: center;
        }
        .describe{
            margin-left: 20px;
            flex:1;
            font-size: 14px;
            height: 100%;
        }
        .right{
            min-width: 60px;
            .el-button--text{
                color: #666;
                &:hover{
                    color:  #ff6620;
                    text-decoration: underline;
                    .el-icon-d-arrow-right{
                        text-decoration: underline;
                    }
                }
                .el-icon--right{
                    margin: 0;
                }
            }
        }
    }
    // .borderBottom{border-bottom: 1px solid #e6e6e6;}
}

</style>
