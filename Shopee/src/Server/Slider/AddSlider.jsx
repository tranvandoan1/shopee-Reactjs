import React, { useState } from "react";
import styles from "../Css/Slider.module.css";
import { Button, Form, Input, Radio, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { openNotificationWithIcon } from "../../Notification";
import { useDispatch } from "react-redux";
import { addCate } from "../../reducers/CategoriSlice";
import { add } from "../../API/Categoris";
import { UploadOutlined } from "@ant-design/icons";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";
const AddSlider = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    console.log(values);
    const photo = document.querySelector("#images").files[0];
    if(photo){
        const imageRef = ref(storage, `images/${photo.name}`);
        uploadBytes(imageRef, photo).then(() => {
          getDownloadURL(imageRef).then(async (url) => {
            const slider={
                photo:url,
                ordinal_number:values.ordinal_number,
                status:values.status
            }
            console.log(slider)
          });
        });
    }

  };
  const [value, setValue] = useState(1);
  const [image, setImage] = useState();
  const loadFile = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid gainsboro",
        }}
      >
        <h3 className={styles.title}>Thêm slider</h3>
      </div>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="Ảnh" labelAlign="left" style={{ marginTop: 30 }}>
          <div className={styles.user_choose_photo}>
            <label
              htmlFor="images"
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <UploadOutlined style={{ margin: "0 10px" }} />{" "}
              <div className={styles.choose_photo}>Chọn ảnh</div>
            </label>
          </div>
          {image && (
            <div className={styles.listImage}>
              <img src={image} alt="" className={styles.image} />
            </div>
          )}

          <Input
            type="file"
            name=""
            id="images"
            style={{ display: "none" }}
            onChange={() => loadFile(event)}
          />
        </Form.Item>
        <Form.Item
          label="Trạng thái"
          name="status"
          labelAlign="left"
          style={{ marginTop: 30 }}
        >
          <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
            <Radio value={1}>Đóng</Radio>
            <Radio value={2}>Mở</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Số thứ tự"
          name="ordinal_number"
          labelAlign="left"
          style={{ marginTop: 30 }}
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập số thứ tự!",
            },
          ]}
        >
          <Select placeholder="Chọn số thứ tự">
            <Option value={"1"}>1 </Option>
            <Option value={"2"}>2 </Option>
            <Option value={"3"}>3 </Option>
            <Option value={"4"}>4 </Option>
            <Option value={"5"}>5 </Option>
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit">
            Thêm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddSlider;
