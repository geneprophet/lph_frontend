import React from 'react';
import styles from './index.less';
import {Breadcrumb, Col, Row} from "antd";
import { history } from 'umi';
export default function Page() {
  return (
    <>
      <Row className={styles.header}>
        <Col md={9} style={{marginLeft:'2%',marginTop:'2%',fontWeight:600,fontFamily:'sans-serif'}}>
          <Breadcrumb>
            <Breadcrumb.Item><a onClick={()=>{history.push('/')}}>Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>
              <a onClick={()=>{history.push('/software')}}>Software & Database</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col md={10}>
          <p className={styles.title}>SOFTWARE & DATABASE</p>
        </Col>
      </Row>
      <Row style={{marginTop:'2%'}}>
        <Col md={2} push={3}>
          <p style={{fontSize:"x-large",fontWeight:"bolder"}}>Software:</p>
        </Col>
      </Row>
      <Row style={{marginTop:'2%'}}>
        <Col md={20} push={4} style={{fontWeight:200,fontSize:"large"}}>
          <p>1. deTS: tissue-specific enrichment analysis to decode tissue specificity. </p>
        </Col>
      </Row>
      <Row style={{marginTop:'2%'}}>
        <Col md={2} push={3}>
          <p style={{fontSize:"x-large",fontWeight:"bolder"}}>Database:</p>
        </Col>
      </Row>
      <Row style={{marginTop:'2%'}}>
        <Col md={20} push={4} style={{fontWeight:200,fontSize:"large"}}>
          <p>1. CeDR Atlas: a knowledgebase of cellular drug response <a href={"https://ngdc.cncb.ac.cn/cedr"}>https://ngdc.cncb.ac.cn/cedr</a></p>
        </Col>
      </Row>
    </>
  );
}
