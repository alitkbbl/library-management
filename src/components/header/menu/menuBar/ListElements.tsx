import React from "react";
import Elements from "./Elements";

type Item = { title: string; url: string; };

type TPorps={
  items : Item[]

}

const ElementsList: React.FC<TPorps> = ({ items }) =>{
    return (
    <ul>
      {items.map((text ,index) =>

        <Elements  key={index} title={text.title} k={index}/>
      )}
    </ul>
    );
}

export default ElementsList
