import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../redux/slice/dataSlice";
import api from "../../../pages/api/api";
import { Card, Col, Row, Image } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import React from "react";
import Link from "next/link";
const { Meta } = Card;

import style from "./style.module.scss";

function Products(props) {
  const { prod } = props
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      await dispatch(fetchData());
    };
    fetch();
  }, [dispatch]);

  return (
    <Row className={style.row} gutter={[16]}>
      {
        prod?.map((item, index) => (
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
                <Meta
                  className={style["title"]}
                  title={item.title}
                  description="www.instagram.com"
                />
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
    </Row>
  );
}

export default Products;
