
<template>
  <button class="special-button">
    Special <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: 'SpecialButton',
  props: {
    label: String
  }
}
</script>

<style scoped>
span {
  font-weight: bold;
}
</style>
