import ApiService from "./api.service";

class HistoryService extends ApiService {
    store(data = {}) {
        return this.__post('/histories', data);
    }

    consumed(params = {}) {
        return this.__get('/histories/consumed', params);
    }

    history(params = {}) {
        return this.__get('/histories/history', params);
    }
}

export default HistoryService;