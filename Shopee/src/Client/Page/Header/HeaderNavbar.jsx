import React, { useEffect, useState } from 'react'
import '../Css/Header.css'
import SaveOderAPI from '../../../API/SaveOder';
import {Link } from "react-router-dom";
import { $ } from "../../../Unti"
export const HeaderNavbar = () => {
    const [userLocalStorage, setSaveUser] = useState([])
    const [saveOders, setSaveOder] = useState([])

    useEffect(async () => {
        const user = JSON.parse(localStorage.getItem("user")) //lấy user đang đăng nhập ở localStorage
        const { data: saveoders } = await SaveOderAPI.getAll() //lấy ra những oder của user đang đăng nhập
        const newSaveoder = saveoders.filter(item => {
            if (userLocalStorage !== null) {
                if (item.user_id == userLocalStorage._id) {
                    return item
                }
            }
        })
        newSaveoder.reverse()
        setSaveOder(newSaveoder)
        setSaveUser(user)

    }, [])

    useEffect(() => {
        var sticky = $("#navbar").offsetTop;
        window.onscroll = async function () {
            (window.pageYOffset >= sticky ? $("#navbar").classList.add("sticky") : $("#navbar").classList.remove("sticky"))
        };
    }, [])

    const logOut = () => {
        localStorage.removeItem("user")
        window.location.href = ""
    }

    function checkLognIn(user) {
        if (userLocalStorage == null) {
            return (
                <React.Fragment>
                    <Link to="">đăng ký</Link> <Link to="/login">đăng nhập</Link>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <span><Link to="/#/user-overview">{user.name}</Link>
                        <ul>
                            <li><Link to=""><i className="fas fa-user-cog"></i> Quản trị WebSite</Link></li>
                            <li id="signout"><a onClick={logOut}><i className="fas fa-sign-out-alt"></i> Đăng xuất</a></li>
                        </ul>
                    </span>
                </React.Fragment>
            )
        }
    }
    function checkOder(user) {
        if (user == undefined) {
            return (
                <div className="shopping-cart">
                    <Link to="">
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                </div>
            )
        } else {
            if (saveOders == "") {
                return (
                    <div className="shopping-cart">
                        <div className="shopee-cart-number-badge">{saveOders.length}</div>
                        <Link to="/cart">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                        <div className="show-cart">
                            <div className="cart__produtcs-news">Chưa có sản phẩm</div>
                        </div>
                    </div>
                )
            } else {

                return (
                    <div className="shopping-cart">
                        <div className="shopee-cart-number-badge">{saveOders.length}</div>
                        <Link to="/cart">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                        <div className="show-cart">
                            <div className="cart__produtcs-news">sản phẩm mới thêm
                            </div>
                            <hr />
                            <div className="list_show-cart">
                                {saveOders.map((item, index) => {
                                    return (
                                        <Link to="" key={index}>
                                            <div className="show-cart_img">
                                                <img
                                                    src={item.cover_image} alt=""
                                                />
                                            </div>
                                            <div className="show-cart_name">
                                                <p>{item.name_pro}</p>
                                            </div>
                                            <div className="show-cart_money">
                                                <p>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</p>
                                            </div>
                                        </Link>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }


    return (
        <React.Fragment>
            <div className="header">
                <div className="header__main-navbar-wrapper">
                    <div className="flex">
                        <ul>
                            <li><a href="/#/seller-channel/signup">kênh người bán</a></li>
                            <li><a href="">tải ứng dụng</a>
                                <img src="http://4.bp.blogspot.com/-Nzb2jX4c0iU/VIcZCT15vPI/AAAAAAAAGeE/5ijVMwGf5ak/s1600/QRCodeGeneratorImage.png" alt="" />
                            </li>
                            <li>
                                <span>Kết nối</span> <a href=""><i className="fab
                                        fa-facebook"></i></a><a href=""><i
                                    className="fab fa-instagram"></i></a>
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
                            {checkLognIn(userLocalStorage)}
                        </div>
                    </div>
                </div>
                <div className="header-sticky" id="navbar">
                    <div className="header__main">
                        <div className="header__main-logo-shopee">
                            <a href="/#/"><img src="https://cf.shopee.vn/file/d734f6291f072bb855371432da462d65" alt="" /></a>
                        </div>
                        <div className="header__main-search">
                            <input type="text" placeholder="Đón chờ ShopeePay Day -Giảm 50%" />
                            <i className="fas fa-search"></i>
                        </div>
                        <div className="header__main-shopping-cart">
                            {checkOder(userLocalStorage)}
                        </div>
                    </div>
                </div>

            </div>
            <div className="header__mb">
                <div className="header__mb-logo-menu">
                    <div className="mb__logo-shopee">
                        <a href="/#/cart"><img src="https://cf.shopee.vn/file/d734f6291f072bb855371432da462d65" alt="" /></a>
                    </div>
                    <div className="header__mb-search">
                        <input type="text" placeholder="Đón chờ ShopeePay Day -
                            Giảm 50%"/>
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="mb-menu">
                        <div className="mb-cart">
                            <i className="fas fa-shopping-cart"><span>43</span> </i>
                        </div>
                        <div className="mb-user" id="button__mb">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="body-user" id="mb">
                            <div className="show-user" id="display__mb">
                                <div className="user"> <i className="fas fa-user"></i> tài khoản của tôi</div>
                                <div className="cart-my"><i className="fas
                                        fa-luggage-cart"></i> đơn hàng của tôi</div>
                                <div className="admin_user"><i className="fas
                                        fa-user-cog"></i> quản trị</div>
                                <div className="logout"><i className="fas
                                        fa-sign-out-alt"></i> đăng xuất</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
