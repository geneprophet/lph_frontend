import React from 'react';
import styles from './index.less';
import {Breadcrumb, Col, PageHeader, Row, Image, Card, Tabs, Space} from "antd";
import PI from '../../../public/pi.jpg';
import KHE from '../../../public/khe.jpg';
const { Meta } = Card;
const { TabPane } = Tabs;
export default function Page() {
  return (
    <>
      <Row className={styles.header}>
        <Col md={9} style={{marginLeft:'2%',marginTop:'2%',fontWeight:600,fontFamily:'sans-serif'}}>
          <Breadcrumb>
            <Breadcrumb.Item><a href={'/home'}>Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href={'/member'}>Member</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col md={10}>
          <p className={styles.title}>MEMBER</p>
        </Col>
      </Row>
      <Row justify={'center'} style={{marginTop:'2%'}}>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="ALL" key="1">
            <Row justify={'space-around'}>
                <Col md={4}>
                  <Card hoverable cover={<Image width={'100%'} preview={false} src={PI}></Image>}>
                    <Meta style={{color:"black"}} title={<p className={styles.name}>Peilin Jia</p>} description={<p className={styles.keyword} style={{color:"black"}}>Principal Investigator</p>} />
                  </Card>
                </Col>
                <Col md={4}>
                  <Card hoverable cover={<Image width={'100%'} preview={false} src={KHE}></Image>}>
                    <Meta style={{color:"black"}} title={<p className={styles.name}>Hongen Kang</p>} description={<p className={styles.keyword} style={{color:"black"}}>PhD Candidate</p>} />
                  </Card>
                </Col>
            </Row>
          </TabPane>
          <TabPane tab="PI" key="2">
            <Row justify={'space-around'}>
              <Col md={4}>
                <Card hoverable cover={<Image width={'100%'} preview={false} src={PI}></Image>}>
                  <Meta style={{color:"black"}} title={<p className={styles.name}>Peilin Jia</p>} description={<p className={styles.keyword} style={{color:"black"}}>Principal Investigator</p>} />
                </Card>
              </Col>
              <Col md={4}>
                <Card hoverable cover={<Image width={'100%'} preview={false} src={KHE}></Image>}>
                  <Meta style={{color:"black"}} title={<p className={styles.name}>Hongen Kang</p>} description={<p className={styles.keyword} style={{color:"black"}}>PhD Candidate</p>} />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="RESEARCH STAFF" key="3">
            <Row justify={'space-around'}>
              <Col md={4}>
                <Card hoverable cover={<Image width={'100%'} preview={false} src={PI}></Image>}>
                  <Meta style={{color:"black"}} title={<p className={styles.name}>Peilin Jia</p>} description={<p className={styles.keyword} style={{color:"black"}}>Principal Investigator</p>} />
                </Card>
              </Col>
              <Col md={4}>
                <Card hoverable cover={<Image width={'100%'} preview={false} src={KHE}></Image>}>
                  <Meta style={{color:"black"}} title={<p className={styles.name}>Hongen Kang</p>} description={<p className={styles.keyword} style={{color:"black"}}>PhD Candidate</p>} />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="STUDENTS" key="4">
            <Row justify={'space-around'}>
              <Col md={4}>
                <Card hoverable cover={<Image width={'100%'} preview={false} src={PI}></Image>}>
                  <Meta style={{color:"black"}} title={<p className={styles.name}>Peilin Jia</p>} description={<p className={styles.keyword} style={{color:"black"}}>Principal Investigator</p>} />
                </Card>
              </Col>
              <Col md={4}>
                <Card hoverable cover={<Image width={'100%'} preview={false} src={KHE}></Image>}>
                  <Meta style={{color:"black"}} title={<p className={styles.name}>Hongen Kang</p>} description={<p className={styles.keyword} style={{color:"black"}}>PhD Candidate</p>} />
                </Card>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </Row>
    </>
  );
}
