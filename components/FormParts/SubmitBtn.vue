<template>
  <v-btn color="pink" @click="childEvent">{{ btnTitle }}</v-btn>
</template>
<script>
  export default {
    props: {
      btnTitle: {
        type: String,
        default: "ボタン",
      },
    },
    // 子から親へイベントを$emitで渡す（引数も渡せる）
    methods: {
      childEvent(){
        this.$emit('parent-event')
      }
    },
  }
</script>