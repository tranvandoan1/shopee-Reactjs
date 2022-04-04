import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProAPI from '../../../API/ProAPI'
import ShopOwnerAPI from '../../../API/ShopOwner'

const PageProductShop = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [infoShop, setInfoShop] = useState({})
    useEffect(() => {
        const listInfoShop = async () => {
            const { data: shopowners } = await ShopOwnerAPI.getAll()
            const { data: products } = await ProAPI.getAll()

            const product = products.find(item => item._id == id)
            const infoShop = shopowners.find(item => item._id == product.shop_id)
            setProduct([product])
            setInfoShop(infoShop)
        }
        listInfoShop()
    },[])

    return (
        // < !--chủ shop-- >
        <div className="owner-shop">
            <div className="page-products_shop">
                <div className="info-shop">

                    <a href="/#/page/seller-channel/${proShopOwner._id}">
                        <div className="avatar-shop">
                            <img
                                src={infoShop.photo}
                                alt="" />
                        </div>
                    </a>

                    <div className="name-shop">
                        <span>{infoShop.nameShop}</span>
                        <span>
                            <i className="fas fa-archive"></i>
                            xem shop
                        </span>
                    </div>
                </div>
                <div className="achievements">
                    <ul>
                        <li>đánh giá <span>3,7k</span> </li>
                        <li>sản phẩm <span>{product.length}</span></li>
                        <li>bình luận <span>5432</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PageProductShop