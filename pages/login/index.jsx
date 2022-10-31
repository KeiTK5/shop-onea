import React from 'react';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'antd';
import style from './style/style.module.scss'
import { fetchUser } from '../../redux/slice/userSlice';
function Login(props) {

    const router = useRouter()
    const dispatch = useDispatch()

    const onFinish = async (values) => {
        const object = values
        try {
            await dispatch(fetchUser(object))
            router.replace('/')
        } catch (error) {
            console.log(error);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={style['box-login']}>
            <div className={style["form"]}>
                <div className={style["title-form"]}>Login</div>
                <Form
                    style={{ width: '65%', margin: '0 auto' }}
                    name="basic"
                    labelCol={{
                        span: 4,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item

                    >
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <div className={style["register-form"]}>
                    <div className={style["register-box"]}>
                        <p className={style["register"]}>Forget Password</p> <p className={style["register"]}>Register</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;