<script lang="ts">
  // import { getRandomArbitrary } from 'src/utils/random';
  const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };
  // sprite image animation
  // https://svelte.dev/repl/2594c50ed8f94798898e11416951babc?version=3.44.2

  export let speed: number = 80;
  export let size = 100;
  export let isStart: boolean = false;
  export let isReset: boolean = false;
  export let initReset = () => {};
  export let style: string = '';
  export let raceWidth = 1000;
  export let setDuckInfo = () => {};

  let isRunning = false;
  let raceX = 0;

  let x = 0;
  let y = 0;
  const rows = 4;
  const cols = 3;
  const src = '/imgs/race_sprite.png';
  let timer: NodeJS.Timer;

  $: if (isReset) {
    raceX = 0;
  }

  $: if (isStart) {
    if (timer) clearInterval(timer);
    if (raceX < raceWidth) raceX += getRandomArbitrary(50, 100);

    timer = setInterval(() => {
      if (x === 2 && y === 2) {
        x = 0;
        y = 0;
        return;
      }
      if ((x + 1) % 4 === 0) {
        x = 0;
        y += 1;
        return;
      }
      x += 1;
    }, speed);

    isRunning = true;
    isStart = false;
    initReset();
  }

  $: if (!isRunning) {
    if (timer) clearInterval(timer);
  }
</script>

<div
  aria-hidden="true"
  style={`
      width: ${size}px; 
      height: ${size}px; 
      background-size: calc(100% * ${rows}) calc(100% * ${cols});
      background-position: ${x * size * -1}px ${y * size * -1}px;
      overflow: hidden;
      background-image: url(${src});
    
      ${isReset ? '' : `transition: transform ease-in-out ${getRandomArbitrary(0.8, 1.5)}s`};
      transform: translateX(${raceX < raceWidth ? raceX : raceWidth}px);
    
      ${style}
    `}
  on:transitionend={() => {
    if (!isRunning) return;

    /** 결승선 도달 */
    if (raceX >= raceWidth) {
      isRunning = false;
      setDuckInfo();
      return;
    }

    raceX += getRandomArbitrary(50, 100);
    if (raceX > raceWidth) raceX = raceWidth;
  }}
/>
