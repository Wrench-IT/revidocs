import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/component';
import { ghAccount } from '../../../settings';
import { Button, Result } from 'antd';

import './styles.scss';

const App: React.FC = () => (
  <Routes>
    <Route path={`/${ghAccount.repoName}/`} element={<Layout />}>
      <Route index element={<div>Main page</div>} />
      <Route
        path={`/${ghAccount.repoName}/about`}
        element={<div>About me</div>}
      />
      <Route
        path={`/${ghAccount.repoName}/contacts`}
        element={<div>Contacts</div>}
      />
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
