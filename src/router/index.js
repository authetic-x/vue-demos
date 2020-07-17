import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ball from '../views/Ball.vue'
import LoginDemo from '@/views/LoginDemo/LoginDemo'
import LoginHome from '@/views/LoginDemo/LoginHome'
import Login from '@/views/LoginDemo/Login'
import Register from '@/views/LoginDemo/Register'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/ball',
    name: 'Ball',
    component: Ball
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: '/markdown',
    name: 'markdown',
    component: () => import(/* webpackChunkName: "markdown" */ '../views/MarkdownEditor.vue')
  },
  {
    path: '/githubCommit',
    name: 'githubCommit',
    component: () => import(/* webpackChunkName: "github-commit" */ '../views/GithubCommit.vue')
  },
  {
    path: '/treeView',
    name: 'treeView',
    component: () => import(/* webpackChunkName: "tree-view" */ "../views/TreeView/TreeView.vue")
  },
  {
    name: 'LoginDemo',
    path: '/login-demo',
    component: LoginDemo,
    children: [
      {
        name: 'loginHome',
        path: '/login-demo',
        component: LoginHome
      },
      {                       
        name: 'login',
        path: 'login',
        component: Login
      },
      {
        name: 'register',
        path: 'register',
        component: Register
      }
    ],
    redirect: {path: '/login-demo/'}
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
