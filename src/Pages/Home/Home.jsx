import { useEffect, useState } from "react";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import CardItem from "./CardItem";




const Home = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(response => response.json())
        .then(data => setItem(data))
        
    },)
    return (
        <div>
            <div>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div>
                    {
                        item.map((item) => <CardItem key={item.id}  item={item}></CardItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;