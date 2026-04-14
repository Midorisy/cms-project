export default [
  {
    path: '/home/analysis/overview',
    name: 'overview',
    component: () => import('@/views/home/analysis/overview/index.vue'),
  },
  {
    path: '/home/analysis/dashboard',
    name: 'dashboard',
    component: () => import('@/views/home/analysis/dashboard/index.vue'),
  },
  {
    path: '/home/story/chat',
    name: 'storyChat',
    component: () => import('@/views/home/story/chat/index.vue'),
  },
  {
    path: '/home/story/list',
    name: 'storyList',
    component: () => import('@/views/home/story/list/index.vue'),
  },
  {
    path: '/home/system/user',
    name: 'user',
    component: () => import('@/views/home/system/user/index.vue'),
  },
  {
    path: '/home/system/department',
    name: 'department',
    component: () => import('@/views/home/system/department/index.vue'),
  },
  {
    path: '/home/system/menu',
    name: 'menu',
    component: () => import('@/views/home/system/menu/index.vue'),
  },
]
