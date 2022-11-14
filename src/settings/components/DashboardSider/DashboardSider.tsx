import {Layout, Menu} from "antd";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import React from "react";

const {Sider} = Layout;
import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;

  img {
    width: 80px;
  }
`

export const DashboardSider: React.FC = () => {
    return (
        <Sider trigger={null}>
            <Logo>
                <img src={`${window.wisehunterTheme.url}/src/settings/images/logo.png`} alt='logo'/>
            </Logo>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined/>,
                        label: 'nav 1',
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined/>,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined/>,
                        label: 'nav 3',
                    },
                ]}
            />
        </Sider>
    )
}