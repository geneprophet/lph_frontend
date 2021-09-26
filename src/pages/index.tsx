import styles from './index.less';
import {Col, Row} from "antd";

export default function IndexPage() {
  return (
    <>
      <Row>
        <Col md={24}>
          <h1 className={styles.title}>Page index</h1>
        </Col>
      </Row>
      <Row style={{height:'1200px'}}>
        <Col md={24}>
          <p>
            Laboratory for Precision Health
          </p>
        </Col>
      </Row>
    </>
  );
}
