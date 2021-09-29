import styles from './index.less';
import {Col, Row, Carousel, Typography, Timeline, List, Avatar, Divider, Menu} from "antd";
import { ClockCircleOutlined } from '@ant-design/icons';
import {LeftOutlined,RightOutlined}  from '@ant-design/icons';
import React from "react";
// import Photo1 from '../assets/party.jpg';
const { Title ,Paragraph,Text } = Typography;
export default function IndexPage() {
  const data = [
    {
      title: 'Ant Design Title 1',
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
              We focus on developing statistical and computational methods motivated by important questions in biomedical sciences and abundant information in big genomic and health related data.
            </Text>
          </Paragraph>
        </Col>
      </Row>
      <Row style={{marginTop:'40px'}}>
        <Col md={8}>
          <Row justify={'center'}>
            <Title level={2}>Recent Events</Title>
          </Row>
          <Row justify={'center'}>
            <Timeline>
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
              <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                Technical testing 2015-09-01
              </Timeline.Item>
              <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
          </Row>
        </Col>
        <Col md={8}>
          <Row justify={'center'}>
            <Title level={2}>Recent Events</Title>
          </Row>
          <Row justify={'center'}>
            <Col md={20}>
              <List
                itemLayout="horizontal"
                dataSource={data}
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
        <Col md={8}>
          <Row justify={'center'}>
            <Title level={2}>Star Publications</Title>
          </Row>
          <Row justify={'center'}>
            <Col md={20}>
              <List
                itemLayout="horizontal"
                dataSource={data}
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
