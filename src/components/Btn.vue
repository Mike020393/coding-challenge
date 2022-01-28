<template>
  <button @click="onClick" @class="propsClasas" class="Button">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "btn",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    propsClasas: {
      type: String,
      default: "",
    },
  },
};
</script>
