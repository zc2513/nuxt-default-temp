<template>
  <div class="zc-header-box">
    <div class="sin-container zc-header">
      <div class="flc-y">
        <i class="home-icon" />
        <span class="t-gay">
          &nbsp;&nbsp;您好：{{ userName||"游客" }} 欢迎来到【建筑市场与交易网】
          &nbsp;&nbsp;&nbsp;</span>
        <template v-if="!userNum">
          <span class="f666">请&nbsp;</span><a :href="loginUrl" class="cursor t-blue">登录</a> &nbsp;&nbsp;
          <a :href="Register" class="cursor t-blue">免费注册</a>
          &nbsp;&nbsp;
        </template>
        <template v-else>
          <a class="t-blue" :href="nemberURL" target="_blank">个人中心</a>/
          <a
            class="t-blue"
            href="javascript:void(0)"
            @click="logout()"
          >退出登录</a>&nbsp;&nbsp;
          <el-popover
            v-model="msgTrue"
            placement="top-start"
            width="150"
            trigger="hover"
            :visible-arrow="false"
            popper-class="popper-header-cls"
          >
            <div
              class="navMsg f12"
              style="width:100%;margin: 0;right:0;color:#999;"
            >
              <p
                v-for="(item, index) in messageList"
                :key="index"
                class="cursor  ml5"
                @click="goToMsg(item.url)"
              >
                {{ item.title }}&nbsp;&nbsp;&nbsp;&nbsp;<span class="active">{{
                  item.msgNum
                }}</span>
              </p>
            </div>
            <el-button
              slot="reference"
              :class="['cursor', 'switchPopover','f12', { white: msgTrue }]"
            >
              消息<span class="newsto f12">{{ msgAllCount }}</span>
            </el-button>
          </el-popover>
        </template>
        <svg-icon
          icon-class="hadress"
          class="f18 ml10 mr5"
        />&nbsp;
        <span
          class="t-blue"
        >[{{ currentCityName }}]
          <el-popover
            v-model="visible"
            placement="top-start"
            width="280"
            trigger="hover"
            :visible-arrow="false"
            popper-class="popper-header-cls"
          >
            <div class="hideBlock f12" style="margin: 0;color:#999;">
              <span
                v-for="(item, index) in cityName"
                :key="index"
                :class="['cursor', 'ml5', 'mr5', { active: item.active }]"
                @click="toggleRegion(item)"
              >{{ item.RegionName }}</span>
            </div>
            <el-button
              slot="reference"
              :class="['cursor', 'switchPopover','f12', { white: visible }]"
            >切换城市</el-button>
          </el-popover>
        </span>
      </div>
      <div class="t-r navPop flc-y">
        <span class="mr15 sub" @click="goSub">
          <svg-icon icon-class="sub-icon" class="f18 mr5" />订阅
        </span>
        <span class="t-gay">客服电话：400-080-2366</span>&nbsp;&nbsp;
        <span class="t-gay cursor" @mouseenter="viss = true" @mouseleave="viss = false">
          <el-button
            :class="['cursor', 'switchPopover','f12', { white: viss }]"
          >网站导航</el-button>
          <i class="line" />
          <div v-show="viss" class="webNavg f12">
            <div class="bgi" />
            <div v-for="(item, index) in webnav" :key="index" class="NavItem">
              <p class="f14">{{ item.title }}</p>
              <a
                v-for="(itemChild, i) in item.children"
                :key="i"
                :class="['itemChild', 'f14', { magnify: itemChild.children }]"
                @click="navMapJump(itemChild.path)"
              >
                {{ itemChild.title }}
                <p v-if="itemChild.children">
                  <span
                    v-for="(propsChild, j) in itemChild.children"
                    :key="j"
                    class="propsChild f8c mr15"
                    @click.stop="navMapJump(propsChild.path)"
                  >
                    {{ propsChild.title
                    }}<svg-icon
                      v-if="propsChild.hot"
                      icon-class="hot"
                      class="f16"
                      style="position:relative;top:-2px;"
                    />
                  </span>
                </p>
              </a>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { MessageBox } from 'element-ui'
