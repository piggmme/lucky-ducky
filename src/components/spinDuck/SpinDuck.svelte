<script lang="ts">
  import { getRandomArbitrary } from '@/utils/random';
  type SpinDuckState = 'before' | 'spinning' | 'end';
  let state: SpinDuckState = 'before';
  let isSpin = false;
  let startDeg = 0;
  let endDeg = getRandomArbitrary(300, 1000);
  $: if (state === 'end') {
    setTimeout(() => {
      if (state === 'end') state = 'before';
    }, 1000);
  }
  const getUnder360Deg = (deg: number) => deg % 360;
  const spinDuck = () => {
    isSpin = true;
    state = 'spinning';
  };
  const handleFinishSpin = (
    e: AnimationEvent & {
      currentTarget: EventTarget & HTMLElement;
    }
  ) => {
    e.currentTarget.style.transform = `rotate(${endDeg}deg)`;
    startDeg = getUnder360Deg(endDeg);
    endDeg = getRandomArbitrary(360, 1000);
    isSpin = false;
    state = 'end';
  };
</script>

<div class="container">
  <button
    class="duck {isSpin ? 'spin' : ''}"
    style="--start-deg: {startDeg}deg; --end-deg: {endDeg}deg;"
    disabled={isSpin}
    on:click={spinDuck}
    on:animationend={handleFinishSpin}
  >
    {#if state === 'before'}
      <img src="/imgs/spin/spin-duck1.png" alt="덕희" />
    {:else if state === 'spinning'}
      <img src="/imgs/spin/spin-duck3.png" alt="덕희" />
    {:else}
      <img src="/imgs/spin/spin-duck2.png" alt="덕희" />
    {/if}
  </button>
</div>

<style>
  .container {
    background-color: #57965b;
    width: 100%;
    height: calc(100% - 61px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .duck {
    width: 80%;
  }
  .spin {
    animation: rotation 1s ease-in-out forwards;
  }
  @keyframes rotation {
    from {
      transform: rotate(var(--start-deg));
    }
    to {
      transform: rotate(var(--end-deg));
    }
  }
</style>
