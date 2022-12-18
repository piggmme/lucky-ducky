<script lang="ts">
  import { getRandomArbitrary } from '@/utils/random';

  let isSpin = false;
  let startDeg = 0;
  let endDeg = getRandomArbitrary(300, 1000);

  const getUnder360Deg = (deg: number) => deg % 360;

  const spinDuck = () => {
    isSpin = true;
  };

  const handleFinishSpin = (
    e: AnimationEvent & {
      currentTarget: EventTarget & HTMLDivElement;
    }
  ) => {
    e.currentTarget.style.transform = `rotate(${endDeg}deg)`;

    startDeg = getUnder360Deg(endDeg);
    endDeg = getRandomArbitrary(300, 1000);

    isSpin = false;
  };
</script>

<div
  class="duck {isSpin ? 'spin' : ''}"
  style="--start-deg: {startDeg}deg; --end-deg: {endDeg}deg;"
  on:animationend={handleFinishSpin}
>
  <img src="/imgs/bottle.svg" alt="병" />
</div>

<button disabled={isSpin} on:click={spinDuck}>회전하기</button>

<style>
  .duck {
    width: 300px;
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
