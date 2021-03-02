const { default: axios } = require("axios");

const service = axios.create({
	baseURL: process.env.REACT_APP_BASE_API,
	timeout: 5000
});
service.interceptors.request.use(config => {
	return config;
}, error => {
	console.log(error);
	return Promise.reject(error);
});
service.interceptors.response.use(response => {
	const res = response.data;
	if (res.code !== 20000) {

	}

	if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
		//TODO:HANDLER ERROR
	}
}, error => {
	console.log(error);
	return Promise.reject(error);
});
export default service;