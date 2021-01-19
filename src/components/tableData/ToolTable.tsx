import { Button } from '@material-ui/core';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import { Select } from 'antd';
import input from 'antd/lib/input';
import React, { useEffect, useState } from 'react';
import './toolTable.css';
const { Option }: any = Select;

const children: any = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value: any) {
    console.log(`selected ${value}`);
}
export default function ToolTable() {
    const [valueSearch, setValueSearch] = useState<string>('');
    console.log(valueSearch);
    const [isFilterBox, setIsFilterBox] = useState(false);
    useEffect(() => {
     
    }, [])
    const FilterBox = () => (
        <div className="model_filter" >
            <div style={{display:'flex',
            justifyContent:"space-between",
            padding:' 10px 0'}}>
                <Button variant="contained" color="secondary">reset</Button >
                <Button variant="contained" color="primary" 
                            onClick={() => setIsFilterBox(!isFilterBox)}
                >x</Button >
            </div>
            <div>
                <Select mode="tags" style={{ width: '100%' }}
                    placeholder="Tags Mode"
                    onChange={handleChange}
                    defaultValue="all"
                    >
                    <Option>All</Option>
                </Select>
            </div>
            <div>
                <Select mode="tags" style={{ width: '100%' }}
                    placeholder="Tags Mode"
                    onChange={handleChange}>
                    {children}
                </Select>
            </div>
            <div>
                <Select mode="tags" style={{ width: '100%' }}
                    placeholder="Tags Mode"
                    onChange={handleChange}>
                    {children}
                </Select>
            </div>
    
        </div>
    )
    return (
        <>
            <div className="body">
                <div className="form__group field">
                    <input type="input" className="form__field"
                        onChange={(e: any) => setValueSearch(e.target.value)}
                        placeholder="Name" name="name" id='name' />
                    <label htmlFor="name" className="form__label">Name</label>
                </div>
                <div className="filter" >
                    <button
                        className="btn_icon"
                        onClick={() => setIsFilterBox(!isFilterBox)}
                    ><FilterListRoundedIcon color="secondary" /></button>
                    {isFilterBox && <FilterBox></FilterBox>}
                </div>
            </div>
        </>
    )
}
