import './styles.scss';
import React from 'react';
import { Flex, Layout, Menu, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ghAccount } from '../../../settings';
import routes from '../../routes';

const { Header, Content, Footer } = Layout;

const LayoutComponent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();

  const items = [];

  for (const item of routes) {
    items.push({
      key: `/${ghAccount.repoName}/` + item.link,
      label: (
        <Link to={`/${ghAccount.repoName}/` + item.link}>{item.label}</Link>
      ),
    });
  }

  return (
    <Layout>
      <Flex className="wrapper" vertical>
        <Header>
          <Menu
            className="menu"
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={items}
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
