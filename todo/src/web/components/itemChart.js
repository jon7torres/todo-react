import React from "react";


function ItemChart(props) {
    return (
        <ul>
          {props.list.map((item, i) => 
            <div>
                <li key={i}>{item.item}</li>
            </div>)}
        </ul>
      );
}

export default ItemChart;