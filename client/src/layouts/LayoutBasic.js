import React from 'react';
import {Layout} from 'antd' ;

import { Route , Switch } from 'react-router-dom';

import './LayoutBasic.scss';



export default function LayoutBasic(props) {   // se puede hacer {routes} en vez de props


    // traemos sistemas de rutas 
    const {routes} = props ; 
      // extraemos del Layout de antd los elementos de la vista 
    const { Content , Footer} = Layout ; 


    return (
        <Layout>
            <h2>Menu Sider Basic User</h2>
            <Layout>
                <Content>
                    <LoadRoutes routes={routes}/>  
                </Content>
                <Footer>
                    Leonardo Puchetta 
                </Footer>
                
            </Layout>
        </Layout>
    )
}

function LoadRoutes({routes}){    // funcion componente 


    return (
        <Switch>
            {routes.map((route , index ) => (

            < Route 
            key = {index}
            path = {route.path} 
            exact = {route.exact}
            //no usamos render pq el componente a renderizar se 
            //define manualmente y no mediante rutas 
            component = {route.component}
            />

            ))}
        </Switch>
        
    )
    
     }
     