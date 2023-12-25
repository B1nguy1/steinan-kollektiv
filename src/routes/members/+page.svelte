<script lang="ts">
    import { collection, getDocs } from "firebase/firestore";
    import { db } from "$lib/firebase";
    import { onMount } from "svelte";
    
    interface IMember {
        location:string;
        name: string;
        age: string;
        id: string;
    }
    
    let allMembers: IMember[] = [];

    export async function loadData(){
    try{
        const querySnapshot = await getDocs(collection(db,"people"));

        allMembers = querySnapshot.docs.map(doc => ({
            ...doc.data() as Omit<IMember, 'id'>, 
            id: doc.id
        }))
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
    .section-container {
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width:100%;
      padding: 20px;
    }

  .title-container {
     width: 100%; 
     text-align: center; 
     margin-bottom: 20px; 
  }

    .card {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 16px;
      margin: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  
    .cards-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center; /* Center cards */
      gap: 20px; /* Space between cards */
    }
  
  .card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 200px;
    margin: 10px;
    overflow: hidden;
    transition: transform 0.2s; 
  }

  .profilepic {
    height: 100px;
    margin-right: auto;
    margin-left: auto;
    display: block;
    width: 50%;
  }
</style>

<svelte:head>
    <title>Medlemmer</title>
</svelte:head>


<section class="section-container">
  <div class="title-container">
    <h1 class="font-serif text-3xl mb-1">Medlemmer</h1>
  </div>
  <div class="cards-container">
    {#each allMembers as member}
      <div class="card">
        <div class="card-header">
        <img src="images/profile.jpg" alt="profile" class="profilepic"/>
        <p class="text-center font-bold text-lg"> {member.name} </p>
        </div>
        <div class="card-body text-center">
          <p>År: {member.age}</p>
        </div>
      </div>
    {/each}
  </div>
</section>