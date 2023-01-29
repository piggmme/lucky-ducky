<script lang="ts">
  import Nav from './Nav/Nav.svelte';

  export let isNav = true;
  export let isFooter = true;
</script>

<div class="container">
  <div class="view">
    {#if isNav}
      <Nav />
    {/if}
    <main class="main" class:isNav>
      <slot />
    </main>

    <!-- TODO. footer 스타일링 -->
    <!-- {#if isFooter}
      <footer>
        <p>Contact Us</p>
        <p>문의</p>
        <p>제작</p>
        <p>Instagram</p>
        <p>Youtube</p>
      </footer>
    {/if} -->
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

  /* footer {
    position: relative;
    bottom: 0;
    width: 100%;
    max-width: 600px;
    background-color: #cecece;
  } */
</style>
