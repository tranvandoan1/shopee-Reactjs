import { axiosClient } from "./API";

const ClassifyAPI = {
    getAll() {
        const url = `/classify`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/classify/${id}`;
        return axiosClient.get(url);
    },
    add(cate) {
        const url = `/classify`;
        return axiosClient.post(url, cate);
    },
    remove(id) {
        const url = `/classify/${id}`;
        return axiosClient.delete(url);
    },
    upload(id, data) {
        const url = `/classify/${id}`;
        return axiosClient.put(url, data);
    },

};
export default ClassifyAPI;