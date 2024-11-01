<template>
  <button :style="{ backgroundColor: color }" class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#888888",
    },
  },
};
</script>

<style scoped>
.btn {
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: none;
  padding: 10px 15px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  filter: brightness(0.85);
}
</style>
