import React, {useEffect, useState} from 'react';
import {Row, Col,Layout,Menu,BackTop} from 'antd';
import styles from './index.less';
import cn from 'classnames';
import {useScroll} from "@/pages/useScroll";
import { history } from 'umi';
const { Header, Content, Footer } = Layout;
const Index = (props:any) => {
  const { scrollX, scrollY, scrollDirection } = useScroll();

  return (
    <Row className={styles.container}>
      <Col md={24}>
        <Layout>
          <Header className={styles.header} style={{opacity:(scrollY>=100) ? 0.8 : 1}}>
            <Row>
              <Col md={5} sm={10} style={{whiteSpace:"nowrap"}}>
                <a style={{marginTop:'-10px',marginLeft:'-10px',lineHeight:'20px', fontSize:'18px', fontWeight: 'bold',color:'#4088b8',fontFamily:"Kaushan Script"}}>Laboratory for Precision Health</a>
              </Col>
              <Col md={19}>
                <Menu className={styles.menu} mode="horizontal" defaultSelectedKeys={['1']} inlineCollapsed={false}>
                  <Menu.Item key="1" onClick={()=>{history.push('/home')}}>Home</Menu.Item>
                  <Menu.Item key="2" onClick={()=>{history.push('/research')}}>Research</Menu.Item>
                  <Menu.Item key="3" onClick={()=>{history.push('/software')}}>Software</Menu.Item>
                  <Menu.Item key="4" onClick={()=>{history.push('/database')}}>Database</Menu.Item>
                  <Menu.Item key="5" onClick={()=>{history.push('/publication')}}>Publication</Menu.Item>
                  <Menu.Item key="6" onClick={()=>{history.push('/member')}}>Member</Menu.Item>
                  <Menu.Item key="7" onClick={()=>{history.push('/join')}}>Join us</Menu.Item>
                  <Menu.Item key="8" onClick={()=>{history.push('/contact')}}>Contact</Menu.Item>
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
            {/*<Row>*/}
            {/*  <p>Scroll position: {scrollY}px</p>*/}
            {/*  <p>Scroll position: {scrollDirection}px</p>*/}
            {/*</Row>*/}
            <BackTop />
          </Content>
          <Footer style={{ textAlign: 'center' ,marginTop:'5%'}}>
            <p>Lab website ©2021 Created by LPH-BIG</p>
            <p>No.1 Beichen West Road, Chaoyang District, Beijing 100101, China
            </p>
          </Footer>
        </Layout>
      </Col>
    </Row>
  );
};

export default Index;
