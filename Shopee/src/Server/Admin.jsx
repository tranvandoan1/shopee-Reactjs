import { Menu, Button, Descriptions } from 'antd';
import {
    AppstoreOutlined,
    SlidersOutlined,
    MailOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react'
import 'antd/dist/antd.css'
import '../App.css'

const Admin = () => {
    const { SubMenu } = Menu;
    const [collapsed, setCollapsed] = useState(false)
    // const toggleCollapsed = e => {
    //     setCollapsed(e)
    //     // console.log(e)
    // };
    return (
        <div className='container'>
            <div className='left'>

                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                >

                    <Menu.Item key="2" icon={<SlidersOutlined />}>
                        Slides
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Products">
                        <Menu.Item key="5">Create Product</Menu.Item>
                        <Menu.Item key="6">View Product</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Categoris">
                        <Menu.Item key="9">Create Categori</Menu.Item>
                        <Menu.Item key="10">View Categori</Menu.Item>
                    </SubMenu>
                </Menu>

            </div>
            <div className='right'>
                <Descriptions title="User Info">
                    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    <Descriptions.Item label="Address">
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </div>
    )
}

export default Admin