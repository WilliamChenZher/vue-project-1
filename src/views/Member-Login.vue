<script setup lang="ts">
import { ref} from "vue"
import { auth } from "../firebase/firebase"
import { FirebaseError } from "firebase/app"
import { useRouter } from "vue-router"
import {
  signInWithEmailAndPassword
} from "firebase/auth"
import { isLogin,isOpenPrompt,promptcontent} from '@/main'

const email = ref("")
const password = ref("")
const router = useRouter()

async function login() {
  try {   
    await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    )
    isLogin.value = true
    isOpenPrompt.value = true
    promptcontent.value = "登入成功"
    router.push("/") 
    localStorage.setItem("-a1阿djf^sh9_哲g~7&qu好55)11r帥t3@@4n)", JSON.stringify({"":""}))
  }
  catch(error) {
    if(error instanceof FirebaseError) {
      if(error.code === "auth/invalid-credential") {
        isOpenPrompt.value = true
        promptcontent.value = "帳號或密碼錯誤"
      }
      else if (error.code === "auth/invalid-email") {
        isOpenPrompt.value = true
        promptcontent.value = "電子郵件地址錯誤"
      }
      else {
        isOpenPrompt.value = true
        promptcontent.value = "登入失敗"

      }

    }
  }
}
</script>
<template>
  <h1>會員登入</h1>
  <section class="login">
    <div class="account">
        <p>電子郵件</p>
        <input v-model="email"
    type="email"
    placeholder="輸入Email">
    </div>
    <div class="password">
        <p>密碼</p>
        <input v-model="password"
        type="password"
        placeholder="輸入密碼">
    </div>
    <button  @click="login">送出</button>
  </section>
</template>
<style scoped>  
*{
    /* border:1px solid red; */
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

  h1{
    line-height: 100px;
    width: 80%;
    text-align: center;
    border-bottom: 3px solid black;
    margin-bottom: 10px;
  }
  .login{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    gap:10px; 
  }
  .account, .password{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 80%;
    font-size: 24px;
  }
  .account input, .password input{
    padding: 20px;

  }
  /* .account p, .password p{

  } */
  button{
    width: 150px;
    height: 80px;
    margin-top: 20px;
    font-size: 18px;
    cursor: pointer;
    background-color: green;
    color:white;
    border-radius: 10%;
    cursor:pointer;
  }
</style>
