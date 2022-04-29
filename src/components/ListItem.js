import React from "react";
import { useNavigate } from "react-router-dom";

const ListItem = ({ product, index }) => {
  const navigate = useNavigate();

  if (!product?.id) return null;
  const nav = () => {
    navigate('/' + product.id)
  
  }
  return <tr>
    <td onClick={() => nav()}>
      {index + 1}
    </td>
    <td onClick={() => nav()}>
      <img className="list-item-img" src={product.avatar} alt={product.id} />
    </td>
    <td className="list-item-name" onClick={() => nav()}>
      {product.name}
    </td>
  </tr>;
}
export default ListItem;
  


