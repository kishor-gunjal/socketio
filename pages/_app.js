import App from "next/app";
import Layout from "../components/Layout/Layout";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import {parseCookies,destroyCookie} from "nookies";
import { reDirectUser } from "../utils/authUser";
import baseUrl from "../utils/baseUrl";




const MyApp = ({Component, pageProps}) => {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps}/>
    </Layout>
  );
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  const {token} = parseCookies(ctx);
  let pageProps = {};
  const protectedRoute = ctx.pathname === '/';

  if(!token) {
    protectedRoute &&  reDirectUser(ctx,'/login')
  }else {
    if(Component.getInitialProps){
      pageProps = await Component.getInitialProps(ctx);
    }


    try {

      const response = await axios.get(`${baseUrl}/api/auth`,{headers: {Authorization:token}})

      const {user,userFollowerStats} = response.data;

      if(user){
        !protectedRoute &&  reDirectUser(ctx,'/')
        pageProps.user = user;
        pageProps.userFollowerStats = userFollowerStats;
      }




    }catch (error) {
      destroyCookie(ctx, 'token');
      reDirectUser(ctx,'/login')
      console.log(error);
    }








  }

 
  // console.log(pageProps);
   return {pageProps};

}

export default MyApp;
