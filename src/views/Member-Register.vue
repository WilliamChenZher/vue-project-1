<script setup lang="ts">

import { ref } from "vue"
import { auth,db } from "../firebase/firebase"
import {
  doc,
  setDoc
} from "firebase/firestore"
import { FirebaseError } from "firebase/app"
import {
  createUserWithEmailAndPassword
} from "firebase/auth"
import { isLogin,isOpenPrompt,promptcontent} from "@/main"


const email = ref("")
const password = ref("")
const confirmpassword = ref("")

async function register() {

  try {
    console.log("email:", email.value)
    console.log("password:", password.value)
    console.log("confirmpassword:", confirmpassword.value)
    if( confirmpassword.value == password.value){
    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      )

    promptcontent.value = "註冊成功"
    email.value = "";
    password.value = "";
    confirmpassword.value = "";
    console.log("userCredential",userCredential.user)
    isLogin.value = true


    localStorage.setItem("-a1阿djf^sh9_哲g~7&qu好55)11r帥t3@@4n)", JSON.stringify({"":""}))
    const uid = userCredential.user.uid

    await setDoc(doc(db, "users", uid), {
      StoreName: "未設定資料",
      BuyerName: "未設定資料"
    }), { merge: true }//只修改指定欄位
    }
    else{
      promptcontent.value = "密碼不一致"
      console.log("密碼不一致")
    }

  } catch(error) {
    if (error instanceof FirebaseError) {
    const errorCode = error.code;
    
    if(errorCode=="auth/weak-password")
    {
      promptcontent.value = "密碼太弱了"
      console.log("密碼太弱了");
    }
    else if(errorCode=="auth/invalid-email")
    {
      promptcontent.value = "無效的電子郵件"
      console.log("無效的電子郵件");
    }
    else if(errorCode=="auth/email-already-in-use")
    {
      promptcontent.value = "此電子郵件已註冊過"
    }
    else
    {
      promptcontent.value = "註冊失敗"      
    }
  }
  }
      isOpenPrompt.value = true;
}
</script>
<template>
  <h1>會員註冊</h1>
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
        placeholder="輸入password">
    </div>
    <div class="confirm-password">
        <p>確認密碼</p>
        <input v-model="confirmpassword"
        type="password"
        placeholder="輸入password">
    </div>
    <button @click="register">送出</button>
  </section>
</template>
<style scoped>  
*{
    box-sizing: border-box;
    /* border: 1px solid red; */
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
  .account, .password, .confirm-password{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 80%;
    font-size: 24px;
  }
  .account input, .password input ,.confirm-password input{
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