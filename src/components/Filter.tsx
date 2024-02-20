import React from 'react'
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';


const onChange: CheckboxProps['onChange'] = (e) => {
          console.log(`checked = ${e.target.checked}`);
};

const Filter = () => {
          return (
                    <div className='bus-filter-section mt-4'>
                              <h5 className='filter-main-title'>Filter by:</h5>
                              <hr></hr>
                              <div className='category-section'>
                                        <h6>Bus type</h6>
                                        <div className='d-flex justify-content-between'>
                                                  <Checkbox onChange={onChange}>SLTB</Checkbox>
                                                  <div className='category-count'>142</div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                                  <Checkbox onChange={onChange}>Private</Checkbox>
                                                  <div className='category-count'>32</div>
                                        </div>
                              </div>
                              <hr></hr>
                              <div className='category-section'>
                                        <h6>Select Category</h6>
                                        <div className='d-flex justify-content-between'>
                                                  <Checkbox onChange={onChange}>Luxary</Checkbox>
                                                  <div className='category-count'>32</div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                                  <Checkbox onChange={onChange}>Semi Luxary</Checkbox>
                                                  <div className='category-count'>87</div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                                  <Checkbox onChange={onChange}>Normal</Checkbox>
                                                  <div className='category-count'>142</div>
                                        </div>
                              </div>
                              <hr></hr>
                              <div className='category-section pb-3'>
                                        <h6>Bus route</h6>
                                        <div className='d-flex justify-content-between'>
                                                  <Checkbox onChange={onChange}>Normal way</Checkbox>
                                                  <div className='category-count'>157</div>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                                  <Checkbox onChange={onChange}>Express way</Checkbox>
                                                  <div className='category-count'>45</div>
                                        </div>
                              </div>
                    </div>
          )
}

export default Filter