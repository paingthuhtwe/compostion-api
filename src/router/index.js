import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetail from '../views/PostDetail.vue'
import CreatePost from '../views/CreatePost.vue'
import TagPost from '../views/TagPost.vue'
import RealTime from '../views/RealTime.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetail,
    props: true
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: CreatePost
  },
  {
    path: '/tags/:tag',
    name: 'TagPost',
    component: TagPost,
    props: true,
  },
  {
    path: '/realtime',
    name: 'RealTime',
    component: RealTime,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
