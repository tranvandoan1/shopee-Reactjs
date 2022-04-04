import React, { useEffect, useState } from 'react'
import ProAPI from '../../../API/ProAPI'
import CommodityValueAPI from '../../../API/CommodityValueAPI'
import { $ } from '../../../Unti'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../../../reducers/Products'
const ProductHome = () => {
    const [commodityvalue, setCommodityvalue] = useState([])
    const [products, setProduct] = useState([]);
    const dispatch = useDispatch()
    
    const listProducts = useSelector(data => data)

    console.log(listProducts);

    useEffect(async () => {
        const { data: products } = await ProAPI.getAll();
        console.log(products)
        const { data: commodityvalue } = await CommodityValueAPI.getAll();
        setCommodityvalue(commodityvalue)
        setProduct(products);
        dispatch(getProduct())
    }, [])

    const ShowHtml = (products, commodityvalue) => {
        return (
            products.map(pro => {
                const p = commodityvalue.filter(item =>item.pro_id == pro._id ? item :"")
                const showPrice = p.map(item => item.price)
                var minPrice = Math.min.apply(Math, showPrice)
                return (
                    <li key={pro._id}>
                        <Link to={`/detail/id=${pro._id}`}>
                            <div className="products-img"><img src={pro.cover_image} alt="" />
                            </div>
                            {
                                pro.sale == 0 ? "" : (<div className="slae-pro"><span>{pro.sale + "%"}</span> giảm
                                </div>)
                            }

                            <div className="products-item_content">
                                <div className="products_name">{pro.name}</div>
                                <div className="products-price">
                                    <span>{minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</span><span>đã
                                        bán {pro.sold}</span>
                                </div>
                            </div>
                            <div className="addToCart"><span>add to
                                cart</span></div>
                        </Link>
                    </li>
                )
            })
        )
    }

    const pro_banner = $(".products-title ul li");
    const pro_show = $(".products-show>ul>li");

    pro_banner.forEach((btn, index) => {
        btn.addEventListener("click", function() {
            const pro_show_detail = pro_show[index];
            for (var i = 0; i < pro_banner.length; i++) {
                pro_banner[i].classList.remove("activePro");
            }
            for (var i = 0; i < pro_show.length; i++) {
                pro_show[i].classList.remove("pro_show");
            }
            btn.classList.add("activePro");
            pro_show_detail.classList.add("pro_show");
        });
    });


    return (
        <React.Fragment>
            <div className="products-wrapper">
                <div className="products-title">
                    <ul>
                        <li className="activePro">
                            <div className="products-title_item">gợi ý hôm nay
                            </div>
                        </li>
                        <li>
                            <div className="products-title_programme">noel 25/12</div>
                        </li>
                    </ul>
                </div>
                <div className="products-show">
                    <ul>
                        <li className="pro_show">
                            <div className="products-title_show">
                                <ul>
                                    {ShowHtml(products, commodityvalue)}
                                </ul>
                                <div className="btn-seemore"><button><a href="/#/products">xem thêm</a></button></div>
                            </div>
                        </li>
                        <li>
                            <div className="products-title_show">
                                <ul>
                                    <li>
                                        <a href="">
                                            <div className="products-img"><img src="https://www.tuticare.com/media/product/6829_1_6829.gif" alt="" /></div>
                                            <div className="products-item_content">
                                                <div className="products_name">máy tiệt trùng bằng bàn chải đánh răng UTOREX hàn quốc hihi ádhia</div>
                                                <div className="products-price">
                                                    <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                                </div>
                                            </div>
                                            <div className="addToCart"><span>add to
                                                cart</span></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="products-img"><img src="https://cdn.pico.vn/Product/39419/big_323457_dien_thoai_di_dong_samsung_a205_32gb_do_-_galaxy_a20.jpg" alt="" /></div>
                                            <div className="slae-pro"><span>30%</span> giảm
                                            </div>
                                            <div className="products-item_content">
                                                <div className="products_name">máy tiệt trùng bằng bàn chải đánh răng UTOREX hàn quốc hihi ádhia</div>
                                                <div className="products-price">
                                                    <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                                </div>
                                            </div>
                                            <div className="addToCart"><span>add to
                                                cart</span></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="products-img"><img src="https://img.websosanh.vn/v2/users/review/images/g0uimocg53p63.jpg?compress=85" alt="" /></div>
                                            <div className="slae-pro"><span>30%</span> giảm
                                            </div>
                                            <div className="products-item_content">
                                                <div className="products_name">máy tiệt trùng bằng bàn chải đánh răng UTOREX hàn quốc hihi ádhia</div>
                                                <div className="products-price">
                                                    <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                                </div>
                                            </div>
                                            <div className="addToCart"><span>add to
                                                cart</span></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="products-img"><img src="https://fptshop.com.vn/uploads/originals/2020/9/29/637369735917636373_huong-dan-cach-cai-dat-hinh-nen-may-tinh-win-10-don-gian-8.jpg" alt="" /></div>
                                            <div className="slae-pro"><span>30%</span> giảm
                                            </div>
                                            <div className="products-item_content">
                                                <div className="products_name">máy tiệt trùng bằng bàn chải đánh răng UTOREX hàn quốc hihi ádhia</div>
                                                <div className="products-price">
                                                    <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                                </div>
                                            </div>
                                            <div className="addToCart"><span>add to
                                                cart</span></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="products-img"><img src="https://amthucchayonline.com/wp-content/uploads/2019/10/muopxaomigoi_thumb1.jpg" alt="" /></div>
                                            <div className="slae-pro"><span>30%</span> giảm
                                            </div>
                                            <div className="products-item_content">
                                                <div className="products_name">máy tiệt trùng bằng bàn chải đánh răng UTOREX hàn quốc hihi ádhia</div>
                                                <div className="products-price">
                                                    <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                                </div>
                                            </div>
                                            <div className="addToCart"><span>add to
                                                cart</span></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="products-img"><img src="http://muasamtieudung.net/wp-content/uploads/2013/08/da013d0d1172ed7382350bb4f024df6a-350x261.jpg" alt="" /></div>
                                            <div className="slae-pro"><span>30%</span> giảm
                                            </div>
                                            <div className="products-item_content">
                                                <div className="products_name">máy tiệt trùng bằng bàn chải đánh răng UTOREX hàn quốc hihi ádhia</div>
                                                <div className="products-price">
                                                    <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                                </div>
                                            </div>
                                            <div className="addToCart"><span>add to
                                                cart</span></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <div className="products-img"><img src="https://cuchoami.vn/wp-content/uploads/2020/09/chup-anh-quang-cao-san-pham.jpg" alt="" /></div>
                                            <div className="slae-pro"><span>30%</span> giảm
                                            </div>
                                            <div className="products-item_content">
                                                <div className="products_name">máy tiệt trùng bằng bàn chải đánh răng UTOREX hàn quốc hihi ádhia</div>
                                                <div className="products-price">
                                                    <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                                </div>
                                            </div>
                                            <div className="addToCart"><span>add to
                                                cart</span></div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="btn-seemore-even"><button><a href="/#/products">xem thêm</a></button></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductHome