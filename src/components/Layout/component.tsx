import './styles.scss';
import React from 'react';
import { Flex, Layout, Menu, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ghAccount } from '../../../settings';

const { Header, Content, Footer } = Layout;

const LayoutComponent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();

  return (
    <Layout>
      <Flex className="wrapper" vertical>
        <Header>
          <Menu
            className="menu"
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={[
              {
                key: `/${ghAccount.repoName}/`,
                label: <Link to={`/${ghAccount.repoName}/`}>Docs</Link>,
              },
              {
                key: `/${ghAccount.repoName}/about`,
                label: <Link to={`/${ghAccount.repoName}/about`}>About</Link>,
              },
              {
                key: `/${ghAccount.repoName}/contacts`,
                label: (
                  <Link to={`/${ghAccount.repoName}/contacts`}>Contacts</Link>
                ),
              },
            ]}
          />
        </Header>
        <Content style={{ padding: '0 48px' }}>
          <div
            style={{
              background: colorBgContainer,
              padding: 24,
              margin: '24px 0',
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer className="footer">
          ©{new Date().getFullYear()} Created by {ghAccount.author}
        </Footer>
      </Flex>
    </Layout>
  );
};

export default LayoutComponent;
