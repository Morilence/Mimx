import { request } from '@/network/request';

export function changeAvatar(formData) {
    return request({
        method: 'post',
        url: '/changeAvatar',
        data: formData
    });
}

export function changeInfo(formData) {
    return request({
        method: 'post',
        url: '/changeInfo',
        data: formData
    });
}