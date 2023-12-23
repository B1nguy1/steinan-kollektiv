<script lang="ts">
  import { collection, getDocs } from "firebase/firestore";
  import { db } from "$lib/firebase";
    import { onMount } from "svelte";

  let allMembers:any = [];

  export async function loadData(){
    try{
      const querySnapshot = await getDocs(collection(db,"people"));

      allMembers = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))

    }catch (error){
      console.error(error);
    }

    return {
      props: { allMembers }
      
    }
  }

  onMount(() => {
    loadData();
  })
</script>


<style>
    header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f8f8;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

    .title {
        color: #b41f1f;
        font-family: 'Arial', sans-serif;
        text-align: center;
        margin-top: 20px;
        font-size: 28px;
        font-weight: bold;
    }

    .menu {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

.menu a {
    text-decoration: none;
    color: #333;
    padding: 10px 15px;
    transition: background-color 0.3s, color 0.3s;
  }
</style>


<header>
    
    <h1 class="title">EBS 32</h1>

    <nav class="menu">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#">Om Steinan</a>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#">Medlemmer</a>
    </nav>

</header>

<div>
  <ul>
    {#each allMembers as member}
      <div>{member.name}</div>
    {/each}
  </ul>
</div>


