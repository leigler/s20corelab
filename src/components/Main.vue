<template>
	<main>
		<h2>{{ subtitle }}</h2>		
		<ul class="main_list">
			<li>January 24 – May 8, 2020</li>
			<li>Friday, 4:00pm – 6:40pm</li>
			<li><strike>6 East 16th Street, Rm. 1104</strike></li>
			<li><a href="https://glitch.com/@s-20-corelab" target="_blank">✷ Glitch ✷</a></li>
			<li><a target="_blank" href="https://newschool.zoom.us/meeting">✷ Zoom ✷</a></li>
			<li><br>
				<a target="_blank" :href="link[1]">✷ {{link[0]}} ✷</a>
			</li>
			<li>
				<a target="_blank" href="https://cdparsons.glideapp.io/">cdparsons.glideapp.io</a>
			</li>
			<li><br>Lukas Eigler-Harding</li>
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
			fetch('/schedules/primary.md')
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
	@media(max-width: 768px){
		.main_list li{
			margin-bottom: 0.25rem;
		}
	}
	

</style>