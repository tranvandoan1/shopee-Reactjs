import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProAPI from '../../../API/ProAPI';
import { HeaderNavbar } from '../Header/HeaderNavbar';
import { Footer } from '../Header/Footer';
import '../Css/Detail.css'
import { $ } from '../../../Unti';
import CommodityValueAPI from '../../../API/CommodityValueAPI';
import TypeNameAPI from '../../../API/TypeName';
import ClassifyAPI from '../../../API/ClassifyAPI';
import SaveOrderAPI from '../../../API/SaveOrder';
import PageProductShop from './PageProductShop';
import DescriptionProduct from './DescriptionProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../reducers/Products';
const DetailPage = () => {
  window.scroll(0, 0)
  const { id } = useParams();
  const [product, setProduct] = useState([])
  const [price, setPrice] = useState([]);
  const [typeName, setTypeName] = useState([]);
  const [classify, setClassify] = useState([]);
  const [commodityvalue, setCommodityvalue] = useState();
  const [idClasify, setIdClasify] = useState([]);
  const [idCommodityvalue, setIdCommodityvalue] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [saveorder, setSaveOrder] = useState([]);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch()

  const userName = useSelector(data => data)
  console.log(userName)
  // console.log(userName)
  useEffect(async () => {
    dispatch(getProduct())

    const listOder = async () => {
      const user = JSON.parse(localStorage.getItem("user")) //lấy user đang đăng nhập ở localStorage
      const { data } = await ProAPI.get(id)
      const { data: typeName } = await TypeNameAPI.getAll()
      const { data: commodityvalues } = await CommodityValueAPI.getAll()
      const { data: classifies } = await ClassifyAPI.getAll()
      const { data: saveorders } = await SaveOrderAPI.getAll()

      setSaveOrder(saveorders.filter(item => item.user_id == user._id))


      setProduct(data)
      setTypeName(typeName.filter(item => item.pro_id == id))
      // hiện tên thuộc phân loại
      setClassify(classifies.filter(item => item.pro_id == id))

      // // hiện giá trị thuộc phân loại
      const commodityvaluesArr = []
      commodityvalues.map(item => (item.pro_id == id && commodityvaluesArr.push(item.name)))
      setCommodityvalue([...new Set(commodityvaluesArr)])


      const priceArr = []
      commodityvalues.map(item => item.pro_id == id && priceArr.push(item.price))

      const maxPrice = Math.max.apply(Math, priceArr);
      const minPrice = Math.min.apply(Math, priceArr);
      setPrice([minPrice, maxPrice])
    }
    listOder()
  }, [id])
console.log(saveorder)
  //  show ảnh
  const img_box = $(".d-img_right>ul>li>img");
  const img_boxShow = $(".img-box");

  img_box.forEach((img, index) => {
    img.addEventListener("click", function () {
      for (var i = 0; i < img_box.length; i++) {
        img_box[i].style.border = "none";
      }
      img.style.border = "1px solid rgb(238, 77, 45)";

      img_boxShow.innerHTML =
        img_boxShow.src = `<img src="${img.src}"alt=""></div>`;
    });
  });

  // ẩn hiện show ảnh deatil
  window.addEventListener("click", function (e) {
    (e.target == $(".d-img-show") && $(".d-img-show").classList.remove("show-Image"))
  });
  const ListImage = () => {
    $(".d-img-show").classList.add("show-Image");

  }

  useEffect(() => {
    setIdClasify([])
    setQuantity(1)
  }, [id])

  // type
  const onClickClassify = async (propId, name) => {
    const { data: commodityvalues } = await CommodityValueAPI.getAll()
    const { data: classifies } = await ClassifyAPI.getAll()
    setIdClasify([propId, name])
    const clasify = classifies.find(item => item._id == propId)
    setCommodityvalue(commodityvalues.filter(item => item.condition == clasify.condition))
    setIdCommodityvalue([])
  }
  //size

  const onClickCommodityvalue = async (propId, name) => {
    setIdCommodityvalue([propId, name])
    const price = commodityvalue.find(item => item._id == propId && item.price)
    setPrice(price.price)
  }

  const onSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const { data: saveorders } = await SaveOrderAPI.getAll()

    const today = new Date()
    const dateDay = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const order = saveorders.find(item => (item.user_id == user._id && item.clasify == idClasify[1] && item.commodity_value == idCommodityvalue[1]))
    if (order) {
      let formData = new FormData();
      formData.append("amount", +quantity + +oder.amount)
      console.log("trùng")
      // SaveOderAPI.upload(oder._id, formData)
      // alert("Sửa thành công")
    } else {
      if (idCommodityvalue[0]) {
        const order = {
          price: price,
          classification: idClasify[1],
          commodity_value: idCommodityvalue[1],
          amount: quantity,
          pro_id: product._id,
          user_id: user._id,
          name_pro: product.name,
          cover_image: product.cover_image,
          sale: product.sale,
          shop_id: product.shop_id,
          day: dateDay
        }
        console.log(order)
        SaveOrderAPI.add(order)
        setSaveOrder({})

        setCount(1)
        setCount(count + 1)
        alert("Thêm thành công")
      } else {
        alert("Đã chọn đâu")
      }

    }


  }
  useEffect(() => {
    if (count > 1) {
      const user = JSON.parse(localStorage.getItem("user"))
      console.log(user)
      console.log(saveorder)
      // setSaveOrder(saveorders.filter(item => item.user_id == user._id))

    }
  }, [count])


  const ReduceQuantity = () => {
    (quantity <= 0 ? alert("số lượng đã là 0 rồi !") : setQuantity(quantity - 1))
  }
  const AddQuantity = () => {
    (quantity >= 10 ? alert("số lượng đã là đạt tới cảnh giới cao rồi !") : setQuantity(quantity + 1))
  }


  return (
    <div className="shopee__shop">
      {/* <HeaderNavbar saveorder={saveorder}></HeaderNavbar> */}
      <div className="page-detail">
        <div className="detail-wrapper">
          <div className="detail-columm_left" onClick={() => ListImage()}>
            <div className="group-images">
              <div className="img-detail">
                <img src={product.cover_image} alt="" /></div>
            </div>
            <div className="img-detail_show">
              <div className="box-img">
                <img src={product.cover_image} alt="" />
              </div>
              <div className="box-img">
                <img src={product.photo1} alt="" />
              </div>
              <div className="box-img">
                <img src={product.photo2} alt="" />
              </div>
              <div className="box-img">
                <img src={product.photo3} alt="" />
              </div>
              <div className="box-img">
                <img src={product.photo4} alt="" />
              </div>

            </div>
          </div>
          <div id="render-detail">

            <div className="detail-columm_right">
              <h2>{product.name}</h2>
              <div className="item__review">
                <span>5.0
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </span>
                <span>61 đã bán</span>
              </div>
              <div className="d-price">
                <span className="price-sale">
                  {price.length == 2 ?
                    (`${price[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ - ${price[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`)
                    :
                    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"}
                </span>
                <span className="price">
                  <span className="showPrice">
                    {price.length == 2 ? (`${Math.ceil(price[0] * ((100 - product.sale) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ - ${Math.ceil(price[1] * ((100 - product.sale) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`)
                      : Math.ceil(price * ((100 - product.sale) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"
                    }
                  </span>
                </span>
                <span>{product.sale}% giảm</span>
              </div>
              <div className="validate">
                <div className="d-type">
                  <h4>{typeName.map((item, index) => (index == 0 && item.name))}</h4>
                  <div className="type">
                    <ul>
                      {classify.map((item, index) => {
                        if (item._id == idClasify[0]) {
                          return (
                            <li key={index} onClick={() => onClickClassify(item._id, item.name)} className="active-type">
                              <a>{item.name}</a>
                              <div className="check-type">
                                <div className="check">
                                  <i className="fas fa-check"></i>
                                </div>
                              </div>
                            </li>
                          )
                        } else {
                          return (
                            <li key={index} onClick={() => onClickClassify(item._id, item.name)}>
                              <a>{item.name}</a>
                              <div className="check-type">
                                <div className="check">
                                  <i className="fas fa-check"></i>
                                </div>
                              </div>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                </div>
                <div className="d-size">
                  <h4>{typeName.map((item, index) => (index == 1 && item.name))}</h4>
                  {<div className="size">
                    <ul id="list">
                      {commodityvalue && commodityvalue.map((item, index) => {
                        if (item.name) {
                          if (item._id == idCommodityvalue[0]) {
                            return (
                              <li key={index} onClick={() => (idClasify == "" ? alert("Phải chọn thể loại trước ") : onClickCommodityvalue(item._id, item.name))} className="active-value">
                                <a>{item.name ? item.name : item}</a>
                                <div className="check-size">
                                  <div className="check_z">
                                    <i className="fas fa-check"></i>
                                  </div>
                                </div>
                              </li>
                            )
                          } else {
                            return (
                              <li key={index} onClick={() => (idClasify == "" ? alert("Phải chọn thể loại trước ") : onClickCommodityvalue(item._id, item.name))}>
                                <a>{item.name ? item.name : item}</a>
                                <div className="check-size">
                                  <div className="check_z">
                                    <i className="fas fa-check"></i>
                                  </div>
                                </div>
                              </li>
                            )
                          }
                        } else {
                          return (
                            <li key={index} onClick={() => (idClasify == "" ? alert("Phải chọn thể loại trước ") : onClickCommodityvalue(item._id, item.name))}>
                              <a>{item.name ? item.name : item}</a>
                              <div className="check-size">
                                <div className="check_z">
                                  <i className="fas fa-check"></i>
                                </div>
                              </div>
                            </li>
                          )
                        }

                      })}
                    </ul>
                  </div>}
                </div>
                <div className="quantity">
                  <h4>số lượng</h4>
                  <div className="q-quantity">
                    <button className="q-minus" onClick={() => ReduceQuantity()}>-</button>
                    <input type="text" value={quantity} onChange={() => Value()} />
                    <button className="q-add" onClick={() => AddQuantity()}>+</button>
                    <div className="show-quantity" ></div>
                  </div>
                </div>
              </div>
              <div className="d-addToCart">
                <div className="addCart" onClick={() => (idClasify == "" && idCommodityvalue == "" ? alert("Chưa chọn cái nào hết") : onSubmit())}><i className="fas fa-cart-plus"></i> thêm vào giỏ hàng</div>
                <div className="buy_now">mua ngay</div>
              </div>
            </div>
          </div>
          {/* mobile */}
        </div>
        {/* <!-- show img detail --> */}
        <div className="d-img-show" >
          <div className="d_img">
            <div className="d-img_left">
              <div className="img-box">
                <img src={product.cover_image} alt="" />
              </div>
            </div>
            <div className="d-img_right">
              <span>
                {product.name}
              </span>
              <ul>
                <li><img src={product.cover_image} alt="" /></li>
                <li><img src={product.photo1} alt="" /></li>
                <li><img src={product.photo2} alt="" /></li>
                <li><img src={product.photo3} alt="" /></li>
                <li><img src={product.photo4} alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <PageProductShop />
      <DescriptionProduct />
      <Footer />
    </div>

  )
}

export default DetailPage
    //   {/* <!-- addToCart mobile --> */}
    //   <div className="box-cart-mobile">
    //   <div className="addToCart-mobile">
    //     <div className="d-nameProduct">
    //       <span><img
    //         src="https://icdn.dantri.com.vn/thumb_w/640/2019/03/06/nhiepanhgia-2-1551849137024.jpg"
    //         alt="" /></span>
    //       <span>FREESHIP ÁO KHOÁC KAKI HỘP NAM NỮ HÌNH
    //         THẬT HÀNG BAO ĐẸP, BAO CHẤT (poles..)</span>
    //     </div>
    //     <div className="d-type-mb">
    //       <h4> tên rèm</h4>
    //       <div className="type-mb">
    //         <ul>
    //           <li>
    //             <a>xanh xương rồng</a>
    //             <div className="check-type-mb">
    //               <div className="check-mb">
    //                 <i className="fas fa-check"></i>
    //               </div>
    //             </div>
    //           </li>
    //           <li>
    //             <a>hồng thỏ trắng</a>
    //             <div className="check-type-mb">
    //               <div className="check-mb">
    //                 <i className="fas fa-check"></i>
    //               </div>
    //             </div>
    //           </li>
    //           <li>
    //             <a>Hoa trắng dâu tây</a>
    //             <div className="check-type-mb">
    //               <div className="check-mb">
    //                 <i className="fas fa-check"></i>
    //               </div>
    //             </div>
    //           </li>
    //           <li>
    //             <a>xanh caro</a>
    //             <div className="check-type-mb">
    //               <div className="check-mb">
    //                 <i className="fas fa-check"></i>
    //               </div>
    //             </div>
    //           </li>
    //           <li>
    //             <a>xanh bơ</a>
    //             <div className="check-type-mb">
    //               <div className="check-mb">
    //                 <i className="fas fa-check"></i>
    //               </div>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="d-size-mb">
    //       <h4>kích thước</h4>
    //       <div className="size-mb">
    //         <ul>
    //           <li>
    //             <a>0.9mx1m</a>
    //             <div className="check-size-mb">
    //               <div className="check_z-mb">
    //                 <i className="fas fa-check"></i>
    //               </div>
    //             </div>
    //           </li>
    //           <li>
    //             <a>1mx1m2</a>
    //             <div className="check-size-mb">
    //               <div className="check_z-mb">
    //                 <i className="fas fa-check"></i>
    //               </div>
    //             </div>
    //           </li>
    //           <li>
    //             <a>1m2x1m5</a>
    //             <div className="check-size-mb">
    //               <div className="check_z-mb">
    //                 <i className="fas fa-check"></i>
    //               </div>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="quantity-mb">
    //       <h4>số lượng</h4>
    //       <div className="q-quantity-mb">
    //         <button className="q-minus-mb">-</button>
    //         <input type="text" />
    //         <button className="q-add-mb">+</button>
    //       </div>
    //     </div>
    //     <div className="b-addToCart-mb">
    //       <div className="b-addCart-mb"><i className="fas
    //                               fa-cart-plus"></i> thêm vào giỏ hàng</div>
    //       <div className="b-buy_now-mb">mua ngay </div>
    //     </div>
    //   </div>
    // </div>

    // {/* <!-- button addToCart mobile --> */}
    // <div className="d-addToCart-mb">
    //   <div className="addCart-mb"><i className="fas fa-cart-plus"></i> thêm vào giỏ hàng</div>
    //   <div className="buy_now-mb">mua ngay </div>
    // </div>