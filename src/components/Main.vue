<template>
	<main>
		<h2>{{ subtitle }}</h2>		
		<h2>Lukas Eigler-Harding</h2>
		<ul>
			<li>
				<a target="_blank" :href="link[1]">{{link[0]}}</a>
			</li>
			<li>
				<a target="_blank" href="https://cdparsons.glideapp.io/">cdparsons.glideapp.io</a>
			</li>
			<li>eigll343@newschool.edu</li>
		</ul>
		<p v-if="loading">loading...</p>
		<p v-if="error">failed to load...</p>
		<section class="Post" v-html="post">
		</section>
	</main>
</template>

<script>
import showdown from 'showdown'


export default {
  name: 'Main',
  data: function(){
		return {
			loading: false,
			post : null,
			error : false
		}
  },
  props: {
    title: String,
    subtitle: String,
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

<style scoped>
	main{
		margin: 0 auto;
		margin-top: 1rem;
		width: calc(100% - 4rem);
	}

	@media(max-width: 768px){
		main{
			width: calc(100% - 1.5rem);
		}	
	}

</style>