<!--
 * @Descripttion: 
 * @version: 
 * @Author: sea
 * @Date: 2021-07-23 14:32:15
 * @LastEditors: sea
 * @LastEditTime: 2021-07-23 17:50:12
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <l-button>
      <button>12</button>
    </l-button> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
