# vue-sticky

## インストール
```
yarn add https://github.com/mokomokonanana/vue-sticky.git#develop
```

## 使い方
```Vue
<template lang="pug">
  #app
    //- v-sticky="{top:上に固定する行数, left:左側に固定する行数}"
    div(v-sticky="{top:2, left:3}")
      div(v-for="i in 20")
        div(v-for="n in 10") {{ `${i}${n}` }}
</template>

<script>
import sticky from 'vue-sticky'
export default {
  directives :{ sticky }
}
</script>

<style lang="stylus">
// ヘッダ固定機能のみの提供のため、それ以外のスタイルはすべて指定してやる必要がある
// 以下はテーブルっぽい縦横並べてスクロールするだけ
#app
  > div
    height 200px
    width 180px
    overflow auto
    > div
      display flex
      > div
        flexShrink 0
</style>

```