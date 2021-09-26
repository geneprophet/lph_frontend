import React, {useEffect} from 'react';
import {Row, Col,Layout,Menu} from 'antd';
import styles from './index.less';
import cn from 'classnames';
const { Header, Content, Footer } = Layout;
const Index = (props:any) => {
  
  return (
    <Row className={styles.container}>
      <Col md={24}>
        <Layout>
          <Header className={cn({[styles.header]:!props.isScrollToTop},{[styles.bg]:props.isScrollToTop})}>
            <Row>
              <Col md={4}>
                <a style={{marginTop:'-10px',width:'250px', fontSize:'14px', fontWeight: 'bold',color:'black'}}>Laboratory for Precision Health</a>
              </Col>
              <Col md={20}>
                <Menu className={styles.menu} mode="horizontal" defaultSelectedKeys={['1']} inlineCollapsed={false}>
                  <Menu.Item key="1">Home</Menu.Item>
                  <Menu.Item key="2">Research</Menu.Item>
                  <Menu.Item key="3">Software</Menu.Item>
                  <Menu.Item key="4">Database</Menu.Item>
                  <Menu.Item key="5">Publication</Menu.Item>
                  <Menu.Item key="6">Publication</Menu.Item>
                  <Menu.Item key="7">Member</Menu.Item>
                  <Menu.Item key="8">Join us</Menu.Item>
                  <Menu.Item key="9">Contact</Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Header>
          <Content style={{ marginTop: 64 }}>
            <Row justify={'center'}>
              <Col md={24}>
                {props.children}
              </Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Lab website ©2021 Created by LPH-BIG</Footer>
        </Layout>
      </Col>
    </Row>
  );
};

export default Index;
