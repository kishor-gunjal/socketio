import React,{ useEffect} from 'react';
import {Search,List,Image} from 'semantic-ui-react'
import baseUrl from '../../utils/baseUrl';
import axios from "axios";
import cookie from 'js-cookie';



let cancel;//to cancel pending requests
const  SearchComponent=()=> {

    const [text,setText]=React.useState('');
    const [loading,setLoading]=React.useState(false);
    const [results,setResults]=React.useState([]);
    const [search,setSearch]=React.useState('')
    

    const handleChange=async(e)=>{
           const {value}=e.target;
           if(value.lenght===0) {
               results.length>0 && setResults([]);
               return setText(value);}
           setText(value);
           setLoading(true);
           try{
            cancel && cancel();
            const CancelToken = axios.CancelToken;
            const token = cookie.get('token');

            const response = await axios.get(`${baseUrl}/api/search/${value}`,{
              headers: {
                  Authorization:  token,
                  cancelToken: new CancelToken(cancler=>{
                        cancel=cancler;
                  })
              }
            })


            if(response.data.length>0){
              return  setLoading(false);
            }else{
                setResults(response.data);
            }


           }catch(error){
               console.log(error);
               alert(error.message);

           }
           setLoading(false);

    }


    useEffect(()=>{
        if(text.length===0 && loading)
        setLoading(false);
    },[text])

    const ResultRenderer =({_id,profilePicUrl,name})=>{
        return(
            <>
            <List key={_id}>
                <List.Item>
                    <Image avatar src={profilePicUrl} alt=''/>
                    <List.Content header={name} as='a'/>

                </List.Item>
            </List>



            </>
        )
     }

    return (
        <>
        <Search onBlur={() =>{results.length>0 && setResults([])
         loading && setLoading(false)
        setText('')}}
         
         loading={loading} value={text} 
         resultRenderer={ResultRenderer}
         results={results}
         onSearchChange={handleChange}
         minCharacters={1}
         onResultSelect={(e, data) =>
            Router.push(`/${data.result.username}`)
         }/>


            
        </>
    )
}

export default SearchComponent
