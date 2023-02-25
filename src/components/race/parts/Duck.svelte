<script lang="ts">
  import { getRandomArbitrary, getRandomNumber } from '@/utils/random';
  // sprite image animation
  // https://svelte.dev/repl/2594c50ed8f94798898e11416951babc?version=3.44.2

  export let isStart: boolean = false;
  export let isReset: boolean = false;
  export let totalDistance = 2000;
  export let setDuckRanking = () => {};

  /** 경주 진행 관리 */
  let isRunning = false;
  export let distanceX = 0;

  $: if (isReset) {
    distanceX = 0;
    isStart = false;
    isRunning = false;
  }

  $: if (isStart) {
    console.log('transition');

    if (distanceX < totalDistance) distanceX += getRandomArbitrary(50, 100);

    isRunning = true;
    isStart = false;
    isReset = false;
  }

  $: isRaceEnd = distanceX >= totalDistance;
</script>

<div
  style={`
  ${
    isReset
      ? ''
      : `transition: transform ease-in-out ${getRandomArbitrary(0.5, 1)}s`
  };
  transform: translateX(${!isRaceEnd ? distanceX : totalDistance}px);

`}
  on:transitionend={() => {
    if (!isRunning) return;

    /** 결승선 도달 */
    if (isRaceEnd) {
      isRunning = false;
      setDuckRanking();
      return;
    }

    distanceX += getRandomArbitrary(100, 300);
    if (isRaceEnd) distanceX = totalDistance;
  }}
>
  <img
    class="ducky"
    class:isRunning
    src={getRandomNumber(0, 1) === 0
      ? '/imgs/race/ducky.svg'
      : '/imgs/race/ducky-sunglass.svg'}
    alt="덕희"
    aria-hidden="true"
  />
</div>

<style lang="scss">
  @keyframes running {
    0% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(00deg);
    }
  }

  .isRunning {
    animation: running 0.5s reverse infinite;
  }
</style>
