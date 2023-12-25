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
    .card {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 16px;
      margin: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  
    .card-header {
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid #eee;
      font-size: 1.25em;
      font-weight: bold;
    }
  
    .card-body {
      margin-bottom: 16px;
    }
  
    .card-footer {
      margin-top: 16px;
      padding-top: 8px;
      border-top: 1px solid #eee;
      text-align: right;
    }
  </style>

<svelte:head>
    <title>Medlemmer</title>
</svelte:head>


<section class="flex flex-row flex-wrap items-center justify-center px-2">
    <div class="w-full text-center">
        <h1 class="font-serif text-3xl mb-1">Medlemmer</h1>
    </div>
    {#each allMembers as member}
    <div class="card flex-shrink-0 m-2">
        <div class="card-header">
          {member.name}
        </div>      
        <div class="card-body">
          <slot></slot>
        </div>
      
        <div class="card-footer">
          <slot name="footer"></slot>
        </div>
      </div>
      {/each}
</section>


