import { createRouter, createWebHistory } from 'vue-router';
import ConnectDB from '../views/ConnectDB.vue'
import ScanTable from '../views/ScanDB.vue'
import HomePage from '../views/HomePage.vue'
import EditTable from '../views/EditTable.vue'
import JoinSingle from '../views/JoinSingle.vue'
import JoinMulti from '../views/JoinMulti.vue'
import ShowResult from '../views/ShowResult.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/connect',
    name: 'ConnectDB',
    component: ConnectDB
  },
  {
    path: '/scan',
    name: 'ScanDB',
    component: ScanTable
  },
  {
    path: '/edit',
    name: 'EditTable',
    component: EditTable
  },
  {
    path: '/joinsingle',
    name: 'JoinSingle',
    component: JoinSingle
  },
  {
    path: '/joinmulti',
    name: 'JoinMulti',
    component: JoinMulti
  },
  {
    path: '/showresult',
    name: 'ShowResult',
    component: ShowResult
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router