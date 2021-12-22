import styles from './index.less';
import {Col, Row, Carousel, Typography, Timeline, List, Avatar, Divider, Menu, Space} from "antd";
import { ClockCircleOutlined } from '@ant-design/icons';
import {LeftOutlined,RightOutlined}  from '@ant-design/icons';
import React from "react";
// import Photo1 from '../assets/party.jpg';
const { Title ,Paragraph,Text } = Typography;
export default function IndexPage() {
  const events = [
    {
      title: 'CeDR published!',
      description:'CeDR Atlas: a knowledgebase of cellular drug response',
      link:'https://academic.oup.com/nar/advance-article/doi/10.1093/nar/gkab897/6389514?searchresult=1',
      date:'11 October 2021'
    },
    {
      title: 'Welcome Hongen Kang, Xiuli Zhu, Mingqiu Wu join the lab!',
      description:'PhD Candidate: Hongen Kang, MS Candidate: Xiuli Zhu and Mingqiu Wu',
      link:'',
      date:'1 September 2021'
    },
    {
      title: 'Peilin Jia and Yin-Ying Wang are invited to report in the NCCBB 2021',
      description:'Peilin Jia and Yin-Ying Wang are invited to report in The 7th National Conference on Computational Biology and Bioinformatics. Hongen Kang get the Excellent poster.',
      link:'http://interdisciplinarysciences.org/conference/',
      date:'16-18 July 2021'
    },
    {
      title: 'CeDR online!',
      description:'The website service of CeDR open to the world after technical test.',
      link:'https://ngdc.cncb.ac.cn/cedr',
      date:'30 June 2021'
    },
    {
      title: 'Welcome Yin-Ying Wang join the lab as a assistant professor',
      description:'Yin-Ying Wang is ',
      link:'',
      date:'1 March 2021'
    },
  ];
  const publications = [
    {
      authors:'Yin-Ying Wang#, Hongen Kang#, Tianyi Xu, Lili Hao, Yiming Bao*, Peilin Jia*',
      title: ' CeDR Atlas: a knowledgebase of cellular drug response',
      journal:'Nucleic Acids Research',
      year:'2021',
      link:'https://academic.oup.com/nar/advance-article/doi/10.1093/nar/gkab897/6389514?login=true'
    },
    {
      authors:'Pei G, Hu R, Dai Y, Manuel AM, Zhao Z*, Jia P*',
      title: 'Predicting regulatory variants using a dense epigenomic mapped CNN model elucidated the molecular basis of trait-tissue associations',
      journal:'Nucleic Acids Research',
      year:'2021',
      link:''
    },
    {
      authors:'Dai Y, Hu R, Manuel AM, Liu A, Jia P*, Zhao Z*',
      title: 'CSEA-DB: An omnibus for human complex trait and cell type associations',
      journal:'Nucleic Acids Research',
      year:'2021',
      link:''
    },
    {
      authors:'Jia P, Dai Y, Hu R, Pei G, Manuel A, Zhao Z',
      title: 'TSEA-DB: A trait-tissue association map for human complex traits and diseases',
      journal:'Nucleic Acids Research',
      year:'2020',
      link:''
    },
    {
      authors:'Pei G, Hu R, Dai Y, Zhao Z*, Jia P*',
      title: 'Decoding whole-genome mutational signatures in 37 human pan-cancers by denoising sparse autoencoder neural network',
      journal:'Oncogene',
      year:'2020',
      link:''
    },
    {
      authors:'Jia P, Pei G, Zhao Z',
      title: 'CNet: A multi-omics approach to detecting clinically associated, combinatory genomic signatures',
      journal:'Bioinformatics',
      year:'2019',
      link:''
    },
    {
      authors:'Pei G, Dai, Y, Zhao Z*, Jia P*',
      title: 'deTS: tissue-specific enrichment analysis to decode tissue specificity',
      journal:'Bioinformatics',
      year:'2019',
      link:''
    }
  ];
  return (
    <div>
      <Row>
        <Col md={24}>
          <Carousel autoplay arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
            <div>
              <h1 className={styles.contentStyle1}></h1>
            </div>
            <div>
              <h1 className={styles.contentStyle2}></h1>
            </div>
            <div>
              <h1 className={styles.contentStyle3}></h1>
            </div>
            <div>
              <h1 className={styles.contentStyle4}></h1>
            </div>
          </Carousel>
        </Col>
      </Row>
      <Row justify={"center"} style={{marginTop:'20px'}}>
        <Col md={18}>
          <Paragraph>
            <Text style={{fontSize:'x-large'}}>
              &nbsp;&nbsp;&nbsp;&nbsp;Welcome to the <span style={{fontWeight:"bold"}}>Laboratory for Precision Health</span>.
              Our lab is part of the  CAS Key Laboratory of Genomic and Precision Medicine and <a href={"https://ngdc.cncb.ac.cn/"} target={'_blank'}>National Genomics Data Center</a> at <a href={"http://www.big.ac.cn/"} target={'_blank'}>Beijing Institute of Genomics, Chinese Academy of Sciences/China National Center for Bioinformation</a>.
              Our research focuses on developing computational approaches for genetics and genomics studies and fine mapping genetic variants and genes associated with human complex diseases. We are particularly interested in Artificial intelligence (AI) approaches in analyzing biological data.
            </Text>
          </Paragraph>
        </Col>
      </Row>
      <Divider/>
      <Row style={{marginTop:'40px'}}>
          <Col md={8} push={2}>
            <Row justify={'center'} className={styles.secondtitle}>
              <Title level={2}>Recent Events</Title>
            </Row>
            <Row justify={'center'} style={{height:'600px',overflowY:"scroll"}}>
              <Col md={20}>
                <List
                  itemLayout="horizontal"
                  dataSource={events}
                  renderItem={item => (
                    <List.Item style={{fontFamily:'Helvetica',fontSize:"large"}}>
                      {item.date}
                      <List.Item.Meta
                        // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href={item.link} target={'_blank'} style={{fontSize:"x-large",color:'#190d99'}}>{item.title}</a>}
                        description={<p style={{color:"black"}}>{item.description}</p>}
                      />
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </Col>
          <Col md={12} push={2}>
            <Row justify={'center'} className={styles.secondtitle}>
              <Title level={2}>Star Publications</Title>
            </Row>
            <Row justify={'center'} style={{height:'600px',overflowY:"scroll"}}>
              <Col md={20}>
                <List
                  itemLayout="horizontal"
                  dataSource={publications}
                  renderItem={item => (
                    <List.Item style={{fontWeight:'bold'}}>
                      <List.Item.Meta
                        // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<p style={{fontSize:"larger"}}>{item.authors}.({item.year}) <a href={item.link} target={'_blank'} style={{fontSize:"x-large",color:'#0099ff'}}>{item.title}. </a> <span style={{fontStyle:'italic'}}>{item.journal}.</span></p>}
                        // description={<p style={{color:"black"}}>{item.description}</p>}
                      />
                    </List.Item>
                  )}
                />
              </Col>

            </Row>

          </Col>

      </Row>
    </div>
  );
}
