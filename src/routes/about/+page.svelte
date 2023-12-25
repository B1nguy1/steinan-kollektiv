<script lang="ts">

    export let carouselPhotos = [
        "/images/carbisgauccis.jpg",
        "/images/steinan.png"
    ]
    
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

<section class="flex flex-col items-center justify-center">
    <div>
        <h1 class="font-serif text-center mb-6"> Om Steinan </h1>
        <div class="font-serif text-center mx-auto">
            <p class="mt-6">
                I hjertet av Steinan, en livlig og kulturelt rik del av byen, ligger EBS 32 - 
                et kollektiv som ikke bare er et hjem for studenter, men også et senter for samfunnsengasjement 
                og bærekraftig levemåte.
                <br>
                
                <br>
                EBS 32 skiller seg ut med sitt sterke samhold og mangfold. Kollektivet består av studenter fra ulike studieretninger,
                kulturer og bakgrunner, noe som skaper en unik smeltedigel av ideer og perspektiver. 
                Denne mangfoldigheten er ikke bare berikende for beboernes personlige vekst, 
                men også for det bredere samfunnet rundt dem.
            </p>
            <div class="overflow-hidden mx-auto">
                {#each [carouselPhotos[index]] as src(index)}
                    <img class="h-auto mx-auto" style="height: 300px" src={src} alt="" />
                {/each}
            </div>
            <div>
                <button class="btn btn-2 btn-2a btn-blue" on:click={prevImage}>Forrige</button>
                <button class="btn btn-2 btn-2a btn-blue" on:click={nextImage}>Neste</button>
            </div>
        </div>

    </div>
</section>