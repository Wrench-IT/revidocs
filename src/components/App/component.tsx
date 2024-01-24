import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/component';
import { ghAccount } from '../../../settings';
import { Button, Result } from 'antd';
import routes from '../../routes';
import './styles.scss';

const App: React.FC = () => (
  <Routes>
    <Route path={`/${ghAccount.repoName}/`} element={<Layout />}>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.link}
          element={<div>{route.label}</div>}
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

export default App;
