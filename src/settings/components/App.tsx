import { Layout } from 'antd';
import React from 'react';
import {DashboardHeader, DashboardSider} from "./index";

const {  Content } = Layout;

export const App: React.FC = () => {

    return (
        <Layout>
            <DashboardSider />
            <Layout className="site-layout">
                <DashboardHeader />
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};
