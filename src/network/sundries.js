import { request } from '@/network/request';

export function getSearchResults(key) {
    return request({
        method: 'get',
        url: '/getSearchResults',
        params: {
            searchKey: key
        }
    });
}

export function getRecommendUsers(num) {
    return request({
        method: 'get',
        url: '/getRecommendUsers',
        params: {
            recommendNum: num
        }
    });
}

export function getInfo(un) {
    return request({
        method: 'get',
        url: '/getInfo',
        params: {
            targetName: un
        }
    });
}