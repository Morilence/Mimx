import { request } from '@/network/request';

export function sendRegData(un, pw) {
    return request({
        method: 'post',
        url: '/register',
        data: {
            username: un,
            password: pw
        }
    });
}