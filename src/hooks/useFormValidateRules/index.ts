import {ref} from 'vue';
import type {FormInstance} from 'element-plus';

// 注册验证规则
export const useRegisteredValidate = () => {
  const registeredFormRef = ref<FormInstance>();
  const registeredFormProps = ref({
    password: '',
    checkPass: '',
    username: '',
  });

  const validatePass = (rule: any, value: any, callback: any) => {
    if (!value) {
      callback(new Error('请输入密码'));
    } else {
      if (registeredFormProps.value.checkPass) {
        registeredFormRef.value?.validateField('checkPass', () => null);
      }
      callback();
    }
  };
  const validateCheckPass = (rule: any, value: any, callback: any) => {
    if (!value) {
      callback(new Error('请确认密码'));
    } else if (value !== registeredFormProps.value.password) {
      callback(new Error('两次输入的密码不一致'));
    } else {
      callback();
    }
  };

  return {registeredFormProps, registeredFormRef, validatePass, validateCheckPass};
};
