import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import vContactsList from '../components/contacts/v-contact-list'
import vContactUserInfo from '../components/contacts/v-contact-user-info.vue'
import vUserList from '../components/users/v-users-list.vue'
import vUserChat from "../components/users/chat/v-user-chat.vue";

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: vContactsList
    },
    {
      path: '/contact',
      name: 'contact',
      component: vContactUserInfo
    },
    {
      path: '/chats',
      name: 'chats',
      component: vUserList
    },
    {
      path: '/chat',
      name: 'chat',
      component: vUserChat,
      props: true
    },
  ]
})

export default router;