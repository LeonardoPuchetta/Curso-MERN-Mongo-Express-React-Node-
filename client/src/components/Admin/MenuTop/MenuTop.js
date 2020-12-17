import React from 'react';

//importacion de Button de antd 
import { SmileOutlined ,  BugFilled , FireFilled , MehFilled } from '@ant-design/icons';

import { Button , Icon } from 'antd';

//importacion del logo 
import LeoLogo from '../../../assets/img/jpg/logo.jpg';

import './MenuTop.scss';


export default function MenuTop(props) {

const {menuCollapsed , setMenuCollapsed} = props;

return (
    <div className="menu-top">
        <div className = 'menu-top__left'>

            <img className = 'menu-top__left-logo'
            src={LeoLogo} 
            alt='Leonardo'
            />
            <Button type='link' onClick={()=> setMenuCollapsed(!menuCollapsed)}>
                < SmileOutlined type = {menuCollapsed ? 'close' : "menu-fold"} style = {{ color : 'white' }}/>
            </Button>
        </div>

        <div className = 'menu-top__right'>
            <Button type='link'onClick={()=> console.log('chau')}>
                <MehFilled  type ="poweroff" style = {{ color : 'white' }}/>
            </Button>
        </div>
    </div>
)
}