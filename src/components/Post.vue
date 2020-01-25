<template>
  <main>
    <section class="Post" v-html="post"></section>
  </main>
</template>

<script>
  import showdown from 'showdown'

  export default {
  name: 'Post',
  data: function(){
    return {
      loading: false,
      post : null,
      error : false
    }
  },
  props: {
    title: String,
    link: Array
  },
  mounted () {
    this.fetchData();
  },
  watch: {
    $route(to, from){
      if(to !== from){
        this.fetchData()
      }
    }
  },
  methods: {
    fetchData () {
      this.loading = true;
      this.post = '<h1>loading...</h1>';
      let section = this.$route.params.section
      let file = this.$route.params.post
      fetch(`/${section}/${file}.md`)
      .then((response) => { return response.text() })
      .then((textResponse) => {
        let converter = new showdown.Converter(),
            html      = converter.makeHtml(textResponse);
        this.loading = false;
        this.post = html;
      })
      .catch(() => {
        this.loading = false
        this.error = true
        this.post = '<h1>Failed to loading...</h1>';
      })
    }
  }

} 
</script>

<style>
  
</style>