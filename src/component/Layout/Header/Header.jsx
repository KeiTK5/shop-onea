import React, { useRef, useState } from 'react';
import { useSelector, } from 'react-redux';
import { SearchOutlined, ShoppingCartOutlined, BellOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import Link from "next/link"
import style from '../layout.module.scss'

function HeaderComponent(props) {
    const ref = useRef()
    const router = useRouter()

    const [query, setQuery] = useState('')

    const handleChange = (value) => setQuery(value.target.value);

    const onSearch = () => {
        router.replace(`/query`)
        router.push(`/query?${query}`)
    }

    const resetSearch = () => {
        setQuery('')
    }

    const response = useSelector(state => state.user.response)

    return (
        <>
            <div className={style['info']}>
                <div className={style["nav-left"]}>
                    <a href="#" className={style["nav-item"]}>Connect with us</a>
                </div>
                <ul className={style['nav']}>
                    <li className={style["nav-item"]}><BellOutlined style={{ paddingRight: 4 }} />Notification</li>
                    <li className={style["nav-item"]}><QuestionCircleOutlined style={{ paddingRight: 4 }} />Support</li>
                    {
                        response.length !== 0 ? response.map((item, index) => (
                            <li key={index} className={style["nav-item"]}><Link href='/'>{item.name}</Link></li>
                        )) :
                            <>
                                <li className={style["nav-item"]}>Register</li>
                                <li className={style["nav-item"]}><Link href='/login'>Login</Link></li>
                            </>
                    }
                </ul>
            </div>
            <div className={style.menu}>
                <Link href='/'><p className={style["logo"]} onClick={resetSearch}>Onea.</p></Link>
                <div className={style["control-field"]}>
                    <input className={style['input-search']} placeholder="input search text" onChange={handleChange} value={query} ref={ref} />
                    <button className={style["btn-search"]} onClick={onSearch}><SearchOutlined /></button>
                </div>
                <div className={style["cart"]}>
                    <Link href={"/cart"}>
                        <ShoppingCartOutlined className={style["cart-icon"]} style={{ fontSize: 30, color: 'white' }} />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default HeaderComponent;