<script>
	
	import "../app.css";
	import Navbar from './Navbar.svelte'
</script>

<div class="app">
	<Navbar />
	<main>
		<slot />
	</main>


</div>

