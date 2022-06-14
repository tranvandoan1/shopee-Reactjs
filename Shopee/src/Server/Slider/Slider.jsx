import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../Css/AdminCate.module.css";

const Slider = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Ảnh",
      dataIndex: "photo",
      key: "photo",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Số thứ tự",
      dataIndex: "ordinal_number",
      key: "ordinal_number",
    },
    {
      title: "Thao tác",
      render: (data) => (
        <>
          <Space size="middle" style={{ marginRight: 10 }}>
            <Link to={`/admin/slider/edit=${data._id}`}>
              <EditOutlined />
            </Link>
          </Space>
          <Space size="middle">
            <a>
              <DeleteOutlined onClick={() => deleteCate(data._id)} />
            </a>
          </Space>
        </>
      ),
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid gainsboro",
        }}
      >
        <h3 className={styles.title}>Slider ảnh</h3>
        <Button>
          <Link to="add">
            <PlusOutlined />
            Thêm slider
          </Link>
        </Button>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          rowKey={(item) => item.id}
          style={{
            marginTop: 20,
            textTransform: "capitalize",
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
