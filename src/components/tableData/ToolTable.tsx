import { Button as ButtonMater } from '@material-ui/core';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import { Button, Form, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterTable, GetApi } from '../../action';
import './toolTable.css';
const { Option }: any = Select;

const children: any = [];
// for (let i = 10; i < 36; i++) {
//     children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }
export default function ToolTable() {
    const [valueSearch, setValueSearch] = useState<string>('');
    const [isFilterBox, setIsFilterBox] = useState(false);
    const [locationFilter, setLocationFilter] = useState<any>({data:[]});
    const dispatch = useDispatch();
    const [dataApi, setDataApi] = useState([]);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getDataApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        dispatch(GetApi(dataApi))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])

    const getDataApi = () => {
        const api = "https://5fbb616ec09c200016d4067a.mockapi.io/kito";
        const results = fetch(api)
            .then(res => res.json())
            .then(data => { setDataApi(data); setLoading(true) })
            .catch(err => console.log(`Warning!!! Error fetching data!!! 
          Error ${err}`));
        return results;
    }

    const dataRedux: any = useSelector((state: any) => state.dataSide)
    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }
    const onFinish = (values: any) => {
        setLocationFilter(values);
        setLoading(!loading);
        setIsFilterBox(!isFilterBox)
    }
    // const OptionSelect = () => (
    //     dataRedux.data.map((data: any,index:number)=>(
    //         <Option value={data} key={index}>
    //             {console.log(data)}
    //             {data.location}
    //         </Option>
    //     ))
    // )
    const FilterBox = () => (
        <div className="model_filter" >
            {/* {loading && */}
                <Form
                    name="dynamic_form_nest_item"
                    onFinish={onFinish}
                    form={form}
                    autoComplete="off"
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: "space-between",
                        padding: ' 10px 0'
                    }}>
                        <ButtonMater variant="contained" color="secondary">reset</ButtonMater >
                        <ButtonMater variant="contained" color="primary"
                            onClick={() => setIsFilterBox(!isFilterBox)}
                        >x</ButtonMater >
                    </div>
                    <div>
                        <Form.Item
                            name="location"
                        >
                            <Select
                                mode="tags"
                                style={{ width: '100%' }}
                                placeholder="location"
                                onChange={handleChange}
                                maxLength={2}
                            >
                                { loading &&
                                dataRedux.data.map((data: any, index: number) => (
                                    <Option value={data.location} key={index}>
                                        {data.location}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            name="subject"
                        >
                            <Select mode="tags" style={{ width: '100%' }}
                                placeholder="subject"
                            // value="all"
                            // onChange={handleChange}
                            >
                                <Option value="all" selec>All</Option>
                                {children}
                            </Select>
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            name="cost"
                        >
                            <Select mode="tags" style={{ width: '100%' }}
                                placeholder="cost"
                            // onChange={handleChange}
                            >
                                {children}
                            </Select>
                        </Form.Item>
                    </div>
                    <div>
                        <Button htmlType="submit"  >sub</Button>
                    </div>
                </Form>

        </div>
    )
    console.log(locationFilter)
    const FilterData = () => {
        // console.log(locationFilter.location);
        let loca:string[] = locationFilter.location;
        // loca.map(());
        // dataApi.data
        setLocationFilter('')
    }
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
                    {isFilterBox && <FilterBox/>}
                </div>
            </div>
        </>
    )
}
