<style>

    .customheader{
        display:flex;
        background-color: #f8f8f8;
        padding: 10px 20px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .menu {
        display: flex;
        justify-content: space-between;
        width:100%;
    }

    .menu-right {
        display: flex;
        gap: 20
    }

    :global(.menu .style-link) {
        text-decoration: none;
        color: red;
        padding: 10px 20px;
    }       
</style>

<div class="customheader">
    <nav class="menu">
        <a href="/" class="style-link title font-serif no-underline">EBS 32</a>
        <div class="menu-right">
            <a href="/about" class="style-link font-serif">Om Steinan</a>
            <a href ="/members" class="style-link font-serif">Medlemmer</a>
        </div>
    </nav>
</div>

