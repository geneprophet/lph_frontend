import React from 'react';
import styles from './index.less';
import {Breadcrumb, Col, PageHeader, Row, Image, Card, Tabs, Space} from "antd";
import PI from '../../../public/pi.jpg';
const { Meta } = Card;
const { TabPane } = Tabs;
export default function Page() {
  return (
    <>
      <Row>
        <Col md={24} style={{marginLeft:'2%',marginTop:'2%'}}>
          <Breadcrumb>
            <Breadcrumb.Item><a href={'/home'}>Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href={'/member'}>Member</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <PageHeader
        className="site-page-header"
        title="MEMBER"
      />
      <Row justify={'center'}>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="ALL" key="1">
            <Row justify={'space-around'}>
                <Col md={3}>
                  <Card hoverable cover={<Image width={'100%'} preview={false} src={PI}></Image>}>
                    <Meta style={{color:"black"}} title={<p className={styles.keyword}>Peilin Jia</p>} description={<p className={styles.title} style={{color:"black"}}>Principal Investigator</p>} />
                  </Card>
                </Col>
                <Col md={3}>
                  <Card hoverable cover={<Image width={'100%'} preview={false} src={PI}></Image>}>
                    <Meta style={{color:"black"}} title={<p className={styles.keyword}>Peilin Jia</p>} description={<p className={styles.title} style={{color:"black"}}>Principal Investigator</p>} />
                  </Card>
                </Col>
              <Col md={3}>
                <Card hoverable cover={<Image width={'100%'} preview={false} src={PI}></Image>}>
                  <Meta style={{color:"black"}} title={<p className={styles.keyword}>Peilin Jia</p>} description={<p className={styles.title} style={{color:"black"}}>Principal Investigator</p>} />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="PI" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="RESEARCH STAFF" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="STUDENTS" key="4">
            Content of Tab Pane 4
          </TabPane>
        </Tabs>
      </Row>
    </>
  );
}
