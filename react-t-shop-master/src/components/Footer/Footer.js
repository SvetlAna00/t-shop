import React from 'react';
import style from './Footer.module.css';
import '../../main_assets/main_css/main.css';
import '../../main_assets/main_css/normalize.css';

import logo_footer from '../../assets/img/logo_footer.svg';
import subscribeArrow from '../../assets/img/subscribe_arrow.svg';
import telephoneFooter from '../../assets/img/telephone_footer.svg';
import instagram from '../../assets/img/instagram.svg';
import telegram from '../../assets/img/telegram.svg';
import facebook from '../../assets/img/facebook.svg';
import Mastercard from '../../assets/img/card_1.svg';
import Visa from '../../assets/img/card_2.svg';
import Mir from '../../assets/img/card_3.svg'
import Maestro from '../../assets/img/card_4.svg';

const Footer = (props) => {
    return (
        <footer className={style.footer}>
            <img className={style.footer_logo} src={logo_footer} alt="t-shop" />

            <div className={style.footer_content}>

                <div className={style.footer_content_item}>
                    <div className={style.footer_subscribe}>
                        <div className={style.footer_subscribe_text}>
                            Узнавайте о скидках первыми
                        </div>
                        <div className={style.footer_form_subscribe}>
                            <input className={style.footer_form_input} type="email" placeholder="E-mail" name="email" required />
                            <button className={style.footer_form_btn}>
                                <img className={style.footer_form_arrow} src={subscribeArrow} alt="subscribe" />
                            </button>
                        </div>
                    </div>

                    <div className={style.footer_telephone}>
                        <img className={style.footer_telephone_img} src={telephoneFooter} alt="Telephone" />
                        <a className={style.footer_telephone_number} href="tel:88002004555">
                            8 800 200 45 55
                        </a>
                    </div>
                </div>

                <div className={style.footer_content_item}>
                    <div className={style.footer_menu}>
                        <a href="#" className={style.footer_menu_item}>Одежда</a>
                        <a href="#" className={style.footer_menu_item}>Обувь</a>
                        <a href="#" className={style.footer_menu_item}>Скейты</a>
                        <a href="#" className={style.footer_menu_item}>Стафф</a>
                    </div>

                    <div className={style.footer_social}>
                        <a className={style.footer_social_item} href="#"><img className={style.footer_social_img}
                            src={instagram} alt="instagram" /></a>
                        <a className={style.footer_social_item} href="#"><img className={style.footer_social_img}
                            src={telegram} alt="telegram" /></a>
                        <a className={style.footer_social_item} href="#"><img className={style.footer_social_img}
                            src={facebook} alt={facebook} /></a>
                    </div>
                </div>

                <div className={style.footer_content_item}>
                    <div className={style.footer_privacy_policy}>
                        <a href="#">Политика конфиденциальности</a>
                    </div>

                    <div className={style.footer_ofetra}>
                        <a href="#">Оферта</a>
                    </div>

                    <div className={style.footer_cards}>
                        <img className={style.footer_card} src={Mastercard} alt="Mastercard" />
                        <img className={style.footer_card} src={Visa} alt="Visa" />
                        <img className={style.footer_card} src={Mir} alt="Mir" />
                        <img className={style.footer_card} src={Maestro} alt="Maestro" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;