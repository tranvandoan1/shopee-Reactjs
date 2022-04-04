import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProAPI from '../../../API/ProAPI'
import ShopOwnerAPI from '../../../API/ShopOwner'

const ProductShop = () => {
    const [proOfShop,setProOfShop]=useState([])
    const {id}=useParams()
    useEffect(() => {
        const listPro =async () => {
            const { data: shopowners } = await ShopOwnerAPI.getAll()
            const { data: products } = await ProAPI.getAll()

            const product = products.find(item => item._id == id)
            const proShopOwner = shopowners.find(item => item._id == product.shop_id)

            const proOfShop = products.filter(item => item.shop_id == proShopOwner._id)
            setProOfShop(proOfShop)
        }
        listPro()
    }, [])
    return (
        <div className="detail__products-right">
            <div className="d-products-title_show">
                <span>sản phẩm khác của shop</span>
                <ul>
                    {
                        proOfShop.map(item => {
                            return (
                                <li key={item._id}>
                                    <Link to={`/detail/id=${item._id}`}>
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
                                        <div className="addToCart"><span>add
                                            to
                                            cart</span></div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        </div>
    )
}

export default ProductShop