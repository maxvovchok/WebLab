<template>
  <Form @addUser="addUser" />
  <ListUser :users="users" @update-users="updateUsers" />
</template>

<script>
import Form from "./components/Form.vue";
import ListUser from "./components/ListUser.vue";

export default {
  data() {
    return {
      users: [],
    };
  },
  components: {
    Form,
    ListUser,
  },
  methods: {
    addUser(user) {
      this.users.push(user);
    },
    updateUsers(updatedUsers) {
      this.users = updatedUsers;
    },
  },
};
</script>

<style></style>
