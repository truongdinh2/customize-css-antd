import { Form, Input, Button, Space, Row, Col, Divider, Typography, DatePicker } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
// import { FormValues } from './typesc/form';
import { useEffect, useState } from 'react';
// import Moment from 'react-moment';
import moment from 'moment';
interface FormValues {
    task1: {
        date?: Date | string,
        date1: string | Date
    } | any
    // task1: any
}
const FormFile = () => {
    const [dataForm, setDataForm] = useState<FormValues>({ task1: {} });
    const [form] = Form.useForm()
    // const obj = {t:3,r:33,w:1}
    // console.log(obj['t'])
    // for( x in obj){
    //     console.log(x,obj['t'],obj[x])
    // }
    // useEffect(() => {
    //     form.setFieldsValue({task1:dataForm});

    //     console.log(dataForm)
    //   });
    // useEffect(() => {
    //     form.setFieldsValue('');
    // });
    const onFinish = (values: FormValues) => {
        const dateFormat = moment(values.task1.date).format("MM/DD/YYYY");
        setDataForm({ task1: { ...values.task1, date1: dateFormat } });

        console.log('Received values of form:', values);
    };
    console.log(dataForm)
    const click = () => {
        form.setFieldsValue({ task1: dataForm.task1 });
        console.log('hi')
        console.log(dataForm.task1)
        console.log(dataForm)
    }
    return (
        <div style={{ width: '90%', margin: '10px auto' }}>
            <Form
                name="dynamic_form_nest_item" onFinish={onFinish}
                form={form}
                autoComplete="off"
                >
                <Form.Item name={['task1', 'date']}>
                    <DatePicker placeholder="date" />
                </Form.Item>
                <Space
                    direction="horizontal"
                    style={{ display: 'flex', justifyContent: "space-between", }}
                    align="center"
                    split={
                        <MinusCircleOutlined style={{ opacity: 0 }} />
                    }
                >
                    <Form.Item
                        name={['task1', 'nameTask']}
                        rules={[{ required: true, message: 'Missing this name' }]}
                    >
                        <Input placeholder="Named task" />
                    </Form.Item>
                    <Form.Item

                        name={['task1', 'contentTask']}
                        rules={[{ required: true, message: 'Missing this name' }]}
                    >
                        <Input placeholder="Content task" />
                    </Form.Item>
                </Space>
                <Form.List name={['task1', 'users']}>
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(field => (

                                <Space key={field.key}
                                    style={{ display: 'flex', flexDirection: 'row-reverse' }}
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...field}
                                        name={[field.name, 'contentTask']}
                                        fieldKey={[field.fieldKey, 'first']}
                                        rules={[{ required: true, message: 'Missing this field' }]}
                                    >
                                        {console.log(field)}
                                        <Input placeholder="Content task" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => { add() }} block icon={<PlusOutlined />}>
                                    Add field
                        </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>


                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ display: "flex", justifyContent: "center" }}>
                        Submit
                        </Button>
                </Form.Item>
            </Form>

            <button onClick={click}>hi</button>
        </div>

    )
}
export default FormFile