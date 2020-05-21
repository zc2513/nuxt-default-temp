<template>
  <div class="cls-logo-box sin-container">
    <div class="cls-logo-box">
      <div class="flcb">
        <div class="logo-left">
          <!-- <img src="../../assets/images/logo.jpg" alt=""> -->
        </div>
      </div>
      <div>
        <div class="logo-search-top f14">
          <ul class="search-ul fl">
            <li
              v-for="(item, index) in moduleName"
              :key="index"
              :class="{ active: index == activeTrue }"
              class="cursor"
              @click="toggleMode(index, item.ModeNo)"
            >
              {{ item.ModeName }}
            </li>
          </ul>
          <el-input
            v-model="searchVal"
            placeholder="请输入关键字"
            class="input-with-select"
            clearable
            @keyup.enter.native="searchSave"
          >
            <el-button slot="append" icon="el-icon-search" @click="searchSave" />
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'LogoSeach',
    // eslint-disable-next-line vue/require-prop-types
    props: ['moduleName'],
    data() {
        return {
            activeTrue: 0,
            searchVal: '',
            ModeNo: 'ser001'
        }
    },
    methods: {
        toggleMode(index, v) {
            this.activeTrue = index
            this.ModeNo = v
        },
        searchSave() {
            if (this.searchVal === '') {
                this.$message({
                    message: '请输入搜索关键词！',
                    type: 'warning'
                })
                return
            }
            const subData = {
                Keywords: encodeURIComponent(this.searchVal),
                Type: this.ModeNo
            }
            this.$router.push({
                path: '/search',
                query: subData
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.logo-search-top {
    /deep/ .el-input__inner{
            border: 1px solid #f66a12;
            border-radius: 0;
            height: 35px;
            line-height: 35px;
        }
    /deep/ .el-input-group__append, .el-input-group__prepend{
        background-color: #f66a12;
        color: #ffffff;
        border: 1px solid #f66a12;
    }
}
.active {
  background: #f66a12;
  color: #fff !important;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.cls-logo-box {
    img {
        width: 491px;
        height: 73px;
    }
  box-sizing: border-box;
  height: 94px;
  margin-bottom: 10px;
  background-color: #fff;
  position: relative;
  .cls-logo-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      &:first-of-type {
        width: 590px;
        min-width: 560px;
        display: flex;
        justify-content: space-between;
        padding-top: 21px;
        .logo-left {
            width: 491px;
            height: 73px;
            cursor: pointer;
        }
        .logo-right {
          width: 140px;
          height: 90px;
        }
      }
      &:last-of-type {
        flex-grow: 1;
        max-width: 560px;
        height: 80px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: column;
        padding-top: 21px;
        .logo-search-top {
          height: 28px;
          line-height: 28px;
          li {
            padding: 2px 10px 0px 10px;
            color: #f66a12;
          }
        }
      }
    }
  }
}
</style>
