import React, { useEffect } from "react";
import styles from "../Css/AdminCate.module.css";
import { Button, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { openNotificationWithIcon } from "../../Notification";
import { useDispatch, useSelector } from "react-redux";
import { getCate, uploadCate } from "../../reducers/CategoriSlice";
import { upload } from "../../API/Categoris";
const EditCate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const categoris = useSelector((data) => data.categori.value);
  useEffect(() => {
    dispatch(getCate());
  }, []);
  const onFinish = async (values) => {
    let cateUploadt = {};
    const newCategoris = [];
    for (let i = 0; i < categoris.length; i++) {
      if (categoris[i]._id == id) {
        newCategoris.push({ ...categoris[i], name: values.name });
        cateUploadt = { ...categoris[i], name: values.name };
      } else {
        newCategoris.push(categoris[i]);
      }
    }
    await upload(cateUploadt._id, cateUploadt);
    dispatch(uploadCate(newCategoris));
    navigate("/admin/categoris");
    openNotificationWithIcon("success", "Sửa thành công thành công ");
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
        <h3 className={styles.title}>Sửa danh mục</h3>
      </div>
      {categoris.length > 0 && (
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
          <Form.Item
            label="Tên danh mục"
            name="name"
            labelAlign="left"
            style={{ marginTop: 30 }}
            rules={[
              {
                required: true,
                message: "Bạn chưa có sự thay đổi!",
              },
            ]}
          >
            <Input
              placeholder="Tên danh mục"
              defaultValue={categoris.find((item) => item._id == id).name}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 24,
            }}
          >
            <Button type="primary" htmlType="submit">
              Sửa
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default EditCate;
