<script lang="ts">
  import A11yhidden from '@/components/common/a11y/A11yhidden.svelte';
  import MobileLayout from '@/Layout/MobileLayout.svelte';
</script>

<MobileLayout isNav={false} isFooter={false}>
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

    <a href="/main" class="button" type="button">START</a>
  </div>
</MobileLayout>

<style lang="scss">
  .container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .background {
    position: relative;
    background-color: #cecece;
    opacity: 0.36;
    width: 100%;
    height: 55vh;
  }
  .logo {
    position: relative;
    top: -55vh;
    padding: 112px 40px 0px;
  }
  .ducky {
    position: fixed;
    top: 40vh;
    left: 50%;
    transform: translateX(-50%);
    width: 133px;
  }

  .button {
    position: fixed;
    bottom: 10vh;
    left: 50%;
    transform: translateX(-50%);

    display: block;
    color: black;
    text-decoration: none;
    text-align: center;

    max-width: 500px;
    width: 80%;
    border: 3.5px solid black;
    border-radius: 20px;
    padding: 12px 0;
    background-color: #fff;
    font-weight: 400;
    font-size: 32px;
    letter-spacing: 0.22em;
    box-shadow: 0px 10px black;
    cursor: pointer;
  }
</style>
