import React from "react";


function ItemChart(props) {
    return (
        <div>
          {props.list.map((item, i) => <h3 key={i}>{item.item}</h3>)}
        </div>
      );
}

export default ItemChart;