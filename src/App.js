import React,{useState} from 'react';
import {Forma} from "./Forma";
import {Content} from "./Content";
import {Registration} from "./Registration"


export const App=()=> {
  const [login, setLogin] = useState(0);
  const [password, setPassword] = useState(0);
  //const [logged,setLogged]=useState(false);
  const [signed,setSignIn]=useState(false);
  const [clicked,setClick]=useState(false);
  const [name,setName]=useState(0);
  const [surname,setSurname]=useState(0);
  const [years,setYears]=useState(0);
  const [mail,setMail]=useState(0);

  const[registrationPassword,setRegistrationPassword]=useState(0);

  const generateLogin=(e)=>{
    setLogin(e.target.value)
  }
  const generatePassword=(e)=>{
    setPassword(e.target.value)
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
  const register=(e)=>{
    setSignIn(false)


    let obj= {
      FirstName:name,
      LastName:surname,
      Age:years,
      email:mail,
      Password:registrationPassword
    }
    let serialObj=JSON.stringify(obj);
    localStorage.setItem(obj.email,serialObj);



  }
const generatePet=()=>{

}


  return (

      <div>
        <div>   {!signed?<Registration firstName={generateFirstName} registrationPassword={generateRegistrationPassword} lastName={generateLastName} age={generateAge} Email={generateEmail} handleSignIn={sign} handleRegister={register}/>:<Forma  handleChangeLogin={generateLogin} handleChangePassword={generatePassword} handleClick={generateClick}/>}
        </div>
        <div>{
          clicked && JSON.parse(localStorage.getItem(login)).email === login && JSON.parse(localStorage.getItem(login)).Password === password &&
          <Content handleAdd={generatePet}/>
        }
        </div>
      </div>


  )
}