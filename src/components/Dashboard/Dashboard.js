import React from 'react'
import Product from '../Product/Product'

export default class Dashboard extends React.Component{
    render(){
        return (
            <div><Product/>
                <h1>Dashboard</h1>
            </div>
            
        )
             
    }
}
//example of default function with dashbord as the out put. i also added product to render here per the instructions. the other components are rendering in app.js. 