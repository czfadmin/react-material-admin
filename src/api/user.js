import request from '../utils/request';
export function login(data) {
	return request({
		url: '/react-material-admin/user/login',
		method: 'post',
		data
	});
}

export function getInfo(token) {
	return request({
		url: '/react-material-admin/user/info',
		method: 'get',
		params: { token }
	});
}

export function logout() {
	return request({
		url: '/react-material-admin/user/logout',
		method: 'post'
	});
}
