<script setup lang="ts">
import { ref } from "vue"
import { auth, db } from "../firebase/firebase"
import {
  doc,
  setDoc
} from "firebase/firestore"
import { signOut } from "firebase/auth"
import { useRouter } from "vue-router"
import {StoreName, BuyerName,isLogin} from "../main.ts"
const router = useRouter()


const isChanging = ref(false)



async function changing(){
    isChanging.value = true;
} 

const change = async () => {
    isChanging.value = false;
    const uid = auth.currentUser?.uid
    if (!uid) {
    console.log("尚未登入")
    return
  }
  //儲存標籤資料到firestore
  await  setDoc(
    doc(db, "users", uid),
    {
      StoreName: StoreName.value,
      BuyerName: BuyerName.value
    }, { merge: true }//只修改指定欄位
)   
  console.log("修改成功")
}
const logout = async () => {
  await signOut(auth)
  
  isLogin.value = false
  router.push("/Member-Common/Member-Login") 
  localStorage.removeItem("-a1阿djf^sh9_哲g~7&qu好55)11r帥t3@@4n)")
  console.log("已登出")
  StoreName.value = "載入中..."
  BuyerName.value = "載入中..."
}
</script>
<template>
    <div class="container">
<section class="container1">
        <h1>買家設定</h1>
        <div class="Store-Name">
            <p>姓名:</p>
            <input type="text"
            placeholder="輸入賣家姓名"
            v-model="StoreName"
            :readonly="!isChanging"
            :class="{ changeinput: isChanging }">

        </div>
        <div class="Buyer-Name">
            <p>地址:</p>
            <input type="text"
            placeholder="輸入買家姓名"
            v-model="BuyerName"
            :readonly="!isChanging"
            :class="{ changeinput: isChanging }">

        </div>
        <button v-if = "!isChanging" @click = "changing">修改</button>
        <button class="confirmbutton" v-else @click = "change">確認</button>    </section>
    <section class="container2">
        <h1>賣場設定</h1>
        <div class="Store-Name">
            <p>名稱:</p>
            <input type="text"
            placeholder="輸入賣家姓名"
            v-model="StoreName"
            :readonly="!isChanging"
            :class="{ changeinput: isChanging }">

        </div>
        <div class="Buyer-Name">
            <p>地址:</p>
            <input type="text"
            placeholder="輸入買家姓名"
            v-model="BuyerName"
            :readonly="!isChanging"
            :class="{ changeinput: isChanging }">

        </div>
        <button v-if = "!isChanging" @click = "changing">修改</button>
        <button class="confirmbutton" v-else @click = "change">確認</button>
        
    </section>
           <button @click = "logout" class = "logout">登出</button>
    </div>
    
</template>

<style scoped>
*{
    /* border: 1px solid red; */
    box-sizing: border-box;
}
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center ;
  gap:130px;
  /* border: 1px solid red; */
}
input{
border: 1px solid black;

}
input:active{
  border: 1px solid black;
}   
input:focus{
  outline: none;
}   
.changeinput:focus{
    border: 5px solid black;
}
.container1,.container2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:40px;
    width:100%;
    border:1px solid black;
    padding: 40px;
    border-radius:20px;
    position: relative;
}
.container1 div,.container2 div{
    /* border: 1px solid red; */
    display: flex;
    align-items:center;
    justify-content: center;
    gap:30px;
    


}
.container1 p,.container2 p{
    text-align: center;
    font-size: 30px;
}
.container1 input,.container2 input{
    padding: 20px;
    width:80%;
}
.container1 h1,.container2 h1{
    text-align: center;
}
button{
    width:200px;
    height: 80px;
    margin:0 auto;
    cursor:pointer;
}
.confirmbutton{
    font-size: 25px;
    width:200px;
    height: 80px;
    margin:0 auto;
    cursor:pointer;
    border-radius: 20px;
    background-color: silver;
    color: white;

}
.logout{
    width:100px;
    background-color: red;
    color:white;
    border: 0px;
    border-radius: 10px;
}
.logout:hover{
    background-color:firebrick;
}
.logout:active{
    background-color:darkred;
}
@media (max-width:1400px){

    .container1 div,.container2 div{
    flex-direction: column;
    }
}
@media (max-width:600px){
    button{
        width: 150px;

    }
    .confirmbutton{
        width: 150px;

    }

}
</style>
