import React from "react";


function ItemChart(props) {
    return (
        <ul>
          {props.list.map((item, i) => <li key={i}>{item.item}</li>)}
        </ul>
      );
}

export default ItemChart;