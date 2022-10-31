import React from 'react';
import Link from 'next/link';
import style from './style/style.module.scss'
function BuyBox({ total }) {

    return (
        <div className={style['buy-box']}>
            <div className={style["buy-item"]}>
                <p className={style["title-total"]}>Total: </p>
                <p className={style["total-price"]}>${Math.floor(total)}</p>

            </div>
            <div className={style["buy-item"]}>
                <Link href='/payment'>
                    <div className={style["btn-buy"]}>
                        Payment
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default BuyBox;


