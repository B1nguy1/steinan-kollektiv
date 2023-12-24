<script lang="ts">
	import Navbar from "$lib/components/navbar.svelte";
	import "../main.css";
</script>

<main>
	<Navbar />
	<slot />
</main>