<template>
  <form class="modal-form" @submit.prevent>
    <p class="modal-text">
      <b>Registration</b>
    </p>

    <label class="form-description">
      <span class="form-description-text-name">Name</span>
      <div class="form-input-wrapper">
        <input
          v-model="name"
          class="form-input"
          type="text"
          minlength="3"
          required
        />
      </div>
      <small class="error-message" v-if="errors.name">{{ errors.name }}</small>
    </label>

    <label class="form-description">
      <span class="form-description-text-name">Last Name</span>
      <div class="form-input-wrapper">
        <input
          v-model="lastName"
          class="form-input"
          type="text"
          minlength="3"
          required
        />
      </div>
      <small class="error-message" v-if="errors.lastName">{{
        errors.lastName
      }}</small>
    </label>

    <label class="form-description">
      <span class="form-description-text-name">Middle Name</span>
      <div class="form-input-wrapper">
        <input
          v-model="middleName"
          class="form-input"
          type="text"
          minlength="3"
          required
        />
      </div>
      <small class="error-message" v-if="errors.middleName">{{
        errors.middleName
      }}</small>
    </label>

    <label class="form-description">
      <span class="form-description-text">Email</span>
      <div class="form-input-wrapper">
        <input v-model="email" class="form-input" type="text" required />
      </div>
      <small class="error-message" v-if="errors.email">{{
        errors.email
      }}</small>
    </label>

    <label class="form-description">
      <span class="form-description-text">Phone</span>
      <div class="form-input-wrapper">
        <input
          v-model="phone"
          v-mask="'+38(###) ###-##-##'"
          class="form-input"
          type="text"
          placeholder="+38(0__) -___-__-__"
          required
        />
      </div>
      <small class="error-message" v-if="errors.phone">{{
        errors.phone
      }}</small>
    </label>

    <label class="form-description">
      <span class="form-description-text">Password</span>
      <div class="form-input-wrapper">
        <input v-model="password" class="form-input" type="password" required />
      </div>
      <small class="error-message" v-if="errors.password">{{
        errors.password
      }}</small>
    </label>

    <label class="form-description">
      <span class="form-description-text">Date of Birth</span>
      <div class="form-input-wrapper">
        <input v-model="dob" class="form-input" type="date" required />
      </div>
      <small class="error-message" v-if="errors.dob">{{ errors.dob }}</small>
    </label>

    <label class="form-description">
      <span class="form-description-text">Group</span>
      <div class="form-input-wrapper">
        <select v-model="group" class="form-input" required>
          <option value="">Select a group</option>
          <option value="IA-31">IA-31</option>
          <option value="IA-32">IA-32</option>
          <option value="IA-33">IA-33</option>
          <option value="IA-34">IA-34</option>
        </select>
      </div>
      <small class="error-message" v-if="errors.group">{{
        errors.group
      }}</small>
    </label>

    <label class="form-description">
      <span class="form-description-text">Upload Document</span>
      <div class="form-input-wrapper">
        <input
          ref="documentInput"
          class="form-input"
          type="file"
          accept=".pdf,.jpg,.png"
          required
        />
      </div>
      <small class="error-message" v-if="errors.document">{{
        errors.document
      }}</small>
    </label>

    <label class="form-description">
      <span class="form-description-text">Gender</span>
      <div class="form-input-wrapper">
        <label>
          <input type="radio" v-model="gender" value="Male" required /> Male
        </label>
        <label>
          <input type="radio" v-model="gender" value="Female" /> Female
        </label>
      </div>
      <small class="error-message" v-if="errors.gender">{{
        errors.gender
      }}</small>
    </label>

    <Button
      color="#4682b4"
      type="submit"
      @click="submitForm"
      class="form-btn-send"
      >Send</Button
    >
  </form>
</template>

<script>
import { mask } from "vue-the-mask";
import Button from "@/views/Button.vue";

export default {
  components: {
    Button,
  },
  directives: {
    mask,
  },
  data() {
    return {
      name: "",
      lastName: "",
      middleName: "",
      email: "",
      phone: "",
      password: "",
      dob: "",
      group: "",
      document: null,
      gender: "",
      errors: {},
    };
  },
  methods: {
    validateFields() {
      const lettersPattern = /^[a-zA-Zа-яА-Я]+$/;

      if (!this.name) {
        this.errors.name = "Ім'я обов'язкове.";
      } else if (!lettersPattern.test(this.name)) {
        this.errors.name = "Ім'я повинно складатися тільки з букв.";
      } else {
        delete this.errors.name;
      }

      if (!this.lastName) {
        this.errors.lastName = "Фамілія обов'язкова.";
      } else if (!lettersPattern.test(this.lastName)) {
        this.errors.lastName = "Фамілія повинно складатися тільки з букв.";
      } else {
        delete this.errors.lastName;
      }

      if (!this.middleName) {
        this.errors.middleName = "По батькові обов'язкове.";
      } else if (!lettersPattern.test(this.middleName)) {
        this.errors.middleName =
          "По батькові повинно складатися тільки з букв.";
      } else {
        delete this.errors.middleName;
      }

      if (!this.email) {
        this.errors.email = "Необхідно вказати адресу електронної пошти.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        this.errors.email = "Введіть дійсну електронну адресу.";
      } else {
        delete this.errors.email;
      }

      if (!this.phone) {
        this.errors.phone = "Телефон обов'язковий.";
      } else {
        delete this.errors.phone;
      }

      if (!this.password) {
        this.errors.password = "Пароль обов'язковий.";
      } else if (this.password.length < 8 || this.password.length > 16) {
        this.errors.password = "Пароль має містити від 8 до 16 символів.";
      } else {
        delete this.errors.password;
      }

      if (!this.dob) {
        this.errors.dob = "Необхідно вказати дату народження.";
      } else {
        delete this.errors.dob;
      }

      if (!this.group) {
        this.errors.group = "Потрібна група.";
      } else {
        delete this.errors.group;
      }

      const documentInput = this.$refs.documentInput;
      if (!documentInput || !documentInput.files.length) {
        this.errors.document = "Необхідно завантажити документ.";
      } else {
        delete this.errors.document;
      }

      if (!this.gender) {
        this.errors.gender = "Необхідно вказати стать.";
      } else {
        delete this.errors.gender;
      }
    },
    submitForm() {
      this.validateFields();
      const objKeys = Object.keys(this.errors);

      if (objKeys.length) {
        return;
      }
      const newUser = {
        name: this.name,
        lastName: this.lastName,
        middleName: this.middleName,
        email: this.email,
        phone: this.phone,
        password: this.password,
        dob: this.dob,
        group: this.group,
        gender: this.gender,
      };

      this.$emit("addUser", newUser);
    },
  },
};
</script>

<style scoped>
.modal-form {
  width: 350px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
}

.form-input-wrapper {
  position: relative;
}

.form-input {
  width: 330px;
  padding: 8px;
  font-size: 14px;
}

.error-message {
  color: red;
  font-size: 12px;
}
</style>
