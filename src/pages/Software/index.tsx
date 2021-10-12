import React from 'react';
import styles from './index.less';
import {Breadcrumb, Col, Row} from "antd";

export default function Page() {
  return (
    <>
      <Row className={styles.header}>
        <Col md={9} style={{marginLeft:'2%',marginTop:'2%',fontWeight:600,fontFamily:'sans-serif'}}>
          <Breadcrumb>
            <Breadcrumb.Item><a href={'/home'}>Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href={'/software'}>Software & Database</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col md={10}>
          <p className={styles.title}>SOFTWARE & DATABASE</p>
        </Col>
      </Row>
      <Row style={{marginTop:'2%'}}>
        <Col md={20}>

        </Col>
      </Row>
    </>
  );
}
