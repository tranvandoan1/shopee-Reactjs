import { axiosClient } from "./API";

const ProAPI={
    getAll(){
        const url=`/products`;
        return axiosClient.get(url);
    }

}
export default ProAPI