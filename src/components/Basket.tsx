import { useGetTotalItemsQuery } from "../store/api"
import Item from "./Item";

export default function Basket(){
    const {data}= useGetTotalItemsQuery();
    return(
        <>
        <div className="basket">
            {data?.filter(item=>item.basket===true).map(item=>(
                <Item key={item.id} item={item}/>
            ))}
        </div>
        </>
    )
}