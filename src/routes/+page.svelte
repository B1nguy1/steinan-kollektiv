<script>
  import Typewriter from 'svelte-typewriter';
  import { onMount } from 'svelte';

  let text = "👋VELKOMMEN TIL EBS 32";
  let clearAfter = 1000;

  let showText = true;

  onMount(() => {
    let typingDuration = text.length * 100

    setTimeout(() => {
      showText = false;
    }, typingDuration + clearAfter)

  })

</script>

<svelte:head>
  <title> HOME </title>
</svelte:head>

<section class="flex flex-colflex-wrap items-center justify-center">
  <div class="w-full text-center">
    {#if showText}
      <Typewriter interval={80}>
        <h1 class="font-serif text-3xl mb-2">{text}</h1>
      </Typewriter>
    {/if}
    </div> 
</section>