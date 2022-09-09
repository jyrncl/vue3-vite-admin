<template>
  <div class="registeredContent">
    <div class="registeredContent-headerImg">
      <img :src="$getImageUrlByModules(ImageModules.loginPage, '1.png')" alt="" />
    </div>
    <div class="registeredContent-form">
      <el-form ref="registeredFormRef" :model="registeredFormProps" status-icon :rules="rules" label-width="80px" class="login-Form">
        <el-form-item label="账号" prop="username" class="login-input">
          <el-input v-model.number="registeredFormProps.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password" class="login-input">
          <el-input v-model="registeredFormProps.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass" class="login-input">
          <el-input v-model="registeredFormProps.checkPass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item class="bottom-btn">
          <div class="submit" @click="submitForm(registeredFormRef)">确认</div>
          <div class="reset" @click="resetForm(registeredFormRef)">重置</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ImageModules} from '@/enum';
import {useRegisteredValidate} from '@/hooks/useFormValidateRules';
import type {FormInstance} from 'element-plus';
import {reactive} from 'vue';

const {registeredFormProps, registeredFormRef, validatePass, validateCheckPass} = useRegisteredValidate();

const rules = reactive({
  username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
  password: [{required: true, validator: validatePass, trigger: 'blur'}],
  checkPass: [{required: true, validator: validateCheckPass, trigger: 'blur'}],
});

const emits = defineEmits<{
  (e: 'changeTag', tab: string): void;
}>();

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      emits('changeTag', 'login');
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
.registeredContent {
  width: 100%;
  padding: 20px;
  transition: all 0.5s;
  position: absolute;
  transform-origin: left;

  .registeredContent-headerImg {
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

  .registeredContent-form {
    width: 60%;
    margin: 28px auto 0 80px;

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
