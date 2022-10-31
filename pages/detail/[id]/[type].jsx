import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Breadcrumb, Image, InputNumber, Button, Rate, message } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import api from '../../api/api';

import style from '../style/style.module.scss'

function Detail(props) {

    const [heart, setHeart] = useState(false);
    const [data, setData] = useState([]);
    const [amount, setAmount] = useState(1);

    const router = useRouter()
    const queryId = router.query.id

    useEffect(() => {
        const fetch = async () => {
            const res = await api.getDataById(queryId ? queryId : 1)
            setData([res.data])
        }
        fetch()
    }, [queryId])

    const onChange = (value) => {
        setAmount(value);
    };

    const wishList = () => {
        setHeart(!heart)
    }

    const success = () => {
        message.success('Added to cart');
    };

    const infoMess = () => {
        message.info('Products already in the cart');
    };

    const getData = async (item) => {
        const object = {
            key: item.id,
            id: item.id,
            title: item.title,
            image: item.image,
            price: Number(item.price),
            amount: Number(amount),
            categoryId: item.categoryId
        }
        try {
            await api.addToCart(object)
            success()
        } catch (error) {
            infoMess()
        }

    }

    return (
        <div className={style["box-detail"]}>
            <Breadcrumb style={{ padding: 16 }} >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Detail</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
            {
                data?.map((item, index) => (
                    <div className={style["box-info-product"]} key={index}>
                        <div className={style["box-images"]}>
                            <div className={style["box-image-large"]}>
                                <div className={style["box-image"]}>
                                    <Image src={item?.image} className={style["image-detail"]} alt="image" />
                                </div>
                            </div>
                            <div className={style["thumbnail"]}>
                                <div className={style["box-image"]}>
                                    <Image src={item?.image} width={'100%'} className={style["image-thumbnail"]} alt="image" />
                                </div>
                                <div className={style["box-image"]}>
                                    <Image src={item?.image} width={'100%'} className={style["image-thumbnail"]} alt="image" />
                                </div>
                                <div className={style["box-image"]}>
                                    <Image src={item?.image} width={'100%'} className={style["image-thumbnail"]} alt="image" />
                                </div>
                                <div className={style["box-image"]}>
                                    <Image src={item?.image} width={'100%'} className={style["image-thumbnail"]} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className={style["box-info"]}>
                            <div className={style["name-product"]}>
                                {item?.title}
                            </div>
                            <div className={style["pri-product"]}>
                                ${item?.price}
                            </div>
                            <div className={style["rate-product"]}>
                                <Rate className={style["rate"]} defaultValue={Math.round(item?.rating?.rate)} />
                            </div>
                            <div className={style["dre-product"]}>
                                {item?.description}
                            </div>
                            <div className={style["quality"]}>
                                <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} style={{ width: 80, marginRight: 8 }} />
                                <Button type="primary" onClick={() => getData(item)}>Add To Cart</Button>
                            </div>
                            <div className={style["wishlist"]} onClick={wishList}>
                                {
                                    heart ? <> <HeartFilled style={{ marginRight: 8, color: "#0779e4" }} /> added to wishlist</> : <> <HeartOutlined style={{ marginRight: 8 }} />add to wishlist</>
                                }
                            </div>
                            <div className={style["sku"]}>
                                <p>SKU: 003</p>
                                <p>CATEGORY: {item?.type}</p>
                                <p>TAGS: MODERN, STYLISH</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div >
    );
}

export default Detail;