<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.jpeg" alt="myloginimage" />
    </div>
    <!-- 手机号 -->
    <InputGroup
      type="number"
      v-model="phone"
      placeholder="手机号"
      :btnTitle="btnTitle"
      :disabled="disabled"
      :error="errors.phone"
      @btnClick="getVerifyCode"
    />
    <!-- 验证码 -->
    <InputGroup
      type="number"
      v-model="verifyCode"
      placeholder="验证码"
      :error="errors.code"
    />

    <!-- 用户服务协议 -->
    <div class="login_des">
      <p>
        用户登陆协议，表示以统一
        <span> 《用户服务协议》 </span>
      </p>
    </div>
    <!-- 登陆按钮 -->
    <div class="login_btn">
      <button :disabled="isClick" @click="handleLogin">登陆</button>
    </div>
  </div>
</template>

<script>
import InputGroup from "../components/InputGroup";
export default {
  name: "login",
  data() {
    return {
      phone: "",
      verifyCode: "",
      errors: {},
      btnTitle: "获取验证码",
      disabled: false,
    };
  },
  computed: {
    isClick() {
      if (!this.phone || !this.verifyCode) return true;
      else return false;
    },
  },
  methods: {
    handleLogin() {
      //取消错误提醒
      this.errors = {};
      //发送请求
      this.$axios
        .post("/api/posts/sms_back", {
          phone: this.phone,
          code: this.verifyCode,
        })
        .then((res) => {
          console.log(res);
          //检验陈功，设置登陆状态并且跳转到登陆状态／
          localStorage.setItem("ele_login", true);
          this.$router.push("/");
        })
        .catch((err) => {
          //返回错误信息
          this.errors = {
            code: err.response.data.msg,
          };
        });
    },
    getVerifyCode() {
      if (this.validatePhone()) {
        this.validateBtn();
        // 发送网络请求
        this.$axios
          .post("/api/posts/sms_send", {
            tpl_id: "19504824",
            key: "e7386c9b559d38c45454654cee1dd731",
            phone: this.phone,
          })
          .then((res) => {
            console.log(res);
          });
      }
    },
    validatePhone() {
      // 验证手机号码
      if (!this.phone) {
        this.errors = {
          phone: "手机号码不能为空",
        };
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        this.errors = {
          phone: "请填写正确的手机号码",
        };
        return false;
      } else {
        this.errors = {};
        return true;
      }
    },
    validateBtn() {
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.btnTitle = "获取验证码";
          this.disabled = false;
        } else {
          // 倒计时
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      }, 1000);
    },
  },
  components: {
    InputGroup,
  },
};
</script>

<style>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}

.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}
.text_group,
.login_des,
.login_btn {
  margin-top: 20px;
}
.login_des {
  color: #aaa;
  line-height: 22px;
}
.login_des span {
  color: #4d90fe;
}
.login_btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}
</style>