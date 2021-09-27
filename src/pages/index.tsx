import styles from './index.less';
import {Col, Row,Carousel,Typography } from "antd";
const { Title ,Paragraph,Text } = Typography;
export default function IndexPage() {
  return (
    <>
      <Row>
        <Col md={24}>
          <Carousel autoplay>
            <div>
              <h3 className={styles.contentStyle}>1</h3>
            </div>
            <div>
              <h3 className={styles.contentStyle}>2</h3>
            </div>
            <div>
              <h3 className={styles.contentStyle}>3</h3>
            </div>
            <div>
              <h3 className={styles.contentStyle}>4</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
      <Row style={{height:'1200px'}} justify={"center"}>
        <Col md={22}>
          <Paragraph>
            <Title>
              Welcome to <span style={{fontWeight:"bold"}}>the Laboratory for Precision Health</span>.
            </Title>
          </Paragraph>
        </Col>
      </Row>
    </>
  );
}
