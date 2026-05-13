<script setup lang="ts">
import{ref} from "vue"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "@/firebase/firebase"
import { FirebaseError } from "firebase/app"
import {isOpenPrompt,promptcontent} from "@/main"
const email = ref("")

async function resetPassword() {

  try {

    await sendPasswordResetEmail(
      auth,
      email.value
    )

    isOpenPrompt.value = true
    promptcontent.value = "重設密碼已成功寄出"

  }
  catch(error) {
    if(error instanceof FirebaseError)
    isOpenPrompt.value = true
    promptcontent.value = "寄送失敗"

  }

}
</script>
<template>

  <h1>忘記密碼</h1>
  <section class="login">
    <div class="E-mail">
        <p>電子郵件</p>
        <input v-model = "email" vtype="text"
        placeholder="輸入email">
    </div>
    <button @click="resetPassword">送出</button>
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
  .account, .E-mail{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 80%;
    font-size: 24px;
  }
  .account input, .E-mail input{
    padding: 20px;

  }
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