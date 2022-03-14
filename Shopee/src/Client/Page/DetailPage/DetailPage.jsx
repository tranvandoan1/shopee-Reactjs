import React from 'react'
import { useParams } from 'react-router-dom';
import { HeaderNavbar } from '../Header/HeaderNavbar';

const DetailPage = () => {
  let { p, id } = useParams();
  console.log(p)
  console.log(id)

  return (
    <React.Fragment>
      <HeaderNavbar></HeaderNavbar>
      <div>DetailPage</div>
    </React.Fragment>

  )
}

export default DetailPage