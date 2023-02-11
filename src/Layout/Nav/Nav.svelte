<script lang="ts">
  import A11yhidden from '@/components/common/a11y/A11yhidden.svelte';
</script>

<nav class="nav">
  <a href="/">
    <div class="logo">
      <img
        width="17px"
        height="17px"
        src="/imgs/logo2.svg"
        alt="럭키덕희"
        aria-hidden="true"
      />
      <h1>럭키덕희</h1>
    </div>
  </a>

  <button>
    <A11yhidden>메뉴</A11yhidden>
    <img
      width="23px"
      height="23px"
      src="/imgs/menu.svg"
      alt="메뉴"
      aria-hidden="true"
    />
  </button>
</nav>

<style lang="scss">
  .nav {
    height: 51px;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 21px;
  }
</style>
