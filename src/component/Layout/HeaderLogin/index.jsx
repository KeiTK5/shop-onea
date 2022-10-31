import Link from 'next/link';
import React from 'react';
import style from './style.module.scss';
function HeaderLogin(props) {
    return (
        <div className={style['header-login']}>
            <Link href='/'><p className={style["logo"]}>Onea.</p></Link>
            <Link href='/help'><p className={style["help"]}>You need help ?</p></Link>
        </div>
    );
}

export default HeaderLogin;