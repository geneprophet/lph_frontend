import React from 'react';
import styles from './index.less';
import {Breadcrumb, Col, List, Row} from "antd";
import { history } from 'umi';
export default function Page() {
  const software = [
    {
      authors:'Pei G, Hu R, Dai Y, Manuel AM, Zhao Z*, Jia P*',
      title: 'Predicting regulatory variants using a dense epigenomic mapped CNN model elucidated the molecular basis of trait-tissue associations',
      journal:'Nucleic Acids Research',
      year:'2021',
      link:'https://github.com/bsml320/DeepFun',
      index:'1'
    },
    {
      authors:'Pei G, Hu R, Dai Y, Zhao Z*, Jia P*',
      title: 'Decoding whole-genome mutational signatures in 37 human pan-cancers by denoising sparse autoencoder neural network',
      journal:'Oncogene',
      year:'2020',
      link:'https://github.com/bsml320/DeepMS',
      index:'2'
    },
    {
      authors:'Jia P, Pei G, Zhao Z',
      title: 'CNet: A multi-omics approach to detecting clinically associated, combinatory genomic signatures',
      journal:'Bioinformatics',
      year:'2019',
      link:'https://github.com/bsml320/CNet',
      index:'3'
    },
    {
      authors:'Pei G, Dai, Y, Zhao Z*, Jia P*',
      title: 'deTS: tissue-specific enrichment analysis to decode tissue specificity',
      journal:'Bioinformatics',
      year:'2019',
      link:'https://github.com/bsml320/deTS',
      index:'4'
    }
  ];
  const database = [
    {
      authors:'Yin-Ying Wang#, Hongen Kang#, Tianyi Xu, Lili Hao, Yiming Bao*, Peilin Jia*',
      title: ' CeDR Atlas: a knowledgebase of cellular drug response',
      journal:'Nucleic Acids Research',
      year:'2021',
      link:'https://ngdc.cncb.ac.cn/cedr',
      index:'1'
    },
    {
      authors:'Dai Y, Hu R, Manuel AM, Liu A, Jia P*, Zhao Z*',
      title: 'CSEA-DB: An omnibus for human complex trait and cell type associations',
      journal:'Nucleic Acids Research',
      year:'2021',
      link:'https://bioinfo.uth.edu/CSEADB/',
      index:'2'
    },
    {
      authors:'Jia P, Dai Y, Hu R, Pei G, Manuel A, Zhao Z',
      title: 'TSEA-DB: A trait-tissue association map for human complex traits and diseases',
      journal:'Nucleic Acids Research',
      year:'2020',
      link:'https://bioinfo.uth.edu/TSEADB/index.jsp',
      index:'3'
    },
  ];

  return (
    <>
      <Row className={styles.header}>
        <Col md={9} style={{marginLeft:'2%',marginTop:'2%',fontWeight:600,fontFamily:'sans-serif'}}>
          <Breadcrumb>
            <Breadcrumb.Item><a onClick={()=>{history.push('/home')}}>Home</a></Breadcrumb.Item>
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
          <List
            itemLayout="horizontal"
            dataSource={software}
            renderItem={item => (<List.Item style={{fontWeight:'bold'}}>
                  <List.Item.Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<p className={styles.publication} style={{fontSize:"larger"}}>{item.index}. <a href={item.link} target={'_blank'} style={{fontSize:"x-large",color:'#0099ff'}}>{item.title}. </a> </p>}
                    // description={<p style={{color:"black"}}>{item.description}</p>}
                  />
                </List.Item>)
            }
          />
        </Col>
      </Row>
      <Row style={{marginTop:'2%'}}>
        <Col md={2} push={3}>
          <p style={{fontSize:"x-large",fontWeight:"bolder"}}>Database:</p>
        </Col>
      </Row>
      <Row style={{marginTop:'2%'}}>
        <Col md={20} push={4} style={{fontWeight:200,fontSize:"large"}}>
          <List
            itemLayout="horizontal"
            dataSource={database}
            renderItem={item => (<List.Item style={{fontWeight:'bold'}}>
              <List.Item.Meta
                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<p className={styles.publication} style={{fontSize:"larger"}}>{item.index}. <a href={item.link} target={'_blank'} style={{fontSize:"x-large",color:'#0099ff'}}>{item.title}. </a> </p>}
                // description={<p style={{color:"black"}}>{item.description}</p>}
              />
            </List.Item>)
            }
          />
        </Col>
      </Row>
    </>
  );
}
