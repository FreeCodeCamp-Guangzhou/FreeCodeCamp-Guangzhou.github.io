import React from 'react';
import { Layout } from 'antd';
import './App.css';
import './iconFont/iconfont.css';

import AppContent from './component/appContent';

const {
  Header, Footer, Content,
} = Layout;

const App = () =>
  (<div>
    <Layout>
      <Header />
      <div className="logoContainer">
        <img className="logo" src={require('./images/fccgz_logo.png')} alt="FCC社区" />
      </div>
      <Content>
        <AppContent />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
   </div>);

export default App;
