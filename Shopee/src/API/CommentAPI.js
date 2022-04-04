import { axiosClient } from "./API";

const CommentAPI = {
    getAll() {
        const url = `/comments`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/comments/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = `/comments`;
        return axiosClient.post(url, data);
    },
    remove(id) {
        const url = `/comments/${id}`;
        return axiosClient.delete(url);
    },
    upload(id, data) {
        const url = `/comments/${id}`;
        return axiosClient.put(url, data);
    },

};
export default CommentAPI;