<script lang="ts">
  import A11yhidden from '@/components/common/a11y/A11yhidden.svelte';
  import MobileLayout from '@/Layout/MobileLayout.svelte';
</script>

<MobileLayout isNav={false}>
  <A11yhidden as="h1">럭키덕희 - 당신의 행운을 믿으세요!</A11yhidden>

  <div class="container">
    <div class="background" />

    <img
      class="logo"
      alt="럭키덕희"
      src="/imgs/intro/logo.png"
      aria-hidden="true"
    />

    <img
      class="ducky"
      alt="덕희"
      src="/imgs/intro/ducky.png"
      aria-hidden="true"
    />

    <a href="/race" class="button" type="button">START</a>
  </div>
</MobileLayout>

<style lang="scss">
  h1 {
    color: red;
  }
  .visit {
    background-color: aqua;
  }
</style>
