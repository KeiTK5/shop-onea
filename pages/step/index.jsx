import { Breadcrumb, Steps, Divider, List, Typography } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../api/api';
import style from './style.module.scss'
const { Step } = Steps;
function StepComponent() {
    const [data, setData] = useState()
    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await api.getInfo()
                setData(res.data)
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetch()
    }, [])

    return (
        <div className={style['step']}>
            <Breadcrumb className={style["breadcrumb-step"]}>
                <Breadcrumb.Item className={style["breadcrumb"]}>Home</Breadcrumb.Item>
                <Breadcrumb.Item className={style["breadcrumb"]}>
                    <a href="">Process</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className={style["box-order"]}>
                <Steps direction="vertical" className={style['process']} current={1}>
                    <Step title="Confirmed" description="Order has been paid." />
                    <Step title="Closing Stock" description="The seller is preparing the goods." />
                    <Step title="In Progress" description="Your order is on its way to you." />
                    <Step title="Successfully Delivered" description="Your order has been delivered." />
                </Steps>
                <div className={style["box-info"]}>
                    <Divider orientation="left">Your info</Divider>
                    <List
                        className={style['list-info']}
                        bordered
                    >
                        {
                            data?.map(item => (
                                <>
                                    <List.Item>
                                        <Typography.Text type="success" style={{minWidth: '80px'}} className={style['txt']}>[Name]</Typography.Text> {item?.name}
                                    </List.Item>
                                    <List.Item>
                                        <Typography.Text type="success" style={{minWidth: '80px'}} className={style['txt']}>[Phone]</Typography.Text> {item?.phone}
                                    </List.Item>
                                    <List.Item>
                                        <Typography.Text type="success" style={{minWidth: '80px'}} className={style['txt']}>[Address]</Typography.Text> {item?.address}
                                    </List.Item>
                                    <List.Item>
                                        <Typography.Text type="success" style={{minWidth: '80px'}} className={style['txt']}>[Note]</Typography.Text> {item?.note}
                                    </List.Item>
                                </>
                            ))
                        }
                    </List>
                </div>
            </div>

        </div>
    )
};
export default StepComponent;