import React from 'react';
import styles from './index.less';
import {
  Breadcrumb,
  Col,
  PageHeader,
  Row,
  Image,
  Card,
  Tabs,
  Space,
  Divider,
} from 'antd';
import PI from '../../assets/pi.jpg';
import KHE from '../../assets/khe.jpg';
import WYY from '../../assets/wyy.jpg';
import LTZ from '../../assets/ltz.jpg';
import YN from '../../assets/yn.jpg';
import LSQ from '../../assets/lsq.jpg';
import GXJ from '../../assets/gxj.jpg';
import WMQ from '../../assets/wmq.jpg';
import ZXL from '../../assets/zxl.jpg';
import LH from '../../assets/lh.jpg';
import { history } from 'umi';
const { Meta } = Card;
const { TabPane } = Tabs;
export default function Page() {
  return (
    <>
      <Row className={styles.header}>
        <Col
          md={9}
          style={{
            marginLeft: '2%',
            marginTop: '2%',
            fontWeight: 600,
            fontFamily: 'sans-serif',
          }}
        >
          <Breadcrumb>
            <Breadcrumb.Item>
              <a
                onClick={() => {
                  history.push('/home');
                }}
              >
                Home
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a
                onClick={() => {
                  history.push('/member');
                }}
              >
                Member
              </a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col md={10}>
          <p className={styles.title}>MEMBER</p>
        </Col>
      </Row>
      <Row justify={'center'} style={{ marginTop: '2%' }}>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="ALL" key="1">
            <Row justify={'center'}>
              <Col md={18} sm={24}>
                <Row justify={'space-around'}>
                  <Col
                    // md={4}
                    flex={'230px'}
                    onClick={() => {
                      window.open(
                        'http://www.big.cas.cn/yjdw_/kyxmz/index_84122.html?json=http://www.big.cas.cn/sourcedb_big_cas/zw/zjrc_/kyxmz/jbylsys/202011/t20201112_5748182.json',
                        '_blank',
                      );
                    }}
                  >
                    <Card
                      hoverable
                      cover={
                        <Image width={'100%'} preview={false} src={PI}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Peilin Jia</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            Principal Investigator
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                  <Col flex={'230px'}>
                    <Card
                      cover={
                        <Image width={'100%'} preview={false} src={LTZ}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Tianzi Liu</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            Assistant Professor
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                  <Col flex={'230px'}>
                    <Card
                      cover={
                        <Image width={'100%'} preview={false} src={WYY}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Yin-Ying Wang</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            Assistant Professor
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                  <Col flex={'230px'}>
                    <Card
                      cover={
                        <Image width={'100%'} preview={false} src={YN}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Na Yuan</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            Assistant Professor
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                </Row>
                <Divider style={{ marginTop: '2%', marginBottom: '2%' }} />
                <Row justify={'space-around'}>
                  <Col flex={'230px'}>
                    <Card
                      cover={
                        <Image width={'100%'} preview={false} src={KHE}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Hongen Kang</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            PhD Candidate
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                  <Col flex={'230px'}>
                    <Card
                      cover={
                        <Image width={'100%'} preview={false} src={LSQ}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Shiqi Lin</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            PhD Candidate
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                  <Col flex={'230px'}>
                    <Card
                      cover={
                        <Image width={'100%'} preview={false} src={WMQ}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Mingqiu Wu</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            MS Candidate
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                  <Col flex={'230px'}>
                    <Card
                      cover={
                        <Image width={'100%'} preview={false} src={GXJ}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Xingjian Gao</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            PhD Candidate
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                </Row>
                <Divider style={{ marginTop: '2%', marginBottom: '2%' }} />
                <Row justify={'space-around'}>
                  <Col flex={'230px'}>
                    <Card
                      cover={
                        <Image width={'100%'} preview={false} src={ZXL}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Xiuli Zhu</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            MS Candidate
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="PI" key="2">
            <Row justify={'space-around'}>
              <Col
                md={6}
                onClick={() => {
                  window.open(
                    'http://www.big.cas.cn/yjdw_/kyxmz/index_84122.html?json=http://www.big.cas.cn/sourcedb_big_cas/zw/zjrc_/kyxmz/jbylsys/202011/t20201112_5748182.json',
                    '_blank',
                  );
                }}
              >
                <Card
                  hoverable
                  cover={
                    <Image width={'100%'} preview={false} src={PI}></Image>
                  }
                >
                  <Meta
                    style={{ color: 'black' }}
                    title={<p className={styles.name}>Peilin Jia</p>}
                    description={
                      <p className={styles.keyword} style={{ color: 'black' }}>
                        Principal Investigator
                      </p>
                    }
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="RESEARCH STAFF" key="3">
            <Row justify={'center'}>
              <Col md={18}>
                <Row justify={'space-around'}>
                  <Col flex={'230px'}>
                    <Card
                      cover={
                        <Image width={'100%'} preview={false} src={LTZ}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Tianzi Liu</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            Assistant Professor
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                  <Col flex={'230px'}>
                    <Card
                      cover={
                        <Image width={'100%'} preview={false} src={WYY}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Yin-Ying Wang</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            Assistant Professor
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                  <Col flex={'230px'}>
                    <Card
                      cover={
                        <Image width={'100%'} preview={false} src={YN}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Na Yuan</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            Assistant Professor
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="STUDENTS" key="4">
            <Row justify={'center'}>
              <Col md={18}>
                <Row justify={'space-around'}>
                  <Col flex={'230px'}>
                    <Card
                      cover={
                        <Image width={'100%'} preview={false} src={KHE}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Hongen Kang</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            PhD Candidate
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                  <Col flex={'230px'}>
                    <Card
                      cover={
                        <Image width={'100%'} preview={false} src={LSQ}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Shiqi Lin</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            PhD Candidate
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                  <Col flex={'230px'}>
                    <Card
                      cover={
                        <Image width={'100%'} preview={false} src={WMQ}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Mingqiu Wu</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            MS Candidate
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                  <Col flex={'230px'}>
                    <Card
                      cover={
                        <Image width={'100%'} preview={false} src={GXJ}></Image>
                      }
                    >
                      <Meta
                        style={{ color: 'black' }}
                        title={<p className={styles.name}>Xingjian Gao</p>}
                        description={
                          <p
                            className={styles.keyword}
                            style={{ color: 'black' }}
                          >
                            PhD Candidate
                          </p>
                        }
                      />
                    </Card>
                  </Col>
                </Row>
                <Divider style={{ marginTop: '2%', marginBottom: '2%' }} />
                <Row justify={'center'}>
                  <Col md={18}>
                    <Row justify={'space-around'}>
                      <Col flex={'230px'}>
                        <Card
                          cover={
                            <Image width={'100%'} preview={false} src={ZXL}></Image>
                          }
                        >
                          <Meta
                            style={{ color: 'black' }}
                            title={<p className={styles.name}>Xiuli Zhu</p>}
                            description={
                              <p
                                className={styles.keyword}
                                style={{ color: 'black' }}
                              >
                                MS Candidate
                              </p>
                            }
                          />
                        </Card>
                      </Col>
                      <Col flex={'230px'}>
                        <Card
                          cover={
                            <Image width={'100%'} preview={false} src={LH}></Image>
                          }
                        >
                          <Meta
                            style={{ color: 'black' }}
                            title={<p className={styles.name}>He Li</p>}
                            description={
                              <p
                                className={styles.keyword}
                                style={{ color: 'black' }}
                              >
                                MS Candidate
                              </p>
                            }
                          />
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </Row>
    </>
  );
}
