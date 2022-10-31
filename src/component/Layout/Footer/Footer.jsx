import React from 'react';
import style from './style.module.scss'
function Footer(props) {
    return (
        <div className={style["footer"]}>
            <div className={style['row-footer']}>

                <div className={style["column-footer"]}>
                    <a href="#" className={style['title-footer']}>Onea.</a>
                    <a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ipsam.</a>
                </div>


                <div className={style["column-footer"]}>
                    <a href="#" className={style['title-footer']}>Locate Us</a>
                    <a href="#">487 Eighth Avenue West Street, New York</a>
                    <a href="#">Phone: 0035265244</a>
                    <a href="#">E-mail: onea@example.com</a>
                </div>


                <div className={style["column-footer"]}>
                    <a href="#" className={style['title-footer']}>Information</a>
                    <a href="#">About Us</a>
                    <a href="#">FAQ Page</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Work with us</a>
                </div>


                <div className={style["column-footer"]}>
                    <a href="#" className={style['title-footer']}>Discover</a>
                    <a href="#">Men</a>
                    <a href="#">Woman</a>
                    <a href="#">Home & Living</a>
                    <a href="#">Sale</a>
                    <a href="#">Private Shopping</a>
                </div>


                <div className={style["column-footer"]}>
                    <a href="#" className={style['title-footer']}>Connect</a>
                    <a href="#">Follow Us On Instagram</a>
                    <a href="#">Add to Facebook</a>
                    <a href="#">Pinterest</a>
                    <a href="#">Follow us on Twitter</a>
                </div>


                <div className={style["column-footer"]}>
                    <a href="#" className={style['title-footer']}>Download App</a>
                    <a href="#">Onea App for iOS and Android</a>
                </div>

            </div>
            <div className={style["copy-right"]}>
                © 2018 Qode Interactive, All Rights Reserved
            </div>
        </div>
    );
}

export default Footer;