import { axiosClient } from "./API";

const SliderAPI = {
    getAll() {
        const url = `/slides`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/slides/${id}`;
        return axiosClient.get(url);
    },
    add(slider) {
        const url = `/slides`;
        return axiosClient.post(url, slider);
    },
    remove(id) {
        const url = `/slides/${id}`;
        return axiosClient.delete(url);
    },
    upload(id, data) {
        const url = `/slides/${id}`;
        return axiosClient.put(url, data);
    },

};
export default SliderAPI;