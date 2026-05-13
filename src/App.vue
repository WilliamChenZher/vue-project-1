<script setup lang="ts">
import { ref, onMounted} from 'vue'
import { auth ,db} from "./firebase/firebase"
import { onAuthStateChanged } from "firebase/auth"
import {StoreName, BuyerName} from "./main.ts"
import {
  doc,
  getDoc
} from "firebase/firestore"
import { isLogin,isOpenPrompt,promptcontent } from '@/main.ts'
import router from './router' //設定路由器

async function swit(){
  isOpenPrompt.value = false;
  if(isLogin.value === true)
  router.push("/") 
}

// 🔥 控制選單開關
const isOpenMenu = ref(false)

// 🔥 點擊切換
const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}
onMounted(() => {
  onAuthStateChanged(auth, async(user) => {
    if (user) {
    isLogin.value = true
    //從firestore讀取資料放到標籤中
      try {
    const docSnap = await getDoc(
        doc(db, "users", user.uid)
      )
      //有進行查資料的動作
      if (docSnap.exists()) {
        StoreName.value = docSnap.data().StoreName ?? "資料讀取失敗"
        BuyerName.value = docSnap.data().BuyerName ?? "資料讀取失敗"
      }
      else {
          StoreName.value = "資料讀取失敗"
          BuyerName.value = "資料讀取失敗"
        }
        //連查資料的動作都失敗
        }catch {
          StoreName.value = "資料讀取失敗"
          BuyerName.value = "資料讀取失敗"
      }

    } else {
      isOpenPrompt.value = true
      promptcontent.value = "你已登出"
      StoreName.value = "尚未登入"
      BuyerName.value = "尚未登入"
      isLogin.value = false
    }
  }
  
)
})



</script>

<template>
  <body>
    <div @click = "swit" 
    class ="prompt" 
    :class="{sucess:isOpenPrompt}">
    <div  @click.stop class="smallprompt">
      <h2>{{ promptcontent }}</h2>
      <button @click.stop="swit">確認</button>
    </div>
  </div>
    <header>
      <div class="header-center">
      <RouterLink class="Home" to="/">      
        <h1>BestStore</h1>
      </RouterLink>
      <!-- 漢堡按鈕 -->
      <nav class="menu-Btn" >
        <div  @click="toggleMenu" class="menuBtn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class = "menu" :class="{ active: isOpenMenu }">
          <RouterLink v-if="!isLogin" to="/Member-Common/Member-Login">會員登入</RouterLink>
          <RouterLink v-if="isLogin" to="/Member-Data">會員資訊</RouterLink>
          <RouterLink to="/Order-Search">訂單查詢</RouterLink>
          <RouterLink to="/Shopping-Cart">購物車</RouterLink>
        </div>
      </nav>
      </div>
      
    </header>
  <main>
    <RouterView />
  </main>
    <footer>
        <p>&copy; 2026 BestStore. All rights reserved.</p>
    </footer>
  </body>
    
 
</template>
<!-- <style>
*{
  /* border:1px solid red; */
}
</style> -->
<style scoped>
*{
  box-sizing:border-box;
  /* border: 1px solid red; */
  margin: 0px;
  padding: 0px;

}
body{
display:flex;
flex-direction: column;
align-items:center;
min-height: 100vh;

}
a{
  color:black;
  text-decoration:none;
}
footer{
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: green;
  color:white;

}
header{
  display:flex;
  align-items:center;
  justify-content: center;
  width: 100%;
  height: 100px;
  position: fixed;
  padding: 15px;
  background-color: green;
  margin-bottom:140px ;
  z-index: 1000;

}
.header-center {  
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 100px;
}
.Home {
  text-decoration: none;
  flex-shrink: 0;
}

.Home h1 {
  margin: 0;
    color:white

}
.menu-Btn{
   position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.menu{
  display:flex; 
}
.menu a{
  text-align: center;
  color:white;
  padding:20px;
}
.menu a:hover{
  background-color: gray;
}
.menuBtn{
  display:none;
  flex-direction:column;
  cursor:pointer; 


}
main{
  width: 100%;
  max-width: 1480px;
  padding: 200px 100px;
  display: flex;
  justify-content: center;
  align-items:flex-start;
  gap:130px;
  flex: 1;
  /* border: 1px solid red; */


}

.prompt{
  opacity: 0;
  visibility: hidden;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

}
.smallprompt{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:20px;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: 
  opacity 1s,
  transform 0.5s;
  background-color: white;
  width:400px;
  max-width: 100%;

}
.smallprompt button{  
  width:100px;
  height:50px;
  font-size: 10px;
  cursor:pointer;
  background-color: green;
  color:white;
}
.prompt.sucess{
  opacity: 1;
  visibility: visible;
} 
.prompt.sucess .smallprompt{
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
@media (max-width: 1400px) { 
  main{
    padding: 150px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:50px;
  }

}
@media (max-width: 600px) { 
  .smallprompt h2{
      font-size:16px;
    
    }      
    .smallprompt button{
      width: 70px;
      height:45px;
    }
  header{
    height:60px;
  }
  .header-center {
    height: 60px;
  } 
  .Home h1 {
  font-size: 20px;
  }
  .menu-Btn{
    width: 60px;
    right:0px;
  }  
  .menu{
  display:none;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  width: 80px;
  border:1px solid gray;
  }
    /* 🔥 打開時顯示 */
  .menu.active{
    display:flex;
  }
  .menu a{  
    padding: 10px 0px 10px 0px;
    color:green;
  }
  .menu a:hover{
    background-color: lightgray;
  }
  .menuBtn{
    display:flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    gap:5px;
  }
  .menuBtn span{
    width: 80%;
    height: 4px;
    background-color: white;
  }
}

  @media (max-width: 400px) { 
    .smallprompt h2{
      font-size:12px;
    
    }      
    .smallprompt button{
      width: 50px;
      height:25px;
    }
  header{
    height:40px;
  }
  .header-center {
    height: 40px;
  }
  footer{
    font-size: 12px;
  }
}
@media (max-height: 200px) { 
  .menu {
          height: 100px;
  overflow-y: auto;     /* 超出高度就可以上下滾動 */

}}
</style>
