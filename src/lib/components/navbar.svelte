<script lang="ts">
    import { Router, Link, Route} from 'svelte-routing';
    import Members from '../../routes/members.svelte';
    import About from '../../routes/about.svelte';
    import Page from '../../routes/+page.svelte';
  </script>

<style>
    .customheader{
        display:flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f8f8f8;
        padding: 10px 20px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    :global(.menu .style-link) {
        text-decoration: none;
        color: #333;
        padding: 10px 20px;
        font-family: 'Arial', sans-serif;
    }       
</style>

<Router>
    <div class="customheader">
        <Link to="/" class="title font-serif no-underline text-black">EBS 32</Link>
        <nav class="menu">
            <Link to="/about" class="style-link font-serif">Om steinan</Link>
            <Link to="/members" class="style-link font-serif">Medlemmer</Link>
        </nav>
    </div>
        <main>
            <Route path="/" component={Page} />
            <Route path="about" component={About}/>
            <Route path="members" component={Members}/>
        </main>
</Router>