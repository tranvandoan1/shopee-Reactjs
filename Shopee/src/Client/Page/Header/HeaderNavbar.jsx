import React from 'react'
import ProAPI from '../../../API/ProductsAPI';
import { $ } from '../../../Unti';

export const  HeaderNavbar =  () => {
    const HeaderFooterCss = $("#HeaderFooterCss")
    var head = $("head");
    HeaderFooterCss.href = './src/Client/Page/Css/Header.css';
    head.appendChild(HeaderFooterCss);
    const {data:products}= ProAPI.getAll()
    console.log(products)
  return (
    <div>
        <div className="header">
            <div className="header__main-navbar-wrapper">
                <div className="flex">
                    <ul>
                        <li><a href="">kênh người bán</a></li>
                        <li><a href="">tải ứng dụng</a>
                            <img src="http://4.bp.blogspot.com/-Nzb2jX4c0iU/VIcZCT15vPI/AAAAAAAAGeE/5ijVMwGf5ak/s1600/QRCodeGeneratorImage.png" alt="" />
                        </li>
                        <li>
                            <span>Kết nối</span> <a href=""><i className="fab
                                        fa-facebook"></i></a><a href=""><i className="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="navbar__spacer"></div>
                <div className="navbar__links">
                    <ul>
                        <li><a href=""><i className="far fa-bell"></i> thông báo</a></li>
                        <li><a href=""><i className="far fa-question-circle"></i>
                                hỗ trợ</a></li>
                        <li><a><i className="fas fa-globe"></i> tiếng
                                việt <i className="fas fa-angle-down"></i></a>
                            <ul>
                                <li><a href="">việt nam</a></li>
                                <li><a href="">english</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="login-logout">
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
