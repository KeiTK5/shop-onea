import { Breadcrumb, Button, Form, Input, message } from 'antd';
import React from 'react';
import { useRouter } from 'next/router';
import api from '../api/api';
import style from './style.module.scss'
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        number: '${label} is not a valid number!',
    },
};
/* eslint-enable no-template-curly-in-string */

function Payment() {

    const router = useRouter()

    const onFinish = async (values) => {
        const obj = {
            id: 4,
            name: values.name,
            phone: values.phone,
            address: values.address,
            note: values.note
        }
        try {
            await api.postInfo(obj)
            message.success('Payment Successfully, You can view order information here')
            router.replace('/step')
        } catch (error) {
            message.info('You have an unreceived application')
        }
    };

    return (
        <div className={style["payment"]}>
            <Breadcrumb className={style["breadcrumb-payment"]}>
                <Breadcrumb.Item className={style["breadcrumb"]}>Home</Breadcrumb.Item>
                <Breadcrumb.Item className={style["breadcrumb"]}>
                    <a href="">Payment</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Form {...layout} className={style["form-payment"]} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['name']}
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['phone']}
                    label="Phone"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['address']}
                    label="Address"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name={['note']} label="Note">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Payment
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
};

export default Payment;