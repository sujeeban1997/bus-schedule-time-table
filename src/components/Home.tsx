import React, { useState } from 'react'
import HeroImg from "../images/Hero2.jpg"
import { DatePicker } from 'antd';
import { Select, Typography, TimePicker, Button } from 'antd';
import type { SelectProps } from 'antd';

const { Option } = Select;
const { Title } = Typography;

const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
          new Array(getRandomInt(5))
                    .join('.')
                    .split('.')
                    .map((_, idx) => {
                              const category = `${query}${idx}`;
                              return {
                                        value: category,
                                        label: (
                                                  <div
                                                            style={{
                                                                      display: 'flex',
                                                                      justifyContent: 'space-between',
                                                            }}
                                                  >
                                                            <span>
                                                                      Found {query} on{' '}
                                                                      <a
                                                                                href={`https://s.taobao.com/search?q=${query}`}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                      >
                                                                                {category}
                                                                      </a>
                                                            </span>
                                                            <span>{getRandomInt(200, 100)} results</span>
                                                  </div>
                                        ),
                              };
                    });


const Home = () => {

          const [options, setOptions] = useState<SelectProps<object>['options']>([]);


          const onChange = (value: string) => {
                    console.log(`selected ${value}`);
          };

          const onSearch = (value: string) => {
                    console.log('search:', value);
          };

          const filterOption = (input: string, option?: { label: string; value: string }) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

          const onFinish = (fieldsValue: any) => {
                    const rangeTimeValue = fieldsValue['range-time-picker'];
                    const values = {
                              'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
                    };
          }

          return (
                    <div>
                              <img className='hero-image' src={HeroImg} alt='' />
                              <div className='card-form-section'>
                                        <div className='form-section'>
                                                  <h4>Where do you want to go?</h4>


                                                  <div className='form-text-field'>
                                                            <h6 className='form-title-name'>Start location</h6>
                                                            <Select className='form-field'
                                                                      showSearch
                                                                      allowClear
                                                                      placeholder="Select a place"
                                                                      optionFilterProp="children"
                                                                      onChange={onChange}
                                                                      onSearch={onSearch}
                                                                      filterOption={filterOption}
                                                                      options={[
                                                                                {
                                                                                          value: 'jack',
                                                                                          label: 'Jack',
                                                                                },
                                                                                {
                                                                                          value: 'lucy',
                                                                                          label: 'Lucy',
                                                                                },
                                                                                {
                                                                                          value: 'tom',
                                                                                          label: 'Tom',
                                                                                },
                                                                      ]}
                                                            />
                                                  </div>

                                                  <div className='form-text-field'>
                                                            <h6 className='form-title-name'>End location</h6>
                                                            <Select className='form-field'
                                                                      showSearch
                                                                      allowClear
                                                                      placeholder="Select a place"
                                                                      optionFilterProp="children"
                                                                      onChange={onChange}
                                                                      onSearch={onSearch}
                                                                      filterOption={filterOption}
                                                                      options={[
                                                                                {
                                                                                          value: 'jack',
                                                                                          label: 'Jack',
                                                                                },
                                                                                {
                                                                                          value: 'lucy',
                                                                                          label: 'Lucy',
                                                                                },
                                                                                {
                                                                                          value: 'tom',
                                                                                          label: 'Tom',
                                                                                },
                                                                      ]}
                                                            />
                                                  </div>

                                                  <div className='form-time-picker d-flex'>
                                                            <div className='form-text-field'>
                                                                      <h6 className='form-title-name'>Start time</h6>
                                                                      <TimePicker className='form-field' />
                                                            </div>

                                                            <div className='form-text-field'>
                                                                      <h6 className='form-title-name'>End time</h6>
                                                                      <TimePicker className='form-field' />
                                                            </div>
                                                  </div>

                                                  <div className='form-text-field'>
                                                            <h6 className='form-title-name'>Date</h6>
                                                            <DatePicker className='form-field' />
                                                  </div>

                                                  <div className='form-text-field'>
                                                            <Button className='search-button'>
                                                            Search buses
                                                            </Button>
                                                  </div>

                                        </div>
                              </div>
                    </div>

          )
}

export default Home