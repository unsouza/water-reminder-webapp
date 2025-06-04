import axios, { type AxiosResponse } from "axios"

axios.defaults.headers['Content-Type'] = 'application/json';

axios.interceptors.request.use((config) => {
    const userId = localStorage.getItem("USER_ID");
    if (userId) {
        config.headers['X-User-Id'] = userId;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

class ApiService {
    __getUri(uri: string) {
        return `${import.meta.env.VITE_API_URL}${uri}`
    }

    private __perform(promise: Promise<AxiosResponse>) {
        return promise.then(res => res.data);
    }

    __get(uri: string, params: Object) {
        let promise = axios.get(this.__getUri(uri), { params });
        return this.__perform(promise);
    }

    __post(uri: string, data: Object) {
        let promise = axios.post(this.__getUri(uri), data);
        return this.__perform(promise);
    }

    __put(uri: string, data: Object) {
        let promise = axios.put(this.__getUri(uri), data);
        return this.__perform(promise);
    }

    __delete(uri: string, params: Object) {
        let promise = axios.delete(this.__getUri(uri), { params });
        return this.__perform(promise);
    }

    __formData(uri: string, data: FormData, params: Object) {
        let promise = axios.put(this.__getUri(uri), data, {
            params,
            headers: {
                'Content-Type': 'multipart/form-data;',
                'Accept': 'application/json',
            }
        });
        return this.__perform(promise);
    }
}

export default ApiService;