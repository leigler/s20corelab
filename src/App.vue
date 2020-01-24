<template>
  <div id="app">
    <Main title="Core Lab Interaction" subtitle="(Section I)" :link="link" />
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  data: function(){
    return {
      link: [
      "Syllabus",
      "/PUCD_2126_I_Eigler-Harding_SP20.pdf"
      ]
    }
  },
  components: {
    Main
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

html, body{
  width: 100%;
  font-size: 15px;
}

#app {
  font-family: Times New Roman, Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}

ul{
  list-style: none;
}

</style>