const Base64 = require('js-base64').Base64
export default {
    name: 'Hder',
    // eslint-disable-next-line vue/require-prop-types
    props: ['userName', 'userNum', 'cityName'],
    data() {
        return {
            msgTrue: false, //  消息
            visible: false, // 切换分站
            viss: false, // 网站导航
            SubstationList: [], // 所有站点数据
            webnav: require('./webnav.json'),
            messageList: [
                {
                    title: '系统消息',
                    url: '/Member/MemNotificationList.aspx?i=0&NoticeTypeC=Global',
                    msgNum: this.$store.message ? this.$store.message.countGlobal : 0
                },
                {
                    title: '私信消息',
                    url: '/Member/MemNotificationList.aspx?i=1&NoticeTypeC=Private',
                    msgNum: this.$store.message ? this.$store.message.countPrivate : 0
                }
            ],
            msgAllCount: this.$store.message ? this.$store.message.countAll : 0, // 消息总数
            nemberURL: `${process.env.personal}/Member/MemberIndex.aspx`, // 个人中心
            loginUrl: '',
            Register: `${process.env.loginURL}/Register.aspx`
        }
    },
    computed: {
        ...mapGetters('user', ['userTonken']),
        ...mapGetters('common', ['currentCityName'])
    },
    watch: {
        currentCityName: {
            handler(v) {
                this.$nuxt.$loading.start()
                window.location.reload()
            }
        }
    },
    mounted() {
        this.loginUrl = `${process.env.loginURL}/Login.aspx?ReturnUrl=${Base64.encode(location.href)}`
    },
    methods: {
    //  消息通知跳转
        goToMsg(url) {
            location.href = `${process.env.baseURL}${url}`
        },
        // 城市站点切换
        toggleRegion(item) {
            this.$store.commit('common/SET_CITY', item)
        },
        // 订阅
        goSub() {
            if (this.userTonken) {
                location.href = `${process.env.personal}/Member/SubscibeList.aspx`
            } else {
                MessageBox.confirm('您暂未登录，请先登录再订阅, 是否继续?', '提示', {
                    confirmButtonText: '是',
                    cancelButtonText: '否',
                    type: 'warning'
                }).then(() => {
                    location.href = this.loginUrl
                }).catch(() => {
                    // console.log('取消了')
                })
            }
        },
        // 网站导航
        navMapJump(path) {
            if (path) {
                this.$router.push(path)
            }
        },
        logout() {
            // 前端退出
            this.$store.dispatch('user/logout')
        }
    }
}
</script>

<style lang="scss" scoped>
.zc-header-box {
  background-color: #f2f2f2;
  .zc-header {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    > div {
      height: 30px;
      line-height: 30px;
      min-height: 30px;
        .home-icon {
            display: inline-block;
            width: 24px;
            height: 23px;
            // background-image: url('../../assets/images/spirit.png');
            background-repeat: repeat;
            background-position-x: -561px;
            background-position-y: -5px;
        }
    }
    .t-blue {
      color: #006fc3;
    }
    .t-gay {
      color: #666;
    }
    .switchPopover {
      //
      background: none;
      border: none;
      color: #006fc3;
      height: 41px;
      width: 60px;
      padding-left: 0;
      padding-right: 0;
      border-radius: 0;
      &:hover {
        @extend .white;
        border-top: 0;
        border-bottom: 0;
      }
    }
    .white {
      //按钮hover样式（网站导航/地址）
      background: #fff;
      border: solid 1px #ccc;
      border-top: none;
      border-bottom: none;
    }
    .newsto {
      display: inline-block;
      padding: 0px 7px 0px 7px;
      border-radius: 60%;
      color: #fff;
      margin-left: 5px;
      background-color: #f66a12;
      height: 16px;
      line-height: 16px;
    }
    // 网站导航样式
    .navPop {
        position: relative;
        .sub {
            color: #006fc3;
            font-size: 14px;
            cursor: pointer;
        }
        .webNavg {
                padding:20px 0 0 20px;
                background-color: #FFF;
                border: 1px solid #e6e6e6;
                border-radius: 10px 0 10px 10px;
                right: 0;
                top: 30px;
                position: absolute;
                width: 500px;
                z-index: 99999;
                text-align: left;
                .bgi {
                    position: absolute;
                    width: 175px;
                    height: 70px;
                    // background-image: url("../../assets/images/logo.jpg");
                    background-repeat: no-repeat;
                    background-size: cover;
                    top: 20px;
                    right: 80px;
                    opacity: 0.9;
                }
            .NavItem{
                p {
                    color: #006fc3;
                    height: 25px;
                    line-height: 25px;
                }
                .itemChild {
                    margin-right: 15px;
                    &:hover {
                        @extend .magnify;
                    }
                    >p{
                        line-height: 20px;
                        .propsChild{
                            margin-right: 15px;
                            &:hover {
                                @extend .magnify;
                            }
                        }
                        .propsChild:nth-of-type(1){
                            margin-left: 20px;
                            &:hover {
                                @extend .magnify;
                            }
                        }
                    }
                }
                .itemChild:nth-of-type(1){
                    margin-left: 15px;
                }
                .magnify {
                    color: #006fc3;
                }
            }
        }
    }
  }
}
</style>
<style lang="scss">
.active {
      color: #f65f10;
    }
.popper-header-cls {
  //  弹出层样式
  top: 18px !important;
  border-color: #ccc;
  border-radius: 0;
  position: relative;
  .line {
    position: absolute;
    width: 58px;
    height: 4px;
    background-color: #fff;
    top: -2px;
  }
  .hideBlock {
    //  地址的弹出
    span {
      color: #999;
      display: inline-block;
      width: 40px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      margin-bottom: 5px;
      &:hover {
        @extend .active;
      }
    }
    .active {
      color: #fff;
      background: #006fc3;
    }
  }
  .navMsg {
    // 消息
    p {
      height: 20px;
      line-height: 20px;
      margin: 5px 0;
      text-align: center;
      &:hover {
        @extend .active;
      }
    }
  }
}
</style>
