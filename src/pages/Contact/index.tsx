import React from 'react';
import styles from './index.less';
import {Breadcrumb, Col, PageHeader, Row} from "antd";
import ADDRESS from '../../../public/address.jpg';
export default function Page() {
  return (
    <>
      <Row className={styles.header}>
        <Col md={9} style={{marginLeft:'2%',marginTop:'2%',fontWeight:600,fontFamily:'sans-serif'}}>
          <Breadcrumb>
            <Breadcrumb.Item><a href={'/home'}>Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href={'/contact'}>Contact</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col md={10}>
          <p className={styles.title}>CONTACT US</p>
        </Col>
      </Row>
      <Row style={{marginTop:'2%',fontFamily:'sans-serif'}} justify={'center'}>
        <Col md={4}>
          <p>If you have any inquiries,</p>
          <p>please feel free to contact us via email:</p>
          <a style={{fontWeight:"bold",color:'#316B83'}} href={"mailto:pjia@big.ac.cn"}>pjia@big.ac.cn</a>
          <p style={{fontWeight:"bolder",fontSize:"large",marginTop:'5%'}}>Address:</p>
          <p>Beijing Institute of Genomics</p>
          <p>Chinese Academy of Sciences</p>
          <p>1 Beichen West Road, Chaoyang District</p>
          <p>Beijing 100101, China</p>
          <p>Telephone: +86 (10) 8409-7340</p>
          <p>Fax: +86 (10) 8409-7200</p>
        </Col>
        <Col md={8}>
          <img src={ADDRESS}/>
        </Col>
      </Row>
    </>
  );
}
