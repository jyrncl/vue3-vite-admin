<template>
  <div class="loginContent">
    <div class="loginContent-headerImg">
      <img
        :src="$getImageUrlByModules(ImageModules.loginPage, '1.png')"
        alt=""
      />
    </div>
    <div class="loginContent-form">
      <el-form-item label-width="120px" label="账号" prop="age">
        <el-input v-model.number="ruleForm.age" />
      </el-form-item>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="当前密码" prop="pass">
          <el-input
            v-model="ruleForm.pass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >确认</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ImageModules } from "@/enum";
import { ref, reactive } from "vue";
import type { FormInstance } from "element-plus";

const ruleFormRef = ref<FormInstance>();

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("Please input the age"));
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error("Please input digits"));
    } else {
      if (value < 18) {
        callback(new Error("Age must be greater than 18"));
      } else {
        callback();
      }
    }
  }, 1000);
};

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请确认密码"));
  } else if (value !== ruleForm.pass) {
    callback(new Error("两次输入的密码不一致"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  pass: "",
  checkPass: "",
  age: "",
});

const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
  age: [{ validator: checkAge, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
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
  .loginContent-headerImg {
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      transition: all 0.2s;
      cursor: pointer;
      border: 2px solid #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .loginContent-form{
    width: 80%;
    margin-top: 15px;
  }
}
</style>
