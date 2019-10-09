import Vue from 'vue'
import Router from 'vue-router'

const Welcome = () => import('@/views/Welcome/Welcome');
const Login = () => import('@/views/Welcome/Login');
const Register = () => import('@/views/Welcome/Register');
const Chat = () => import('@/views/Chat/Chat');
const Explore = () => import('@/views/Explore/Explore');
const Profile = () => import('@/views/Profile/Profile');

Vue.use(Router)

export default new Router({
	mode: 'hash',
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			redirect: '/welcome/login'
		},
		{
			path: '/welcome',
			redirect: '/welcome/login'
		},
		{
			path: '/welcome',
			component: Welcome,
			meta: {
				requireAuth: false
			},
			children: [
				{
					path: 'login',
					component: Login
				},
				{
					path: 'register',
					component: Register
				}
			]
		},
		{
			path: '/chat',
			component: Chat,
			meta: {
				// 标明需要requireAuth属性为true才可进入此路由（用于限制登陆）
				requireAuth: true,
			}
		},
		{
			path: '/explore',
			component: Explore,
			meta: {
				requireAuth: true,
			}
		},
		{
			path: '/profile',
			component: Profile,
			meta: {
				requireAuth: true,
			}
		}
	]
})
