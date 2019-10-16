import Vue from 'vue'
import Router from 'vue-router'

const Welcome = () => import('@/views/Welcome/Welcome');
const Login = () => import('@/views/Welcome/Login');
const Register = () => import('@/views/Welcome/Register');

const Main = () => import('@/views/Main/Main');
const Chat = () => import('@/views/Main/Chat/Chat');
const Explore = () => import('@/views/Main/Explore/Explore');

const Profile = () => import('@/views/Profile/Profile');

const Options = () => import('@/views/Options/Options');
const EssentialInfo = () => import('@/views/Options/EssentialInfo/EssentialInfo');
const AccountSecurity = () => import('@/views/Options/AccountSecurity/AccountSecurity');
const Settings = () => import('@/views/Options/Settings/Settings');
const About = () => import('@/views/Options/About/About');
const Sponsor = () => import('@/views/Options/Sponsor/Sponsor');

const Sundries = () => import('@/views/Sundries/Sundries');
const FindUser = () => import('@/views/Sundries/FindUser/FindUser');
const Write = () => import('@/views/Sundries/Write/Write');

Vue.use(Router)

export default new Router({
	mode: 'history',
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
			path: '/main',
			redirect: '/main/chat'
		},
		{
			path: '/main',
			component: Main,
			meta: {
				requireAuth: false
			},
			children: [
				{
					path: 'chat',
					component: Chat,
					meta: {
						// 标明需要requireAuth属性为true才可进入此路由（用于限制登陆）
						requireAuth: true,
						keepAlive: true
					}
				},
				{
					path: 'explore',
					component: Explore,
					meta: {
						requireAuth: true,
						keepAlive: true
					}
				},
			]
		},
		{
			path: '/profile',
			component: Profile,
			meta: {
				requireAuth: true,
				keepAlive: true
			}
		},
		{
			path: '/sundries',
			redirect: '/sundries/findUser'
		},
		{
			path: '/sundries',
			component: Sundries,
			meta: {
				requireAuth: true,
			},
			children: [
				{
					path: 'findUser',
					component: FindUser
				},
				{
					path: 'write',
					component: Write
				}
			]
		},
		{
			path: '/options',
			redirect: '/options/essentialInfo'
		},
		{
			path: '/options',
			component: Options,
			meta: {
				requireAuth: true,
			},
			children: [
				{
					path: 'essentialInfo',
					component: EssentialInfo
				},
				{
					path: 'accountSecurity',
					component: AccountSecurity
				},
				{
					path: 'settings',
					component: Settings
				},
				{
					path: 'about',
					component: About
				},
				{
					path: 'Sponsor',
					component: Sponsor
				}
			]
		}
	],
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {      
			if (from.meta.keepAlive) {        
				from.meta.savedPosition = document.body.scrollTop; 
			}
			return { x: 0, y: to.meta.savedPosition || 0 };
		}  
	}
})
