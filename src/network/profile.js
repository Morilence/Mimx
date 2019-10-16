import { request } from '@/network/request';

export function changeAvatar(formData) {
    return request({
        method: 'post',
        url: '/changeAvatar',
        data: formData
    });
}