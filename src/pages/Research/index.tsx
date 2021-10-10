import React from 'react';
import styles from './index.less';
import {Col,Row,PageHeader,Breadcrumb  } from "antd";

export default function Page() {
  return (
    <>
      <Row>
        <Col md={24} style={{marginLeft:'2%',marginTop:'2%'}}>
          <Breadcrumb>
            <Breadcrumb.Item><a href={'/home'}>Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href={'/research'}>Research</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <PageHeader
        className="site-page-header"
        title="RESEARCH"
      />
      <Row justify={'center'}>
        <Col md={22}>
          <h2>Our research focuses on the following areas:</h2>
        </Col>
      </Row>
      <Row justify={'center'} style={{fontSize:'larger'}}>
        <Col md={22}>
          1. Developing machine learning and deep learning approaches to decode and interpret the functions of genetic variants associated with diseases.
        </Col>
      </Row>
      <Row justify={'center'} style={{fontSize:'larger'}}>
        <Col md={22}>
          2. Developing approaches of network medicine to integrate multi-omics data and to understand the genetic architectures underlying human complex diseases.
        </Col>
      </Row>
      <Row justify={'center'} style={{fontSize:'larger'}}>
        <Col md={22}>
          3. Cancer bioinformatics. Using pan-cancer omics data as well as single-cell RNA-sequencing data, we develop and apply approaches to understand the driving forces in tumorigenesis and to identify driver mutations, genes, and pathways in cancer.
        </Col>
      </Row>
    </>
  );
}
