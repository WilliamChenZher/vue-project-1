import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeVeiw.vue'
import MemberCommon from '../views/Member-Common.vue'
import OrderSearch from '../views/Order-Search.vue'
import ShoppingCart from '../views/Shopping-Cart.vue'
import MemberForgotPassword from '../views/Member-ForgotPassword.vue'
import MemberLogin from '../views/Member-Login.vue'
import MemberData from '../views/Member-Data.vue'
import MemberRegister from '../views/Member-Register.vue'
import { isLogin,isOpenPrompt,promptcontent } from '@/main'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {   
      path:'/Member-Data',
      component: MemberData 
  }
  ,{
      path: '/Member-Common',
      component: MemberCommon,
      children: [
    {
      path: 'Member-ForgotPassword',
      component: MemberForgotPassword
    },
    {
      path: 'Member-Login',
      component: MemberLogin
    },
    {
      path: 'Member-Register',
      component: MemberRegister
    },
    {
      //預設自動跳轉頁
      path: '',
      redirect: 'Member-Login'
    }
  ]
    },
    {
      path: '/Order-Search',
      component: OrderSearch
    },
    {
      path: '/Shopping-Cart',
      component: ShoppingCart
    },{
      path: '/Member-ForgotPassword',                                                       
      component: MemberForgotPassword
    },
    {
      path: '/',
      component: Home
    }],
})

const LogoutPath = [
  "/Member-Common/Member-Login",
  "/Member-Common/Member-Register",
  "/Member-Common/Member-ForgotPassword"
]

const LoginPath = [
  "/",
  "/Member-Data",
  "/Order-Search",
  "/Shopping-Cart"
]

router.beforeEach((to) => {
  if (
    isLogin.value &&
    LogoutPath.includes(to.path)
  ) { 
    return "/"
  }

  if (
    !isLogin.value &&
    LoginPath.includes(to.path)
  ) {
    isOpenPrompt.value = true
    promptcontent.value = "請先登入"
    return "/Member-Common/Member-Login"
  }

})

export default router
