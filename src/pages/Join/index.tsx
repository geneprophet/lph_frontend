import React from 'react';
import styles from './index.less';
import {Breadcrumb, Col, PageHeader, Row} from "antd";
import {history} from "@@/core/history";

export default function Page() {
  return (
    <>
      <Row className={styles.header}>
        <Col md={9} style={{marginLeft:'2%',marginTop:'2%',fontWeight:600,fontFamily:'sans-serif'}}>
          <Breadcrumb>
            <Breadcrumb.Item><a onClick={()=>{history.push('/home')}}>Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>
              <a onClick={()=>{history.push('/join')}}>Join us</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col md={10}>
          <p className={styles.title}>JOIN US</p>
        </Col>
      </Row>
      <Row style={{marginTop:'2%'}}>
        <Col md={2} push={3}>
          <p style={{fontSize:"x-large",fontWeight:"bolder"}}>Students:</p>
        </Col>
      </Row>
      <Row style={{marginTop:'2%'}}>
        <Col md={16} push={4} style={{fontWeight:200,fontSize:"large"}}>
          <p>We have openings for motivated undergraduate and graduate students from various scientific disciplines (biology, medicine, statistics, engineering, etc) who wish to work at the interface of genomics, bioinformatics and medicine. Please contact <a style={{fontWeight:"bold",color:'#316B83'}} href={"mailto:pjia@big.ac.cn"}>pjia@big.ac.cn</a> for more information.</p>
        </Col>
      </Row>
      <Row style={{marginTop:'2%'}}>
        <Col md={2} push={3}>
          <p style={{fontSize:"x-large",fontWeight:"bolder"}}>Postdocs:</p>
        </Col>
      </Row>
      <Row style={{marginTop:'2%'}}>
        <Col md={16} push={4} style={{fontWeight:200,fontSize:"large"}}>
          <p>For inquiries of postdoctoral fellow positions, please send a CV to <a style={{fontWeight:"bold",color:'#316B83'}} href={"mailto:pjia@big.ac.cn"}>pjia@big.ac.cn</a>. Please include a list of publications and details of three references.</p>
        </Col>
      </Row>
    </>
  );
}
