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

export function getFollowRelation(relation) {
    return request({
        method: 'get',
        url: '/getFollowRelation',
        params: {
            follower: relation.follower,
            followee: relation.followee
        }
    });
}

export function changeFollowRelation(relation) {
    return request({
        method: 'get',
        url: '/changeFollowRelation',
        params: {
            // aod: true为增添，delete为删除
            aod: relation.aod,
            follower: relation.follower,
            followee: relation.followee
        }
    });
}

export function getFollowList(_id) {
    return request({
        method: 'get',
        url: '/getFollowList',
        params: {
            id: _id
        }
    });
}

export function getFanList(_id) {
    return request({
        method: 'get',
        url: '/getFanList',
        params: {
            id: _id
        }
    });
}