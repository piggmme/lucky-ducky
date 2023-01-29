<script lang="ts">
</script>

<main class="container">
  <div class="view">
    <slot />
  </div>
</main>

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
</style>
