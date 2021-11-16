import React, { useEffect } from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";

function Index({user,userFollowerStats}) {

  useEffect(() => {
    document.title= `Welcome,${user.name.split(' ')[0]}`;
  },[])







  return <div>
    <h1>Hello Next.js</h1>
  </div>;
}


export default Index;
