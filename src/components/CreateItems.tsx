import { useForm } from "react-hook-form"
import { useAddItemsMutation, useGetTotalItemsQuery, useLoadItemsQuery} from "../store/api";


export default function CreateItems(){
    const {reset,register,handleSubmit, formState:{errors}}=useForm();
    const [addItems]=useAddItemsMutation();
    const {refetch}=useLoadItemsQuery();
    const{refetch:all}=useGetTotalItemsQuery();
    const create=(formData)=>{
        let itemData= {...formData, favorite: false,basket:false};
        addItems(itemData);
        reset();
        refetch();
        all();
        
    }

    return(
        <>
        <form onSubmit={handleSubmit(create)}>
            <input type="text"{...register('name',{required:true})} placeholder="Name" />
            <input type="text"{...register('info',{required:true})} placeholder="Info" />
            <button>Create</button>
            {errors.name && <p>Write name!!</p>}
            {errors.info && <p>Write info!!</p>}
        </form>
        </>
    )
}