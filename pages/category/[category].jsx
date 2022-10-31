import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Card, Col, Row, Image } from "antd";

import style from '../../src/component/Products/style.module.scss'
import api from '../api/api';


const { Meta } = Card;

function Category(props) {

    const [data, setData] = useState([]);

    const router = useRouter()
    const queryId = router.query.category



    useEffect(() => {
        const fetch = async () => {
            const res = await api.getCategoryId(queryId ? queryId : 1)
            setData(res.data)
        }
        fetch()
    }, [queryId])

    return (
        <Row className={style.row} gutter={[16]}>
            {data?.map((item, index) => (
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
                            <Meta className={style["title"]} title={item?.title} description="www.instagram.com" />
                        </Link>

                        <div className={style["box-price"]}>
                            <p className={style["price"]}>${item?.price}</p>
                            <p className={style["sold"]}>{item?.rating?.count}k</p>
                        </div>
                    </Card>
                </Col>
            ))}

        </Row >
    );
}

export default Category;