<template>
  <div class="v-users-list">
    <vUser 
      v-for="chat in chats"
      :key="chat.is"
      :user_data="chat"
    />
  </div>
</template>

<script>
  import vUser from './v-user'
  import { mapActions, mapState } from "vuex";
  export default {
    name: 'v-users-list',
    data() {
      return {
      }
    },
    components: {
      vUser,
    },
    methods: {
      ...mapActions(['FETCH_CHATS', 'SET_USER_TO_HEADER'])
    },
    computed: {
      ...mapState(['chats'])
    },
    mounted () {
      this.FETCH_CHATS()
      this.SET_USER_TO_HEADER()
    },
  }
</script>

<style scoped>

</style>