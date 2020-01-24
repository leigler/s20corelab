<template>
	<main>
		<h1>Demo</h1>
		<h2>{{ subtitle }}</h2>
	</main>
</template>

<script>
export default {
  name: 'Demos',
  data: function(){
		return {}
  },
  props: {
    test: String,
    subtitle: String
  }
}	
</script>

<style scoped>
	

</style>