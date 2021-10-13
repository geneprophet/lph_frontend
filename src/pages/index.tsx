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
      title: 'CeDR publiched!',
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
      title: 'Ant Design Title 1',
      description:'',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  return (
    <div>
      <Row>
        <Col md={24}>
          <Carousel autoplay arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
            <div>
              <h1 className={styles.contentStyle}>1</h1>
            </div>
            <div>
              <h1 className={styles.contentStyle}>2</h1>
            </div>
            <div>
              <h1 className={styles.contentStyle}>3</h1>
            </div>
            <div>
              <h1 className={styles.contentStyle}>4</h1>
            </div>
          </Carousel>
        </Col>
      </Row>
      <Row justify={"center"} style={{marginTop:'20px'}}>
        <Col md={18}>
          <Paragraph>
            <Text style={{fontSize:'large'}}>
              &nbsp;&nbsp;&nbsp;&nbsp;Welcome to the <span style={{fontWeight:"bold"}}>Laboratory for Precision Health</span>.
              Our lab is part of the  CAS Key Laboratory of Genomic and Precision Medicine and <a href={"https://ngdc.cncb.ac.cn/"} target={'_blank'}>National Genomics Data Center</a> at <a href={"http://www.big.ac.cn/"} target={'_blank'}>Beijing Institute of Genomics, Chinese Academy of Sciences/China National Center for Bioinformation</a>.
              Our research focuses on developing computational approaches for genetics and genomics studies and fine mapping genetic variants and genes associated with human complex diseases. We are particularly interested in Artificial intelligence (AI) approaches in analyzing biological data.
            </Text>
          </Paragraph>
        </Col>
      </Row>
      <Row style={{marginTop:'40px'}}>
          <Col md={10} push={2}>
            <Row justify={'center'}>
              <Title level={2}>Recent Events</Title>
            </Row>
            <Row justify={'center'}>
              <Col md={20}>
                <List
                  itemLayout="horizontal"
                  dataSource={events}
                  renderItem={item => (
                    <List.Item>
                      {item.date}
                      <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href={item.link} target={'_blank'}>{item.title}</a>}
                        description={<p>{item.description}</p>}
                      />
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </Col>
          <Col md={10} push={2}>
            <Row justify={'center'}>
              <Title level={2}>Star Publications</Title>
            </Row>
            <Row justify={'center'}>
              <Col md={20}>
                <List
                  itemLayout="horizontal"
                  dataSource={publications}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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
