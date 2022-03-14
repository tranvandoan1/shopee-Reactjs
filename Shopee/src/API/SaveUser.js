import { axiosClient } from "./API";

const SaveUserAPI = {
    getAll() {
        const url = `/saveuser`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/saveuser/${id}`;
        return axiosClient.get(url);
    },
    add(user) {
        const url = `/saveuser`;
        return axiosClient.post(url, user);
    },
    signin(saveuser) {
        const url = `/signin`; //đăng nhâp.
        return axiosClient.post(url, saveuser);
    },
    remove(id) {
        const url = `/saveuser/${id}`;
        return axiosClient.delete(url);
    },
    upload(id, user) {
        const url = `/saveuser/${id}`;
        return axiosClient.put(url, user);
    },


};
export default SaveUserAPI;