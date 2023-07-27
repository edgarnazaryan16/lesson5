import { useState } from "react"
import "./style.css"
import { tempData, tempDataChange } from ".."

const Card = ({id, title, price, img, amount}) => {
    // const [newData, setNewData] = useState(tempData)
    // const removeItem = (id) => {
    //     setNewData(newData.filter(item => (item.id !== id)))
    //     tempDataChange(newData);
    // }
    return (
        <>
             <div className="Parent">
                 <div className="ImageDiv">
                    <img src={img}/>
                </div>
                <div className="DescriptionDiv">
                    <h2>{title}</h2>
                    <p>{price}</p>
                 </div>
            </div>
        </>
    )
}
export default Card;