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
              <a href={'/publication'}>Publication</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <PageHeader
        className="site-page-header"
        title="PUBLICATION"
      />
      <Row justify={'center'}>
        <Col md={18}>
          <h1 className={styles.title}>2021</h1>
          <p className={styles.publication}>1. Yin-Ying Wang#, Hongen Kang#, Tianyi Xu, Lili Hao, Yiming Bao*, Peilin Jia*. <a href={''}>CeDR Atlas: a knowledgebase of cellular drug response.</a> Nucleic Acids Research, 2022 (Accepted) </p>
        </Col>
      </Row>
    </>
  );
}
