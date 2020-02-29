<template>
    <a-form class="loginform" layout="inline" :form="form" @submit="handleSubmit">
    <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入用户名!' }] },
        ]"
        placeholder="用户名"
      >
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码!' }] },
        ]"
        type="password"
        placeholder="密码"
      >
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())" style="width:65px;">
        登陆
      </a-button>
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="xs" :disabled="hasErrors(form.getFieldsError())" style="width:65px;">
        注册
        <!-- {{this.$store.state.logined}} -->
      </a-button>
    </a-form-item>
  </a-form>
</template>



<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    handleSubmit(e) {
      console.log(this)
      console.log(this.$refs)
      console.log(this.$parent)
      console.log(this.$store.state.username)
      console.log(this.$store.state.logined)
      const hide = this.$message.loading("登陆中",1);


      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);

          // this.$message.destroy(hide)
          
          console.log(values)
          
          //发起http请求
          let data_ = new FormData()

          data_.append('username', values.userName);
          data_.append('password', values.password);
          data_.append('123','123');

          let config = {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          }


          // data_ = {
          //   "username": values.userName,
          //   "password": values.password,
          // };

          // console.log(data_.getAll())

          this.$axios.post("http://localhost:18884/user/login", data_, config)
                .then(res => {
                  console.log(res)
                  console.log(res.data)
                  if (res.data.flag == true){
                    if (res.data.message == "登陆成功"){
                      console.log(res.data.data.accessToken);
                      console.log(res.data.data.refreshToken);
                      console.log(res.data.data.jti);
                      this.$message.success(res.data.message)


                      localStorage.setItem("token",res.data);

                      console.log(this.$store.state.username);
                      // this.$common.setUsername(values.userName);
                      // this.$common.setLogined(true);

                      this.$store.commit("setUsername", values.userName);
                      this.$store.commit("setLogined", true);
                      // this.$common.username = values.userName;
                      // this.$common.logined = true;
                      console.log(this.$store.state.username);

                      this.$router.push('/')
                      location.reload()
                      
                    }
                  }

                })
                .catch(err => {
                  console.log(err)
                  this.$message.error(err)
                })


        }
      });
    },
  },
};
</script>



<style scoped>

/* .loginform{ */
    /* background-color:blue */
/* } */

</style>
