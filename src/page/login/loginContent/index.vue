<template>
  <div class="loginContent">
    <div class="loginContent-headerImg">
      <img :src="$getImageUrlByModules(ImageModules.loginPage, '1.png')" alt="" />
    </div>
    <div class="loginContent-form">
      <el-form
        ref="loginFormRef"
        :model="loginFormProps"
        status-icon
        :rules="rules"
        label-width="55px"
        class="login-Form"
      >
        <el-form-item label="账号" prop="username" class="login-input">
          <el-input
            v-model.number="loginFormProps.username"
            @keydown.enter.native="submitForm(loginFormRef)"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password" class="login-input">
          <el-input
            v-model="loginFormProps.password"
            @keydown.enter.native="submitForm(loginFormRef)"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item class="bottom-btn">
          <div class="submit" @click="submitForm(loginFormRef)">确认</div>
          <div class="reset" @click="resetForm(loginFormRef)">重置</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userLogin } from "@/api/user";
import { ImageModules } from "@/enum";
import { ref, reactive, getCurrentInstance, ComponentInternalInstance } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import type { FormInstance } from "element-plus";

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const router = useRouter();
const loginFormRef = ref<FormInstance>();
const loginFormProps = ref({
  username: "",
  password: ""
});

const rules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(valid => {
    if (valid) {
      userLogin(loginFormProps.value).then(({ data }) => {
        if (data.loginInfo.isSuccessLogin) {
          router.push(proxy?.$indexPage || "");
        } else {
          ElMessage.error(data.loginInfo.msg);
        }
      });
    } else {
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="scss" scoped>
.loginContent {
  width: 100%;
  padding: 20px;
  transition: all 0.5s;
  transform-origin: left;
  position: absolute;

  .loginContent-headerImg {
    margin-top: 18px;

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      transition: all 0.5s;
      cursor: pointer;
      border: 2px solid #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

      &:hover {
        transform: scale(1.1) rotateZ(360deg) translateY(18px);
      }
    }
  }

  .loginContent-form {
    width: 60%;
    margin: 28px auto 0;

    .login-Form {
      .login-input {
        ::v-deep(.el-input) {
          .el-input__wrapper {
            background: rgba(255, 255, 255, 0.5);
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

            .el-input__inner {
              outline: none;
            }
          }
        }
      }

      .bottom-btn {
        ::v-deep(.el-form-item__content) {
          justify-content: center;

          .submit,
          .reset {
            padding: 3px 28px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin-top: 8px;
            cursor: pointer;
            background: rgba(255, 255, 255, 0.5);
            transition: all 0.1s;

            &:hover {
              transform: scale(1.1);
            }
          }

          .reset {
            margin-left: 28px;
          }
        }
      }
    }
  }
}
</style>
