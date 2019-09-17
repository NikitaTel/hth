import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
export const Content=(props)=>{
    return(
        <div >

            <Table responsive>
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
                </tbody>
            </Table>
            <Button variant="primary" onClick={props.handleAdd} >
                Add a pet
            </Button>
        </div>
    )
}