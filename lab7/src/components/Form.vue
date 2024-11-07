<template>
  <section class="section-form">
    <form class="form" @submit.prevent>
      <p class="modal-text">
        <b>Registration</b>
      </p>

      <label class="form-description">
        <span class="form-description-text-name">Name</span>
        <div class="form-input-wrapper">
          <input
            v-model="user.name"
            class="form-input"
            type="text"
            minlength="3"
            required
          />
        </div>
        <small class="error-message" v-if="user.errors.name">{{
          user.errors.name
        }}</small>
      </label>

      <label class="form-description">
        <span class="form-description-text-name">Last Name</span>
        <div class="form-input-wrapper">
          <input
            v-model="user.lastName"
            class="form-input"
            type="text"
            minlength="3"
            required
          />
        </div>
        <small class="error-message" v-if="user.errors.lastName">{{
          user.errors.lastName
        }}</small>
      </label>

      <label class="form-description">
        <span class="form-description-text-name">Middle Name</span>
        <div class="form-input-wrapper">
          <input
            v-model="user.middleName"
            class="form-input"
            type="text"
            minlength="3"
            required
          />
        </div>
        <small class="error-message" v-if="user.errors.middleName">{{
          user.errors.middleName
        }}</small>
      </label>

      <label class="form-description">
        <span class="form-description-text">Email</span>
        <div class="form-input-wrapper">
          <input v-model="user.email" class="form-input" type="text" required />
        </div>
        <small class="error-message" v-if="user.errors.email">{{
          user.errors.email
        }}</small>
      </label>

      <label class="form-description">
        <span class="form-description-text">Phone</span>
        <div class="form-input-wrapper">
          <input
            v-model="user.phone"
            v-mask="'+38(###) ###-##-##'"
            class="form-input"
            type="text"
            placeholder="+38(0__) -___-__-__"
            required
          />
        </div>
        <small class="error-message" v-if="user.errors.phone">{{
          user.errors.phone
        }}</small>
      </label>

      <label class="form-description">
        <span class="form-description-text">Password</span>
        <div class="form-input-wrapper">
          <input
            v-model="user.password"
            class="form-input"
            type="password"
            required
          />
        </div>
        <small class="error-message" v-if="user.errors.password">{{
          user.errors.password
        }}</small>
      </label>

      <label class="form-description">
        <span class="form-description-text">Date of Birth</span>
        <div class="form-input-wrapper">
          <input v-model="user.dob" class="form-input" type="date" required />
        </div>
        <small class="error-message" v-if="user.errors.dob">{{
          user.errors.dob
        }}</small>
      </label>

      <label class="form-description">
        <span class="form-description-text">Group</span>
        <div class="form-input-wrapper">
          <select v-model="user.group" class="form-input" required>
            <option value="">Select a group</option>
            <option value="IA-31">IA-31</option>
            <option value="IA-32">IA-32</option>
            <option value="IA-33">IA-33</option>
            <option value="IA-34">IA-34</option>
          </select>
        </div>
        <small class="error-message" v-if="user.errors.group">{{
          user.errors.group
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
            @change="handleDocumentChange"
          />
        </div>
        <small class="error-message" v-if="user.errors.document">{{
          user.errors.document
        }}</small>
      </label>

      <label class="form-description">
        <span class="form-description-text">Gender</span>
        <div class="form-input-wrapper">
          <label>
            <input type="radio" v-model="user.gender" value="Male" required />
            Male
          </label>
          <label>
            <input type="radio" v-model="user.gender" value="Female" /> Female
          </label>
        </div>
        <small class="error-message" v-if="user.errors.gender">{{
          user.errors.gender
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
  </section>
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
      user: {
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
      },
    };
  },
  methods: {
    validateField(field) {
      const lettersPattern = /^[a-zA-Zа-яА-Я]+$/;

      switch (field) {
        case "name":
          if (!this.user.name) {
            this.user.errors.name = "Ім'я обов'язкове.";
          } else if (!lettersPattern.test(this.user.name)) {
            this.user.errors.name = "Ім'я повинно складатися тільки з букв.";
          } else {
            delete this.user.errors.name;
          }
          break;

        case "lastName":
          if (!this.user.lastName) {
            this.user.errors.lastName = "Фамілія обов'язкова.";
          } else if (!lettersPattern.test(this.user.lastName)) {
            this.user.errors.lastName =
              "Фамілія повинно складатися тільки з букв.";
          } else {
            delete this.user.errors.lastName;
          }
          break;

        case "middleName":
          if (!this.user.middleName) {
            this.user.errors.middleName = "По батькові обов'язкове.";
          } else if (!lettersPattern.test(this.user.middleName)) {
            this.user.errors.middleName =
              "По батькові повинно складатися тільки з букв.";
          } else {
            delete this.user.errors.middleName;
          }
          break;

        case "email":
          if (!this.user.email) {
            this.user.errors.email =
              "Необхідно вказати адресу електронної пошти.";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.user.email)) {
            this.user.errors.email = "Введіть дійсну електронну адресу.";
          } else {
            delete this.user.errors.email;
          }
          break;

        case "phone":
          if (!this.user.phone) {
            this.user.errors.phone = "Телефон обов'язковий.";
          } else {
            delete this.user.errors.phone;
          }
          break;

        case "password":
          if (!this.user.password) {
            this.user.errors.password = "Пароль обов'язковий.";
          } else if (
            this.user.password.length < 8 ||
            this.user.password.length > 16
          ) {
            this.user.errors.password =
              "Пароль має містити від 8 до 16 символів.";
          } else {
            delete this.user.errors.password;
          }
          break;

        case "dob":
          if (!this.user.dob) {
            this.user.errors.dob = "Необхідно вказати дату народження.";
          } else {
            delete this.user.errors.dob;
          }
          break;

        case "group":
          if (!this.user.group) {
            this.user.errors.group = "Потрібна група.";
          } else {
            delete this.user.errors.group;
          }
          break;

        case "gender":
          if (!this.user.gender) {
            this.user.errors.gender = "Необхідно вказати стать.";
          } else {
            delete this.user.errors.gender;
          }
          break;

        case "document":
          const documentInput = this.$refs.documentInput;
          if (!documentInput || !documentInput.files.length) {
            this.user.errors.document = "Необхідно завантажити документ.";
          } else {
            delete this.user.errors.document;
          }
          break;

        default:
          break;
      }
    },
    handleDocumentChange(event) {
      const file = event.target.files[0];
      this.user.document = file;
    },
    submitForm() {
      Object.keys(this.user).forEach((field) => {
        if (field !== "errors") {
          this.validateField(field);
        }
      });

      if (Object.keys(this.user.errors).length > 0) {
        return;
      }

      const newUser = { ...this.user };

      this.$emit("addUser", newUser);
    },
  },
  watch: {
    "user.name"() {
      this.validateField("name");
    },
    "user.lastName"() {
      this.validateField("lastName");
    },
    "user.middleName"() {
      this.validateField("middleName");
    },
    "user.email"() {
      this.validateField("email");
    },
    "user.phone"() {
      this.validateField("phone");
    },
    "user.password"() {
      this.validateField("password");
    },
    "user.dob"() {
      this.validateField("dob");
    },
    "user.group"() {
      this.validateField("group");
    },
    "user.gender"() {
      this.validateField("gender");
    },
    "user.document"() {
      this.validateField("document");
    },
  },
};
</script>

<style scoped>
.section-form {
  padding-bottom: 20px;
}
.form {
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
