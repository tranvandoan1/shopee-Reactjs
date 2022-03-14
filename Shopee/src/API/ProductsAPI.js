import { axiosClient } from "./API";

const ProAPI={
    getAll(){
        const url=`/products`;
        return axiosClient.get(url);
    },
    remove(id){
        const url=`/products/${id}`;
        return axiosClient.delete(url);
    }

}
export default ProAPI
// async function API(){
//     const {data:products}=await ProAPI.getAll()
//     return products
// }
// console.log( API())