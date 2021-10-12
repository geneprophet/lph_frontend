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
            <Breadcrumb.Item><a onClick={()=>{history.push('/')}}>Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>
              <a onClick={()=>{history.push('/publication')}}>Publication</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col md={10}>
          <p className={styles.title}>PUBLICATION</p>
        </Col>
      </Row>
      <Row justify={'center'} style={{marginTop:'2%'}}>
        <Col md={18}>
          <h1 className={styles.year}>2021</h1>
          <p className={styles.publication}>1. Yin-Ying Wang#, Hongen Kang#, Tianyi Xu, Lili Hao, Yiming Bao*, Peilin Jia*. <a href={''}>CeDR Atlas: a knowledgebase of cellular drug response.</a> Nucleic Acids Research (Accepted) </p>
        </Col>
      </Row>
    </>
  );
}
