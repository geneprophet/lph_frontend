import React from 'react';
import styles from './index.less';
import {Breadcrumb, Col, PageHeader,List, Row} from "antd";
import {history} from "@@/core/history";

export default function Page() {
  const publications = [
    {
      authors:'Yin-Ying Wang#, Hongen Kang#, Tianyi Xu, Lili Hao, Yiming Bao*, Peilin Jia*',
      title: ' CeDR Atlas: a knowledgebase of cellular drug response',
      journal:'Nucleic Acids Research',
      year:'2021',
      link:'https://academic.oup.com/nar/advance-article/doi/10.1093/nar/gkab897/6389514?login=true',
      index:1,
    },
    {
      authors:'Pei G, Hu R, Dai Y, Manuel AM, Zhao Z*, Jia P*',
      title: 'Predicting regulatory variants using a dense epigenomic mapped CNN model elucidated the molecular basis of trait-tissue associations',
      journal:'Nucleic Acids Research',
      year:'2021',
      link:'',
      index:2,
    },
    {
      authors:'Dai Y, Hu R, Manuel AM, Liu A, Jia P*, Zhao Z*',
      title: 'CSEA-DB: An omnibus for human complex trait and cell type associations',
      journal:'Nucleic Acids Research',
      year:'2021',
      link:'',
      index:3,

    },
    {
      authors:'Jia P, Dai Y, Hu R, Pei G, Manuel A, Zhao Z',
      title: 'TSEA-DB: A trait-tissue association map for human complex traits and diseases',
      journal:'Nucleic Acids Research',
      year:'2020',
      link:'',
      index:4,

    },
    {
      authors:'Pei G, Hu R, Dai Y, Zhao Z*, Jia P*',
      title: 'Decoding whole-genome mutational signatures in 37 human pan-cancers by denoising sparse autoencoder neural network',
      journal:'Oncogene',
      year:'2020',
      link:'',
      index:5,

    },
    {
      authors:'Jia P, Pei G, Zhao Z',
      title: 'CNet: A multi-omics approach to detecting clinically associated, combinatory genomic signatures',
      journal:'Bioinformatics',
      year:'2019',
      link:'',
      index:6,
    },
    {
      authors:'Pei G, Dai, Y, Zhao Z*, Jia P*',
      title: 'deTS: tissue-specific enrichment analysis to decode tissue specificity',
      journal:'Bioinformatics',
      year:'2019',
      link:'',
      index:7,
    }
  ];
  return (
    <>
      <Row className={styles.header}>
        <Col md={9} style={{marginLeft:'2%',marginTop:'2%',fontWeight:600,fontFamily:'sans-serif'}}>
          <Breadcrumb>
            <Breadcrumb.Item><a onClick={()=>{history.push('/home')}}>Home</a></Breadcrumb.Item>
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
          <List
            itemLayout="horizontal"
            dataSource={publications}
            renderItem={item => {
              if (item.year=='2021'){
                return(<List.Item style={{fontWeight:'bold'}}>
                  <List.Item.Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<p className={styles.publication} style={{fontSize:"larger"}}>{item.index}. {item.authors}.({item.year}) <a href={item.link} target={'_blank'} style={{fontSize:"x-large",color:'#0099ff'}}>{item.title}. </a> <span style={{fontStyle:'italic'}}>{item.journal}.</span></p>}
                    // description={<p style={{color:"black"}}>{item.description}</p>}
                  />
                </List.Item>)
              }
            }}
          />
        </Col>
      </Row>
      <Row justify={'center'} style={{marginTop:'2%'}}>
        <Col md={18}>
          <h1 className={styles.year}>2020</h1>
          <List
            itemLayout="horizontal"
            dataSource={publications}
            renderItem={item => {
              if (item.year=='2020'){
                return(<List.Item style={{fontWeight:'bold'}}>
                  <List.Item.Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<p className={styles.publication} style={{fontSize:"larger"}}>{item.index}. {item.authors}.({item.year}) <a href={item.link} target={'_blank'} style={{fontSize:"x-large",color:'#0099ff'}}>{item.title}. </a> <span style={{fontStyle:'italic'}}>{item.journal}.</span></p>}
                    // description={<p style={{color:"black"}}>{item.description}</p>}
                  />
                </List.Item>)
              }
            }}
          />
        </Col>
      </Row>
      <Row justify={'center'} style={{marginTop:'2%'}}>
        <Col md={18}>
          <h1 className={styles.year}>2019</h1>
          <List
            itemLayout="horizontal"
            dataSource={publications}
            renderItem={item => {
              if (item.year=='2019'){
                return(<List.Item style={{fontWeight:'bold'}}>
                  <List.Item.Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<p className={styles.publication} style={{fontSize:"larger"}}>{item.index}. {item.authors}.({item.year}) <a href={item.link} target={'_blank'} style={{fontSize:"x-large",color:'#0099ff'}}>{item.title}. </a> <span style={{fontStyle:'italic'}}>{item.journal}.</span></p>}
                    // description={<p style={{color:"black"}}>{item.description}</p>}
                  />
                </List.Item>)
              }
            }}
          />
        </Col>
      </Row>
    </>
  );
}
