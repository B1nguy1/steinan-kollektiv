<script lang="ts">

    const carouselPhotos = [
        'src/lib/images/steinan.png',
        'src/lib/images/carbisgauccis.jpg'
    ];

    let index = 0

    const nextImage = () => {
        index = (index + 1) % carouselPhotos.length
    }

    const prevImage = () => {
        if (index != 0){
            index = (index - 1) % carouselPhotos.length;
        } else {
            index = carouselPhotos.length - 1;
        }
    }
</script>

<style>
    img, button {
        position:relative;
    }
</style>

<svelte:head>
    <title>About</title>
</svelte:head>

<section class="flex flex-col items-center justify-between min-h-screen">
    <div >
        <h1 class="font-serif"> Om Steinan </h1>
        <div>
            <p>
                Dette er en nettside for steinanbois i 2020/2021. Steinan er langt unna Gløs as brur.
            </p>
            <div style="overflow: hidden;">
                {#each [carouselPhotos[index]] as src(index)}
                    <img style="height: 300px" src={src} alt="" />
                {/each}
            </div>
            <div>
                <button class="btn btn-2 btn-2a btn-blue" on:click={prevImage}>Forrige</button>
                <button class="btn btn-2 btn-2a btn-blue" on:click={nextImage}>Neste</button>
            </div>
        </div>

    </div>
</section>