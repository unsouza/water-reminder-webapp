import ApiService from "./api.service";

class UserSevice extends ApiService {
    store(data = {}) {
        return this.__post('/users', data);
    }

    find(params = {}) {
        return this.__get('/users/me', params)
    }
}

export default UserSevice;