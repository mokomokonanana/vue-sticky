<template lang="pug">
  #app
    img(alt="Vue logo" src="./assets/logo.png")

    div(:style="{height: '200px', width: '180px', overflow: 'auto'}" v-sticky="{top:2, left:3}" class="test")
      div(v-for="i in 20" :style="{display: 'flex'}" )
        div(v-for="n in 10" :style="{flexShrink:'0'}") {{ `${i}${n}` }}
</template>

<script>
import sticky from '@/directive/'
export default {
  name: 'app',
  directives :{ sticky }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
