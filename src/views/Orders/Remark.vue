<template>
  <div class="remark">
    <Header :isLeft="true" title="订单备注" />
    <!-- 订单备注 -->
    <div class="view-body">
      <section>
        <textarea placeholder="填写额外的备注" maxlength="100" v-model="text">
        </textarea>
        <div class="switch">
          <span
            v-for="(item, index) in radioItem"
            :key="index"
            class="switch-item item-line"
            >{{ item.name }}
          </span>
        </div>
        <div class="switch" v-for="(item, index) in switchItem" :key="index">
          <span class="switch-item">{{ item.name }} </span>
        </div>
      </section>
      <button class="btn-submit">确定</button>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
export default {
  name: "Remark",
  data() {
    return {
      radioItem: [
        { selrct: false, name: "不要辣" },
        { selrct: false, name: "少点辣" },
        { selrct: false, name: "多点那" },
      ],
      switchItem: [
        { selrct: false, name: "不要AAA" },
        { selrct: false, name: "不要CCC" },
        { selrct: false, name: "不要MMM" },
        { selrct: false, name: "不要0" },
      ],
      text: "",
    };
  },
  components: {
    Header,
  },
};
</script>

<style scoped>
.remark {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 45px;
}

.view-body {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  font-size: 0.8rem;
  color: #333;
}
.view-body section {
  margin-top: 2.133333vw;
  padding: 4.266667vw;
  background-color: #fff;
  margin-bottom: 2.133333vw;
}
.view-body section textarea {
  width: 100%;
  height: 29.866667vw;
  margin-bottom: 4.266667vw;
  padding: 4.266667vw;
  border: 1px solid #ccc;
  border-radius: 0.666667vw;
  background-color: #f9f9f9;
  color: #666;
  resize: none;
  box-sizing: border-box;
  outline: none;
}
.switch {
  display: inline-block;
  margin: 0 2.666667vw 2.666667vw 0;
  border: 1px solid #ddd;
  overflow: hidden;
  border-radius: 1.066667vw;
}
.switch-item {
  display: inline-block;
  padding: 0 2.133333vw;
  height: 8vw;
  line-height: 8vw;
  text-align: center;
  color: #666;
}
.item-line::after {
  content: " ";
  display: inline-block;
  height: 4vw;
  width: 1px;
  background: #ddd;
  line-height: 8vw;
  vertical-align: middle;
  left: 2.266667vw;
  position: relative;
}
.btn-submit {
  display: block;
  padding: 3.466667vw 0;
  color: #fff;
  background-color: #00e067;
  border-radius: 0.533333vw;
  opacity: 0.98;
  width: 92vw;
  margin: 3.133333vw auto 0;
  font-size: 1rem;
}

/* 选中样式 */
.switch-item.selected {
  background: #0186ff;
  color: #fff;
  position: relative;
}
</style>
