import React, { useEffect, useState } from 'react';
import { Breadcrumb, Space, Table, InputNumber, Image, Typography, message, Modal } from 'antd';
import Link from "next/link"
import BuyBox from '../../src/component/BuyBox/buyBox';

import style from './style/style.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, updateCart } from '../../redux/slice/cartSlice';
import api from '../api/api';

function Cart(props) {
    const [selectionType, setSelectionType] = useState('checkbox');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [edit, setEdit] = useState(true)
    const [editingKey, setEditingKey] = useState(0)
    const [amount, setAmount] = useState(1)
    const [id, setId] = useState()
    const response = useSelector(state => state.cart?.response)
    const dispatch = useDispatch()


    const { Text } = Typography;

    useEffect(() => {
        const fetch = async () => {
            await dispatch(fetchCart())
        }
        fetch()
    }, [dispatch, response])

    const total = response?.map((item) => item?.price * item?.amount).filter((x) => x > 0).reduce((x, y) => x + y, 0)


    const showModal = (id) => {
        setId(id)
        setIsModalOpen(true);
    };

    const handleDelete = async () => {
        try {
            await api.deleteCart(id)
            setIsModalOpen(false);
            message.success('Deleted');
        } catch (error) {
            console.log(error);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };

    const onChange = async (value) => {
        setAmount(value)
    };

    const editItem = record => {
        setEditingKey(record.id)
        setEdit(false)
    }

    const saveItem = async () => {
        setEditingKey(0)
        setEdit(true)

        const object = {
            amount: amount
        }

        try {
            await api.patchCart(editingKey, object)
            if (edit === false) {
                message.success('Update Success');
                setAmount(0)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <div className={style["box-item"]}>
                <Image src={image} width={100}
                    height={"auto"} alt="image" />
            </div>,
        },
        {
            title: 'Name',
            dataIndex: 'title',
            key: 'title',
            render: (text, record) => <div className={style["box-item"]}>
                <Link href={`/detail/${record?.id}/${record?.categoryId}`} >
                    <Text style={{ marginLeft: 16 }} className={style['title']}>{text}</Text>
                </Link>
            </div>,
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (number, record) => {
                return <InputNumber disabled={record.id === editingKey ? false : true} min={1} max={10} defaultValue={number} onChange={onChange} style={{ width: 80, marginRight: 8 }} />
            }
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (number, record) => <div className={style['price']}>${Math.floor(record.price * record.amount)}</div>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                const isEditing = record.id === editingKey || editingKey === 0
                return isEditing ?
                    <Space size="middle">
                        {
                            edit ?
                                <a onClick={() => editItem(record)} className={style['btn-action edit']}>Edit</a>
                                :
                                <a onClick={() => saveItem(record)} className={style['btn-action edit']}>OK</a>
                        }
                        <a onClick={() => showModal(record.id)} className={style['btn-action delete']}>Delete</a>
                    </Space> :
                    ''

            }
            ,
        },
    ];


    return (
        <div className={style['cart']}>
            <Breadcrumb className={style["breadcrumb-cart"]}>
                <Breadcrumb.Item className={style["breadcrumb"]}>Home</Breadcrumb.Item>
                <Breadcrumb.Item className={style["breadcrumb"]}>
                    <a href="">Cart</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Table className={style['table-column']} columns={columns} dataSource={response || []} rowSelection={{
                type: selectionType,
                ...rowSelection,
            }} />
            <BuyBox total={total} />
            <Modal okType={'danger'} title="Are you sure delete this product?" open={isModalOpen} onOk={handleDelete} onCancel={handleCancel}>
                <p>Are you sure delete this product?</p>
            </Modal>
        </div>
    );
}

export default Cart;