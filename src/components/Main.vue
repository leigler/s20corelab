<template>
	<main>
		<h1>{{ title }}</h1>
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
	</main>
</template>

<script>
export default {
  name: 'Main',
  data: function(){
		return {}
  },
  props: {
    title: String,
    subtitle: String,
    link: Array
  }
}	
</script>

<style scoped>
	h1{
		margin-top: 0.5rem;
	}
	h1, h2, p, ul{
		margin-left: 0.5rem;
		font-weight: normal;
		font-size: 2rem;
		letter-spacing: -1px;
		line-height: 1.2;
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

</style>