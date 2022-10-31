import React, { useEffect } from 'react';

import { Card, Col, Image, Row } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
const { Meta } = Card;

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { searchData } from '../../redux/slice/searchSlice';
import style from './style/style.module.scss'

function Query(props) {
    const router = useRouter()
    const dispatch = useDispatch()
    const data = useSelector(state => state.search.response)
    const query = router.asPath.slice(7)

    useEffect(() => {
        const fetch = async () => {
            await dispatch(searchData(query))
        }
        fetch()
    }, [query])

    return (
        <Row className={style.row} gutter={[16]}>
            {
                data?.map((item, index) => (
                    <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
                        <Card
                            className={style["card"]}
                            hoverable
                            cover={
                                <Image
                                    className={style["image-product"]}
                                    alt="example"
                                    src={item?.image}
                                />
                            }
                        >
                            <Link href={`/detail/${item?.id}/${item?.categoryId}`}>
                                <Meta className={style["title"]} title={item.title} description="www.instagram.com" />
                            </Link>

                            <div className={style["box-price"]}>
                                <p className={style["price"]}>${item?.price}</p>
                                <p className={style["sold"]}>
                                    <EyeOutlined style={{ marginRight: 4 }} />
                                    {item?.rating.count}k
                                </p>
                            </div>
                        </Card>
                    </Col>
                ))
            }
        </Row >
    );
}

export default Query;