import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CommentAPI from '../../../API/CommentAPI'
import UserAPI from '../../../API/Users'
// import firebase from '../../../firebase/index'
import { $ } from '../../../Unti'
const Comments = () => {
    const [userLogin, setUserLogin] = useState()
    const [users, setUsers] = useState([])
    const [comments, setComments] = useState([])
    const [valueComment, setCommentUser] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const getComment = async () => {
            const user = JSON.parse(localStorage.getItem("user"))
            const { data: comments } = await CommentAPI.getAll()
            const { data: users } = await UserAPI.getAll()
            setComments(comments)
            setUserLogin(user)
            setUsers(users)
        }
        getComment()
    }, [])
    useEffect(() => {
        const userComment = comments.filter(item => item.user_id == userLogin._id)
    }, [])

    // const fileUpload = $("#photo");
    // console.log(fileUpload)
    const ListImage = () => {
        if ($("#photo").files[0] == undefined || $("#photo").files[0] == "") {
            $(".list-photo").innerHTML = ``
            $(".list-photo").style.width = "0px"
        } else {
            $(".list-photo").style.width = "250px"
            $(".list-photo").innerHTML = `<img width="250px" src="${URL.createObjectURL(event.target.files[0])}" alt="">`
        }
    }


    const onSubmit = async () => {
        const photo = $("#photo").files[0];
        if (photo) {
            if ($("#inputComment").value == "") {
                alert("Bạn không thể để rỗng !")
            } else {
                // let storageRef = firebase.storage().ref(`images/${photo.name}`)
                // storageRef.put(photo).then(function () {
                //     storageRef.getDownloadURL().then(async url => {
                //         const comment = {
                //             comment: $("#inputComment").value,
                //             pro_id: id,
                //             user_id: userLogin._id,
                //             photo: url
                //         }
                //         await CommentAPI.add(comment)
                //     })
                // })
            }

        } else {
            if ($("#inputComment").value == "") {
                alert("Bạn không thể để rỗng !")
            } else {
                const comment = {
                    comment: $("#inputComment").value,
                    pro_id: id,
                    user_id: userLogin._id,
                    photo: ""
                }
                await CommentAPI.add(comment)
                 
            }
        }
    }
    const onClickDelete = (propsId) => {
        if (confirm("Bạn có muốn xóa không")) {
            CommentAPI.remove(propsId)
            setComments(comments.filter(item => item._id !== propsId))
        }
    }


    function checkUser() {
        if (userLogin) {
            return (
                <div className="comments-products">
                    <div className="comments-p">
                        <div className="nameUaser-comments">
                            <h5>Xin chào <span>@{userLogin.name}</span> , mời bạn đánh giá sản phẩm tại đây !</h5>
                        </div>
                        <div className="comment">
                            <div className="avatar-user">
                                <div className="avatar">
                                    <img src={userLogin.avatar} alt="" />
                                </div>
                            </div>
                            <div className="write_comment">
                                <div className="write-c">
                                    <textarea rows="4" id="inputComment" placeholder="Nhập bình luận"></textarea>
                                    <div className="list-photo">

                                    </div>
                                    <button id="submit-comment" onClick={() => onSubmit()}><i className="fas fa-paper-plane"></i>bìnhluận</button>
                                </div>
                            </div>
                            <div className="comment-img">
                                <input type="file" placeholder="" id="photo" onChange={() => ListImage()} />
                                <label htmlFor="photo"><i className="fas fa-camera"></i></label>
                            </div>
                        </div>
                    </div>
                    {comments.reverse().map(item => {
                        if (item.pro_id == id) {
                            return (
                                <div className="list-comment" key={item._id}>
                                    <div className="comments">
                                        {users.map(user => (item.user_id == user._id &&
                                            <div className="c-avatar-user" key={user._id}>
                                                <div className="avatar-userr">
                                                    <img src={user.avatar} alt="" />
                                                </div>
                                                <span>{user.name}</span>
                                            </div>
                                        )
                                        )}
                                        <div className="user-comment">
                                            <p>{item.comment}</p>
                                            {
                                                (item.photo &&
                                                    <React.Fragment>
                                                        <div className="comment-video-img">
                                                            <div className="comment-image">
                                                                <img src={item.photo} className="myImage" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="view-image"></div>
                                                    </React.Fragment>
                                                )
                                            }
                                            <div className="time-comment">
                                                <span>{item.createdAt}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--check nếu sp có bình luận của user đnag đăng nhập thì hiện icon sửa và xóa--> */}
                                    {
                                        (userLogin._id == item.user_id &&
                                            <div className="manipulation">
                                                <div className="list-manipulation">
                                                    <a id="update-comment" data-id="${item._id}">
                                                        <i className="far fa-edit "></i>

                                                    </a>
                                                    <a data-id="${item._id}" id="delete-comment" onClick={() => onClickDelete(item._id)}>
                                                        <i className="far fa-trash-alt "></i>
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                // <!--check nếu sp có bình luận của user đnag đăng nhập thì hiện icon sửa -->

                                // <!-- sửa comment -->
                                // ${saveuser.map(us => {
                                //     if (us.user_id == item.user_id) {
                                //         return /*html*/ `
                                //             <!-- sửa comment -->
                                //             <div class="update-comment">
                                //                 <h2>Sửa bình luận</h2>
                                //                 <div class="form-update-comment">
                                //                     <div class="update-avatar-user">
                                //                         <div class="update-avatar">
                                //                             <img src="${us.avatar}" alt="">
                                //                         </div>
                                //                     </div>
                                //                     <div class="update-write_comment">
                                //                         <textarea rows="4"  id="update-inputComment" placeholder="Nhập bình luận">${item.comment}</textarea>
                                //                         <div class="update-list-photo">
                                //                             <img src="${item.photo}" alt="">
                                //                         </div>
                                //                         <button id="submit-back"><i class="fas fa-arrow-circle-left"></i></i>Hủy</button>
                                //                         <button id="submit-update"><i class="fas fa-paper-plane"></i>Sửa</button>
                                //                     </div>
                                //                     <div class="update-comment-img">
                                //                         <input type="file" placeholder="" id="update-photo">
                                //                         <label for="update-photo"><i class="fas fa-camera"></i></label>
                                //                     </div>
                                //                 </div>
                                //             </div>
                                //         `
                                //     }
                                // }).join("")
                                // }
                            )
                        }
                    })
                    }

                    <div className="pagings-comment">
                        <button><i className="fas fa-angle-left"></i></button>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                        <button><i className="fas fa-angle-right"></i></button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="comments-products">
                    <div className="comments-p">
                        <div className="nameUaser-comments">
                            <h5 className="notification">Bạn cần đăng nhập để được bình luận !</h5>
                        </div>
                    </div>
                    {comments.map(item => {
                        if (item.pro_id == id) {
                            return (
                                <div className="list-comment" key={item._id}>
                                    <div className="comments">
                                        {users.map(user => {
                                            if (item.user_id == user._id) {
                                                return (
                                                    <div className="c-avatar-user" key={user._id}>
                                                        <div className="avatar-userr">
                                                            <img src={user.avatar} alt="" />
                                                        </div>
                                                        <span>{user.name}</span>
                                                    </div>
                                                )
                                            }
                                        })
                                        }
                                        <div className="user-comment">
                                            <p>{item.comment}</p>
                                            {
                                                (item.photo &&
                                                    <React.Fragment>
                                                        <div className="comment-video-img">
                                                            <div className="comment-image">
                                                                <img src={item.photo} className="myImage" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="view-image"></div>
                                                    </React.Fragment>
                                                )
                                            }
                                            <div className="time-comment">
                                                <span>{item.createdAt}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    })
                    }

                    <div className="pagings-comment">
                        <button><i className="fas fa-angle-left"></i></button>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                        <button><i className="fas fa-angle-right"></i></button>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {checkUser()}
        </div>
    )
}

export default Comments