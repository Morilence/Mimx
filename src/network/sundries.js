import { request } from '@/network/request';

export function getRecommendUsers() {
    return request({
        method: 'get',
        url: '/getRecommendUsers',
    });
}