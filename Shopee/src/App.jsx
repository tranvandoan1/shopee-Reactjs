import "./App.css";
import HomePage from "./Client/Page/HomePage/HomePage";
import React, { useEffect, useState } from "react";
// import ProAPI from "./API/ProductsAPI"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./Client/Page/DetailPage/DetailPage";
import Admin from "./Server/Admin";
import Login from "./Client/Page/User/Login";
import Categoris from "./Server/Categoris/Categoris";
import AddCate from "./Server/Categoris/AddCate";
import EditCate from './Server/Categoris/EditCate';
import Slider from './Server/Slider/Slider';
import AddSlider from './Server/Slider/AddSlider';
// function App(props) {
//   // const [products, setProducts] = useState([])

//   // useEffect(async () => {
//   //   const { data: products } = await ProAPI.getAll()
//   //   setProducts(products)
//   // }, [])

//   // const onRemove = async (id) => {
//   //   await ProAPI.remove(id)
//   //   setProducts(products.filter(item => item._id !== id))
//   // }

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage {...props}/>} />
//         <Route path="/detail/id=:id" element={<DetailPage {...props}/>} />
//         <Route path="/admin" element={<Admin {...props}/>} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/id=:id" element={<DetailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/" element={<Admin />}>
          <Route path="categoris" element={<Categoris />} />
          <Route path="categoris/add" element={<AddCate />} />
          <Route path="categoris/edit=:id" element={<EditCate />} />
          <Route path="slider" element={<Slider />} />
          <Route path="slider/add" element={<AddSlider />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
