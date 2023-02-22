import axiosClient from "./axiosClient";
const api = {
    getData: () => {
        const url = `https://jade-attractive-indri.cyclic.app/data`;
        return url;
    },
    getDataById: async (id) => {
        const url = `/data/${id}`;
        const response = await axiosClient.get(url);
        return response;
    },
    getCategoryId: async (id) => {
        const url = `/data?categoryId=${id}`;
        const response = await axiosClient.get(url);
        return response;
    },
    addToCart: async (object) => {
        const url = `/cart`;
        const response = await axiosClient.post(url, object);
        return response;
    },
    getCart: async () => {
        const url = `/cart`;
        const response = await axiosClient.get(url);
        return response;
    },
    deleteCart: async (id) => {
        const url = `/cart/${id}`;
        const response = await axiosClient.delete(url, id);
        return response;
    },
    patchCart: async (id, object) => {
      console.log(object);
        const url = `/cart/${id}`;
        const response = await axiosClient.patch(url, object);
        return response;
    },
    getUser: async (object) => {
        const url = `/account?username=${object.username}`;
        const response = await axiosClient.get(url);
        return response;
    },
    search: async (text) => {
        const url = `/data?q=${text}`;
        const response = await axiosClient.get(url);
        return response;
    },
    postInfo: async (object) => {
        const url = `/order`;
        const response = await axiosClient.post(url, object);
        return response;
    },
    getInfo: async () => {
        const url = `/order`;
        const response = await axiosClient.get(url);
        return response;
    },
    // refresh: async (code) => {
    //   const url = `/refresh`;
    //   const response = axiosClient.post(url, { code });
    //   return response;
    // },
    // album: async (code) => {
    //   const url = `/album`;
    //   const response = axiosClient.get(url);
    //   return response;
    // },
};

export default api;
