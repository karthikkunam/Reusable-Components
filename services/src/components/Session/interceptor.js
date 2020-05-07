import axios from 'axios';

const createApiClient = (refreshTokenUrl, refreshToken) => {
    const instance = axios.create({
        baseURL: refreshTokenUrl
    });
    instance.interceptors.request.use((req) => requestHandler(req,refreshToken));
    instance.interceptors.response.use(response => successHandler(response), err => errorHandler(err));
    return instance;
};

const requestHandler = (req,refreshToken) => {
    req.headers['content-type'] = 'application/json';
    req.headers['authorization'] = refreshToken;
    return req;
};

const successHandler = (response) => {
    return [null, response];
};

const errorHandler = (err) => {
    return [err, null];
};

export default createApiClient;