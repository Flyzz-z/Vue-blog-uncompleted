import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import Show from '@/views/Show.vue'
import ArticleShow from '@/views/ArticleShow.vue'
import SearchShow from '@/views/SearchShow.vue'
import CategoryShow from '@/views/CategoryShow.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: "/", 
    component: Index,
    name: "index",
  },
  {
    path: "/show",
    component: Show,
    name: "show",
    alias: "/s",
    children: [
      {
        path: "ArticleShow/:articleId",
        component: ArticleShow,
        alias: "article/:articleId"
      },
      {
        path: "SearchShow",
        component: SearchShow,
        alias: "search"
      },
      {
        path: "CategoryShow/:categoryId",
        component: CategoryShow,
        alias: "category/:categoryId"
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
