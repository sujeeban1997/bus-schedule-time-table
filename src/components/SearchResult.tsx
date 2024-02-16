import React from 'react'
import { Space, Tag, Steps } from 'antd';
import BusImage from "../images/Hero2.jpg"
import { ArrowRightOutlined } from '@ant-design/icons';


const SearchResult = () => {
          return (
                    <>
                              <h1>Hello</h1>
                              <h1>Hello222</h1>
                              <h1>Hellowwww</h1>

                              <div className='container bus-card-section'>
                                        <div className='bus-card-details d-flex'>
                                                  <img className="details-card-image" src={BusImage} alt='' />
                                                  <div className='bus-title-name'>
                                                            <h4>Hello</h4>
                                                  </div>
                                                  <div className='bus-type-tag'>
                                                            <Space size={[1, 20]} wrap>
                                                                      <Tag color="#A82323" style={{ width: 80, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>SLTB</Tag>
                                                                      <Tag color="#325AA9" style={{ width: 80, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>Luxary</Tag>
                                                            </Space>
                                                  </div>
                                                  <div className=''>
                                                            <div className='d-flex'>
                                                                      <h5>Colombo</h5>
                                                                      <h5><ArrowRightOutlined /></h5>
                                                                      <h5>Jaffna</h5>
                                                            </div>
                                                            <div>
                                                                      <Steps
                                                                                progressDot
                                                                                current={1}
                                                                                items={[
                                                                                          {
                                                                                                    title: '09.00 AM',
                                                                                          },
                                                                                          {
                                                                                                    title: '17.30 PM',
                                                                                          },
                                                                                ]}
                                                                      />
                                                            </div>
                                                  </div>

                                        </div>
                              </div>

                    </>
          )
}

export default SearchResult