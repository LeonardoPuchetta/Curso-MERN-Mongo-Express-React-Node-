import React from 'react';

import {Link} from 'react-router-dom';

import {Menu , Layout } from 'antd';

import {HomeFilled , DatabaseFilled} from '@ant-design/icons';

import './MenuSider.scss';

export default function MenuSider(props){

console.log(props);

    const {Sider} = Layout ; 
    const {menuCollapsed} = props;

    return (
        <Sider className='admin-sider' collapsed ={menuCollapsed} >
            <Menu theme='dark' mode= 'inline' defaultSelectedKeys={['1']}>
                <Menu.Item key = '1'>
                    <Link to={'/admin'}>
                        <HomeFilled type='home'/>
                        <span className='nav-text'>Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key = '2'>
                    <Link to={'/admin/menu-web'}>
                        <DatabaseFilled  type='menu'/>
                        <span className='nav-text'>Menu Web</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}