import { Form, Input, Button, Space, Row, Col, Divider, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { FormValues } from './typesc/form';
import { useEffect, useState } from 'react';

const FormFile = () => {
    const [dataForm, setDataForm] = useState({});
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
    useEffect(() => {
        form.setFieldsValue( '');

        // console.log()
    });
    const onFinish1 = async (values: any) => {
        form.setFieldsValue( '');
        console.log(values.user)
        // if (!dataEdit) {
        //     fetch("https://5fbb65b4c09c200016d406f6.mockapi.io/Project", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(values.user),
        //     }).then(() => {
        //         success()
        //         props.onChangeOpen()
        //     });
        // } else {
        //     fetch(`https://5fbb65b4c09c200016d406f6.mockapi.io/Project/${dataEdit.id}`, {
        //         method: "PUT",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(values.user),
        //     }
        //     ).then(() => {
        //         props.onChangeOpen()
        //         success();
        //     })
        // }
    };

  
    const onFinish = (values: FormValues) => {
        setDataForm(values);
        // form.set
        console.log(form)
        form.setFieldsValue('')
        // form.resetFields([''])
        console.log('hi')
        console.log('Received values of form:', values);
    };
    const click = () => {
        form.setFieldsValue({ task1: dataForm });
        alert('hi')
    }
    return (
        <div style={{ width: '90%', margin: '10px auto' }}>
            <Form name="dynamic_form_nest_item" onFinish={onFinish}
                form={form}
                autoComplete="off">
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
            <Space split={<Divider type="vertical" />}>
                <Typography.Link>Link</Typography.Link>
                <Typography.Link>Link</Typography.Link>
                <Typography.Link>Link</Typography.Link>
            </Space>
            <button onClick={click}>hi</button>



            <Form name="nest-messages" onFinish={onFinish1}
                form={form}>
                <Form.Item name={['user', 'Name']} label="Name" rules={[{ required: true }]}>
                    <Input
                    />
                </Form.Item>

                <Form.Item name={['user', 'Date_begin']} label="Date begin" rules={[
                    { required: true }]}>
                    <Input type="date" />
                </Form.Item>
                <Form.Item name={['user', 'Time_expected']}
                    label="Time expected" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'NumberPepole']} label="Leader"
                    rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit" className="btn"
                    >
                        Submit
        </Button>
                </Form.Item>
            </Form>
        </div>

    )
}
export default FormFile