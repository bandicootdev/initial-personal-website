import React from "react";
import {Link} from 'react-router-dom'
import {Layout, Menu} from "antd";

import './MenuSider.scss'
import {HomeOutlined, MenuOutlined} from "@ant-design/icons";


export default function MenuSider() {
    const {Sider} = Layout;
    return (<Sider className={'menu-sider'}>
        <Menu theme={'dark'} mode={'inline'} defaultSelectedKeys={['1']}>
            <Menu.Item key={'1'}>
                <Link to={'/admin'}>
                    <HomeOutlined/>
                    <span className={'nav-text'}>Home</span>
                </Link>
            </Menu.Item>
            <Menu.Item key={'2'}>
                <Link to={'/admin/menu-web'}>
                    <MenuOutlined />
                    <span className={'nac-text'}>Menu Web</span>
                </Link>
            </Menu.Item>
        </Menu>
    </Sider>)
}

