import { useState } from "react"
import "./style.css"
const Card = ({id, title, price, img, amount}) => {
    const [isShow, setIsShow] = useState(true)
    const removeItem = () => {
        setIsShow(!isShow)
    }

    return (
        <>
            {
            isShow && (
                <div className="Parent">
                    <div className="ImageDiv">
                        <img src={img}/>
                    </div>
                    <div className="DescriptionDiv">
                        <h2>{title}</h2>
                        <p>{price}</p>
                        <button onClick={removeItem}>remove</button>
                    </div>
                </div>
                )
            }
        </>
    )
}
export default Card;