<script>
  import Typewriter from 'svelte-typewriter';
  let text = "👋VELKOMMEN TIL EBS 32"; 
</script>

<svelte:head>
  <title> HOME </title>
</svelte:head>

<section class="flex flex-colflex-wrap items-center justify-center">
  <div class="w-full text-center">
      <Typewriter interval={80}>
        <h1 class="font-serif text-3xl mb-2">{text}</h1>
      </Typewriter>
    </div> 
</section>