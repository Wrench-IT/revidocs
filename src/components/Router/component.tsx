import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/component';
import { ghAccount } from '../../../settings/basic';
import { Button, Result } from 'antd';
import routes from '../../routes';
import Markdown from '../Markdown/component';
import './styles.scss';

const Router: React.FC = () => (
  <Routes>
    <Route path={`/${ghAccount.repoName}/`} element={<Layout />}>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.link}
          element={<Markdown>{route.content}</Markdown>}
        />
      ))}
      <Route
        path="*"
        element={
          <Result
            status="404"
            title="404"
            subTitle="Page not found!"
            extra={
              <Button type="primary">
                <Link to={`/${ghAccount.repoName}/`}>Back to Docs</Link>
              </Button>
            }
          />
        }
      ></Route>
    </Route>
  </Routes>
);

export default Router;
