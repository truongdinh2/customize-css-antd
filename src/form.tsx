import { Form, Input, Button, Space, Row, Col, Divider, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { FormValues } from './typesc/form';

const FormFile = () => {
    // const obj = {t:3,r:33,w:1}
    // console.log(obj['t'])
    // for( x in obj){
    //     console.log(x,obj['t'],obj[x])
    // }
    const onFinish = (values: FormValues) => {
        console.log('Received values of form:', values);
    };

    return (
        // <Row gutter={15}>
        //     <Col span={24}>
        // <Space >
        <div style={{ width: '90%', margin: '10px auto' }}>

            <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                {/* <Space
                    direction="horizontal"
                    style={{ display: 'flex', justifyContent: "space-between", }}
                    align="center"
                    split={
                        <MinusCircleOutlined style={{ opacity: 0 }} />

                    }
                >
                    <Form.Item
                        // {...field}
                        name={['users','first']}
                        // fieldKey={[field.fieldKey, 'first']}
                        rules={[{ required: true, message: 'Missing first name' }]}
                    >
                        <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                        // {...field}
                        // name={[field.name, 'last']}
                        // fieldKey={[field.fieldKey, 'last']}
                        rules={[{ required: true, message: 'Missing last name' }]}
                    >
                        <Input placeholder="Last Name" />
                    </Form.Item>
                </Space> */}
                <Form.List name="users">
                    {(fields, { add, remove }) => (
                        <>
                            {console.log(fields)}
                            {fields.map(field => (
                                <Space key={field.key}
                                    style={{ display: 'flex' }}
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...field}
                                        name={[field.name, 'first']}
                                        fieldKey={[field.fieldKey, 'first']}
                                        rules={[{ required: true, message: 'Missing first name' }]}
                                    >
                                        <Input placeholder="First Name" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                                    {/* <Form.Item
                                        {...field}
                                        name={[field.name, 'last']}
                                        fieldKey={[field.fieldKey, 'last']}
                                        rules={[{ required: true, message: 'Missing last name' }]}
                                    >
                                        <Input placeholder="Last Name" />
                                    </Form.Item> */}
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add(0)} block icon={<PlusOutlined />}>
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
        </div>

    )
}
export default FormFile