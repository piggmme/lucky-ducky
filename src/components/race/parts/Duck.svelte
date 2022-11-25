<script lang="ts">
  import { getRandomArbitrary } from '@/utils/random';
  // sprite image animation
  // https://svelte.dev/repl/2594c50ed8f94798898e11416951babc?version=3.44.2

  export let size = 100;
  export let isStart: boolean = false;
  export let isReset: boolean = false;
  export let totalDistance = 2000;
  export let setDuckRanking = () => {};

  /** 달리는 애니메이션 */
  const animation = {
    x: 0,
    y: 0,
    rows: 4,
    cols: 3,
    size,
    speed: 50,
    src: '/imgs/race_sprite.png'
  };
  let timer: NodeJS.Timer;

  const runAnimation = () => {
    if (animation.x === 2 && animation.y === 2) {
      animation.x = 0;
      animation.y = 0;
      return;
    }
    if ((animation.x + 1) % 4 === 0) {
      animation.x = 0;
      animation.y += 1;
      return;
    }
    animation.x += 1;
  };

  /** 경주 진행 관리 */
  let isRunning = false;
  export let distanceX = 0;

  $: if (isReset) {
    distanceX = 0;
    isStart = false;
    isRunning = false;
  }

  $: if (isStart) {
    if (timer) clearInterval(timer);
    if (distanceX < totalDistance) distanceX += getRandomArbitrary(50, 100);

    timer = setInterval(runAnimation, animation.speed);

    isRunning = true;
    isStart = false;
    isReset = false;
  }

  $: if (!isRunning) {
    if (timer) clearInterval(timer);
  }

  $: isRaceEnd = distanceX >= totalDistance;
</script>

<div
  aria-hidden="true"
  style={`
      width: ${animation.size}px; 
      height: ${animation.size}px;
      background-size: calc(100% * ${animation.rows}) calc(100% * ${animation.cols});
      background-position: ${animation.x * animation.size * -1}px ${
    animation.y * animation.size * -1
  }px;
      overflow: hidden;
      background-image: url(${animation.src});
      ${isReset ? '' : `transition: transform ease-in-out ${getRandomArbitrary(0.5, 1)}s`};
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
/>
