import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import "./Content.css";
export const Content=(props)=>{
    const [Name,setName]=useState("");
    const [Species,setSpecies]=useState("");
    const [Age,setAge]=useState("");
    const [clicked,setClicked]=useState(false)

    const generateName=(e)=>{
        setName(e.target.value)
        let serialObj=JSON.stringify(Name)
        localStorage.setItem(props.userEmail,serialObj);
    }
    const generateSpecies=(e)=>{
        setSpecies(e.target.value)
        let serialObj=JSON.stringify(Species)
        localStorage.setItem(props.userEmail,serialObj);
    }
    const generateAge=(e)=>{
        setAge(e.target.value)
        let serialObj=JSON.stringify(Age)
        localStorage.setItem(props.userEmail,serialObj);
    }

    const handleAdd=(e)=>{
        e.preventDefault()
        setClicked(true)


    }
    return(
        <div className={"Table"}>
<h1>Hello, {props.userName}</h1>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Имя</th>
                    <th>Видс</th>
                    <th>Возраст</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Семён</td>
                    <td>Кот</td>
                    <td>3</td>

                </tr>
                <tr>
                    <td>2</td>
                    <td>Рекс</td>
                    <td>Пёс</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Георгий</td>
                    <td>Попугай</td>
                    <td>1.5</td>

                </tr>
                {/*{clicked?&&<tr>*/}
                {/*    <th>"4"</th>*/}
                {/*    <th>{JSON.parse(localStorage.getItem(props.userEmail)).petName}</th>*/}
                {/*    <th>{JSON.parse(localStorage.getItem(props.userEmail)).petSpecies}</th>*/}
                {/*    <th>{JSON.parse(localStorage.getItem(props.userEmail)).petAge}</th>*/}

                {/*    </tr>}*/}
                </tbody>
            </Table>
            <div className={"inputs"}>
            <Button variant="primary" onClick={handleAdd} >
                Add a pet
            </Button>

                <input type="text" placeholder={"Имя питомца"} onChange={generateName}/><input type="text" placeholder={"Вид питомца"} onChange={generateSpecies}/><input type="text" placeholder={"Возраст питомца"} onChange={generateAge}/>


            </div>
          </div>
    )
}