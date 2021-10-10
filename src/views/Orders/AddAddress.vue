<template>
  <div class="addAddress">
    <Header :isLeft="true" :title="title" />
    <!-- addaddress -->
    <div class="viewbody">
      <div class="content">
        <FormBlock
          label="联系人"
          placeholder="姓名"
          :tags="sexes"
          @checkSex="checkSex"
          :sex:="addressInfo.sex"
          v-model="addressInfo.name"
        />
        <FormBlock
          label="电话"
          placeholder="手机好吗"
          v-model="addressInfo.phone"
        />
        <FormBlock
          v-model="addressInfo.address"
          label="地址 "
          @click="showSearch"
          placeholder="小区/写字楼 "
          icon="angle-right"
        />
        <FormBlock
          label="门牌号"
          v-model="addressInfo.bottom"
          placeholder="1-10号楼5单元404-1"
          icon="edit"
          :textarea="textarea"
        />
        <div class="formblock">
          <div class="label-wrap">标签</div>
          <TabTag
            :tags="tags"
            :selectTag="addressInfo.tag"
            @checkTag="checkTag"
          />
        </div>
      </div>
    </div>
    <!-- 搜索地址 -->
    <AddressSearch
      @close="showSearch = false"
      :showSearch="showSearch"
      :addressInfo="addressInfo"
    />
  </div>
</template>

<script>
import TabTag from "../../components/Orders/TabTag.vue";
import Header from "../../components/Header.vue";
import FormBlock from "../../components/Orders/FormBlock.vue";
import AddressSearch from "../../components/Orders/AddressSearch.vue";
export default {
  name: "AddAddress",
  data() {
    return {
      title: "天际阿地址",
      tags: ["jia", "xuexiao", "gongsi"],
      sexes: ["先生", "女士"],
      addressInfo: {
        tag: "",
        sex: "",
        address: "",
        name: "",
        phone: "",
        bottom: "",
      },
      showSearch: false,
    };
  },
  methods: {
    checkTag(item) {
      this.addressInfo.tag = item;
    },
    checkSex(item) {
      this.addressInfo.sex = item;
    },
  },
  components: {
    Header,
    FormBlock,
    TabTag,
    AddressSearch,
  },
};
</script>

<style scoped>
.addAddress {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 45px;
}
.viewbody {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  background-color: #f5f5f5;
}

.content {
  padding-left: 4vw;
  background: #fff;
  font-size: 0.94rem;
}

.formblock {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
}
.formblock .label-wrap {
  flex-basis: 17.333333vw;
  padding: 3.733333vw 0;
  line-height: 4.8vw;
  color: #333;
  font-weight: 700;
}

/* 确定按钮 */
.form-button-wrap {
  padding: 5.333333vw 4vw;
  display: flex;
}
.form-button-wrap .form-button {
  background: #00d762;
  text-align: center;
  border-radius: 0.533333vw;
  flex: 1;
  font-size: 1.1rem;
  line-height: 5.066667vw;
  color: #fff;
  padding: 3.333333vw 0;
  border: none;
  font-weight: 500;
}
</style>
