<script lang="ts">
  import Nav from './Nav/Nav.svelte';

  export let isNav = true;
</script>

<div class="container">
  <div class="view">
    {#if isNav}
      <Nav />
    {/if}
    <main class="main" class:isNav>
      <slot />
    </main>
  </div>
</div>

<style lang="scss">
  .container {
    width: 100vw;
    height: 100%;
    background-color: #eaeaea;
  }
  .view {
    max-width: 600px;
    min-height: 100vh;
    background-color: #fff;
    margin: 0 auto;
    overflow-x: hidden;
  }

  .main {
    &.isNav {
      margin-top: 50px;
    }
  }
</style>
