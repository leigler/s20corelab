<template>
  <div id="app">
    <h1>
      <router-link to="/" >
        Core Lab Interaction
      </router-link>
    </h1>
    <router-view subtitle="(Section I)" :link="link"></router-view>
    <router-view name="demos"></router-view>
  </div>
</template>

<script>


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

h1{
  margin-top: 0.5rem;
}

h1, h2, h3, h4, p, ul{
  margin-left: 0.5rem;
  font-weight: normal;
  font-size: 2rem;
  letter-spacing: -1px;
  line-height: 1.2;
}

p + h1, p + h2, p + h3,
ul + h1, ul + h2, ul + h3{
  margin-top: 2rem;
}

p + h4, ul + h4{
  margin-top: 1rem;
}

a{
  color: #8A2BE2;
  box-sizing: border-box;
  border: solid 1px #8A2BE2;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  text-decoration: none;
}

@media(any-hover: hover){
  a:hover{
    background-color: #8A2BE2;
    color: white;
  }
}

.Post{
    margin-top: 2rem;
    padding-bottom: 4rem;
    border-top: 1px solid #8A2BE2;
  }

  .Post h1{
    text-transform: uppercase;
    color: #8A2BE2;
  }

  .Post h2{
    text-transform: uppercase;
    text-indent: 2rem;
  }

  .Post h3{
    color: #8A2BE2;
    text-indent: 2rem;
  }

  .Post h4{
    text-indent: 2rem;
  }

  .Post blockquote{
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: gray;
  }

  .Post ul li:before{
    content: "✷";
    color: lavender;
    margin-right: 0.25rem;
  }

  .Post pre{
    box-sizing: border-box;
    background-color: lavender;
    padding: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word; 
    
  }
  
  .Post code{
    font-size: 1.25rem;
    background-color: lavender;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 0.25rem;
  }

  .Post pre code{
    padding: 0;
    border-radius: none;
    overflow-wrap: break-word;
    word-break: break-all;

  }

</style>
