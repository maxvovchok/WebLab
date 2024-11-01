<template>
  <section class="userList">
    <table v-if="currentUsers.length" class="users-table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Date of Birth</th>
          <th>Group</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in currentUsers" :key="index">
          <td>
            <input type="checkbox" v-model="selectedUsers" :value="index" />
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.dob }}</td>
          <td>{{ user.group }}</td>
          <td>{{ user.gender }}</td>
        </tr>
      </tbody>
    </table>

    <ul class="listBtn">
      <li>
        <button @click="deleteSelectedUsers">Видалити</button>
      </li>
      <li>
        <button @click="duplicateSelectedUsers">Дублікат</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedUsers: [],
    };
  },
  computed: {
    currentUsers() {
      return [...this.users];
    },
  },
  methods: {
    deleteSelectedUsers() {
      const updatedUsers = this.currentUsers.filter(
        (_, index) => !this.selectedUsers.includes(index)
      );
      this.selectedUsers = [];
      this.$emit("update-users", updatedUsers);
    },
    duplicateSelectedUsers() {
      const updatedUsers = [...this.currentUsers];
      this.selectedUsers.forEach((index) => {
        const userToDuplicate = { ...this.currentUsers[index] };
        updatedUsers.push(userToDuplicate);
      });
      this.selectedUsers = [];
      this.$emit("update-users", updatedUsers);
    },
  },
};
</script>

<style>
.listBtn {
  display: flex;
  gap: 30px;
  list-style: none;
}
</style>
