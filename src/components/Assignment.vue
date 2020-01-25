<template>
	<main>Assignment</main>
</template>

<script>
	import showdown from 'showdown'

	export default {
  name: 'Vue',
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
  created () {
		this.fetchData();
	},
	methods: {
		fetchData () {
			this.loading = true;
			fetch('/schedules/day-1.md')
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
			})
		}
	}

}	
</script>

<style>
	
</style>