import { request } from '@/network/request';

export function getRecommendUsers(num) {
    return request({
        method: 'get',
        url: '/getRecommendUsers',
        params: {
            recommendNum: num
        }
    });
}