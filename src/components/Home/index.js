import Card from "./Card"
import { data } from "./data"
import "./style.css"

const Home = () => {
    return <>
        {
            data.map(item => {
                return (
                        <Card 
                        key = {item.id}
                        {...item}
                        />
                )
            })
        }
    </>
}
export default Home;