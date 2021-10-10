import React from 'react';
import styles from './index.less';
import {Breadcrumb, Col, PageHeader, Row} from "antd";

export default function Page() {
  return (
    <>
      <Row>
        <Col md={24} style={{marginLeft:'2%',marginTop:'2%'}}>
          <Breadcrumb>
            <Breadcrumb.Item><a href={'/home'}>Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href={'/join'}>Join us</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <PageHeader
        className="site-page-header"
        title="JOIN US"
      />
      <Row>
        <Col md={20}>

        </Col>
      </Row>
    </>
  );
}
