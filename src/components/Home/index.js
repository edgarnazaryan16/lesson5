import { useState } from "react"
import Card from "./Card"
import { data } from "./data"
import "./style.css"


export let tempData = data;

const Home = () => {
    const [newData, setNewData] = useState(tempData);
    const removeItem = (id) => {
        setNewData(newData.filter(item => (item.id !== id)));
        tempData = newData;
        console.log(tempData)
    }
    return <>
        {
            tempData.map(item => {
                return (
                    <div key = {item.id} className="Home">
                        <Card 
                        {...item}
                        />
                        <button onClick={() => removeItem(item.id)}>remove</button>
                    </div>
                )
            })
        }
    </>
}
export default Home;