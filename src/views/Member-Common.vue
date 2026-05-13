<script  lang="ts">  
    </script>
    <template>
          <section class="choose">
            <div>
              <RouterLink to="/Member-Common/Member-Login/">    
              <span class="corner top-left"></span>
              <span class="corner top-right"></span>
              <span class="corner bottom-left"></span>
              <span class="corner bottom-right"></span> 
                會員登入
              </RouterLink>
            </div>
            <div>
              <RouterLink to="/Member-Common/Member-ForgotPassword">    
              <span class="corner top-left"></span>
              <span class="corner top-right"></span>
              <span class="corner bottom-left"></span>
              <span class="corner bottom-right"></span>     
                忘記密碼
              </RouterLink>
            </div>
            <div>
              <RouterLink to="/Member-Common/Member-Register">    
                <span class="corner top-left"></span>
              <span class="corner top-right"></span>
              <span class="corner bottom-left"></span>
              <span class="corner bottom-right"></span>
                  會員註冊
              </RouterLink>
            </div>
          </section>
          <main>
            <RouterView />
          </main>

    </template>
    <style scoped>
    *{
      box-sizing: border-box;
      /* border: 1px solid red; */
      /* outline: 1px solid red; */
    }
    a{
      color:black;
      text-decoration:none;
    }
    .choose{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width:20%;  
      font-size: 24px;
      text-align: center;
    } 
    .choose div{
      height: 180px;
      cursor: pointer;
      border: 1px solid black;

    }
    .choose a{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      line-height: 200px;
      padding: 20px;
    }
    /* 四角共用 */
  .corner {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: 
    opacity 1s,
    transform 1s; 
    width: 30px;
    height: 30px;
  }
  /* router-link-active是routerlink元件的預設*/
  /* router-link-active會顯示在元件的連結和子連結*/
  /* router-lin-exactk-active是routerlink元件的預設*/
  /* router-link-exact-active會顯示在元件的連結不包含子連結*/
 .router-link-active .corner,
.router-link-exact-active .corner {
  opacity: 1;
    visibility: visible;

  transform: translateY(0);
}
  /* 左上 */
  .top-left {
    top: 20px;
    left: 20px;

    border-top: 10px solid green;
    border-left: 10px solid green;
  }

  /* 右上 */
  .top-right {
    top: 20px;
    right: 20px;

    border-top: 10px solid green;
    border-right: 10px solid green;
  }

  /* 左下 */
  .bottom-left {
    bottom: 20px;
    left: 20px;

    border-bottom: 10px solid green;
    border-left: 10px solid green;
  }

  /* 右下 */
  .bottom-right {
    bottom: 20px;
    right: 20px;

    border-bottom: 10px solid green;
    border-right: 10px solid green;
  }
    .choose div:hover{
      background-color: lightgray;
    }
    main{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center; 
      border-radius: 10%;
      width: 80%;
      padding: 60px 20px;
      border: 1px solid black;

    }
    .input-box{ 
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      padding: 20px;
      border-radius: 5%;
      border: 1px solid black;
    } 
    .input{
      justify-content: center;
      text-align: center;
      width:80%;     
      display: flex;
      padding: 20px;
    }
    .input-box div{
      width: 100%;
      margin: 10px;
    }
    .input-box p{
      text-align: left;
      margin-bottom: 5px;
      padding:0px 0px 10px 0px;
    }
    .input-box input{
      width: 100%;
    }
    input{
      padding: 20px;
    }
    button{
      width: 20%;
      height:40px;
      margin-top: 30px;
      background-color: blue;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    @media (max-width: 1400px) { 
      .choose{
        flex-direction: row;
        width: 100%;
      }
      .choose div{
        height: 160px;
        flex:1;

      }
      .choose a{

        line-height: 160px;
      }
  }
  @media (max-width: 500px) { 
    .corner {
    width: 10px;
    height: 10px;

    }
    /* 左上 */
  .top-left {
    top: 10px;
    left: 10px;

    border-top: 2px solid green;
    border-left: 2px solid green;
  }

  /* 右上 */
  .top-right {
    top: 10px;
    right: 10px;

    border-top: 2px solid green;
    border-right: 2px solid green;
  }

  /* 左下 */
  .bottom-left {
    bottom: 10px;
    left: 10px;

    border-bottom: 2px solid green;
    border-left: 2px solid green;
  }

  /* 右下 */
  .bottom-right {
    bottom: 10px;
    right: 10px;

    border-bottom: 2px solid green;
    border-right: 2px solid green;
  }
      .choose{
        flex-direction: row;
        width: 100%;
      }
      .choose div{
        height: 100px;
        flex:1;

      }  
      .choose a{

        line-height: 100px;
        font-size: 16px;
      }
      main{
        width: 100%;

      }
  }
  @media (max-width: 400px) {
      .choose div{
        height: 60px;
        flex:1;

      }
      .choose a{

        line-height: 60px;
        font-size: 6px;
      }

  }
    </style>