import React, { useEffect, useState } from 'react'
import ProAPI from '../../../API/ProAPI'

const OtherProducts = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        const ListPro = async () => {
            const { data: products } = await ProAPI.getAll()
            setProduct(products)
        }
        ListPro()
    }, [])
    return (
        <div className="productss">
            <h4>sản phẩm khác</h4>
            <div className="products-title_show">
                <ul>
                    {
                        products.sort(() => Math.random() - 0.5).map((item, index) => {
                            if (index < 10) {
                                return (
                                    <li key={item._id}>
                                        <a href="/#/detail/product/${item._id}">
                                            <div className="products-img"><img src={item.cover_image} alt="" />
                                            </div>
                                            <div className="slae-pro"><span>{item.sale}%</span> giảm
                                            </div>
                                            <div className="products-item_content">
                                                <div className="products_name">{item.name}</div>
                                                <div className="products-price">
                                                    <span>1.212.232đ</span><span>đã
                                                        bán 2.4k</span>
                                                </div>
                                            </div>
                                            <div className="addToCart"><span>add to
                                                cart</span></div>
                                        </a>
                                    </li>
                                )
                            }

                        })
                    }

                </ul>
            </div>
        </div>
    )
}

export default OtherProducts