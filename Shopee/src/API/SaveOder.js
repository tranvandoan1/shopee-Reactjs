import { axiosClient } from "./API";

const SaveOderAPI = {
    getAll() {
        const url = `/saveoders`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/saveoders/${id}`;
        return axiosClient.get(url);
    },
    add(saveoder) {
        const url = `/saveoders`;
        return axiosClient.post(url, saveoder);
    },
    remove(id) {
        const url = `/saveoders/${id}`;
        return axiosClient.delete(url);
    },
    upload(id, data) {
        const url = `/saveoders/${id}`;
        return axiosClient.put(url, data);
    },

};
export default SaveOderAPI;