import { axiosClient } from "./API";

const OderAPI = {
    getAll() {
        const url = `/oders`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/oders/${id}`;
        return axiosClient.get(url);
    },
    add(saveoder) {
        const url = `/oders`;
        return axiosClient.post(url, saveoder);
    },
    remove(id) {
        const url = `/oders/${id}`;
        return axiosClient.delete(url);
    },
    upload(id, data) {
        const url = `/oders/${id}`;
        return axiosClient.put(url, data);
    },

};
export default OderAPI;