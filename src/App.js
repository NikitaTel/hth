import React,{useState} from 'react';
import {Forma} from "./Forma";
import {Content} from "./Content";
import {Registration} from "./Registration"
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export const App=()=> {
  // const [login, setLogin] = useState(0);
  // const [password, setPassword] = useState(0);
  // //const [logged,setLogged]=useState(false);
  const [signed,setSignIn]=useState(false);
  const [clicked,setClick]=useState(false);
  const [name,setName]=useState(0);
  const [surname,setSurname]=useState(0);
  const [years,setYears]=useState(0);
  const [mail,setMail]=useState(0);

  const[registrationPassword,setRegistrationPassword]=useState(0);

  // const generateLogin=(e)=>{
  //   setLogin(e.target.value)
  // }
  // const generatePassword=(e)=>{
  //   setPassword(e.target.value)
  // }

const showContent=()=>{
     return(<Content/>)
}

  const sign=()=>{
    setSignIn(true)
  }

  const generateFirstName=(e)=>{
    setName(e.target.value)
  }
  const generateLastName=(e)=>{
    setSurname(e.target.value)
  }
  const generateAge=(e)=>{
    setYears(e.target.value)
  }
  const generateEmail=(e)=>{
    setMail(e.target.value)
  }
  const generateRegistrationPassword=(e)=>{
    setRegistrationPassword(e.target.value)
  }

  const generateClick=()=>{
    setClick(true)
  }
  const register=()=>{
    setSignIn(false)


    let obj= {
      FirstName:name,
      LastName:surname,
      Age:years,
        pochta:mail,
      Password:registrationPassword
    }
    let serialObj=JSON.stringify(obj);
    localStorage.setItem(obj.pochta,serialObj);



  }



  return (


          <div>

           {!signed?<Registration firstName={generateFirstName} registrationPassword={generateRegistrationPassword} lastName={generateLastName} age={generateAge} Email={generateEmail} handleSignIn={sign} handleRegister={register}/>:<Forma />}

          </div>




  )
}