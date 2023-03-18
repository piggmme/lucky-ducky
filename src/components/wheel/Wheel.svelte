<script lang="ts">
  import { getRandomArbitrary } from '@/utils/random';
  type SpinDuckState = 'new' | 'spinning' | 'stop';
  let state: SpinDuckState = 'new';
  let isSpin = false;
  let startDeg = 0;
  let endDeg = getRandomArbitrary(1000, 2000);

  const options = ['밥', '라면'];
  let optionCount = 2;

  const increaseOptionCount = () => {
    if (optionCount < 8) optionCount += 1;
  };

  const decreseOptionCount = () => {
    if (optionCount > 2) optionCount -= 1;
  };

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
    endDeg = getRandomArbitrary(1000, 2000);
    isSpin = false;
    state = 'stop';
  };

  $: {
  }
</script>

<div class="container">
  <span class="detail">판에 들어갈 내용을 적어주세요!</span>

  <div>
    <span>옵션 개수 (2~8개)</span>
    <button class="count-button" on:click={decreseOptionCount}>-</button>
    <span>{optionCount}</span>
    <button class="count-button" on:click={increaseOptionCount}>+</button>
  </div>

  <div class="wheel-container">
    <div class="ducky">
      <img src="/imgs/wheel/ducky.svg" alt="덕희" aria-hidden width="50px" />
    </div>
    <div
      class="wheel {isSpin ? 'spin' : ''}"
      style="--start-deg: {startDeg}deg; --end-deg: {endDeg}deg;"
      on:animationend={handleFinishSpin}
    >
      <ul class="list">
        {#if state === 'new'}
          {#each Array(optionCount) as _, i}
            <li>
              {i + 1}
            </li>
          {/each}
        {:else}
          {#each options as option}
            <li>
              {option}
            </li>
          {/each}
        {/if}
      </ul>
    </div>
  </div>

  <button class="button" disabled={isSpin} on:click={spinDuck}>
    원판 돌리기
  </button>
</div>

<style>
  .container {
    width: 100%;
    display: flex;
    height: calc(100% - 61px);
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #ededed;
  }
  .list {
    background-color: red;
    width: 100%;
  }
  .detail {
    font-size: 23px;
  }
  .wheel-container {
    width: 100%;
    position: relative;
  }
  .wheel {
    width: 80%;
    position: relative;
    aspect-ratio: 1/1;
    background-color: white;
    border-radius: 50%;
    border: 3px solid #514438;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ducky {
    position: absolute;
    left: 50%;
    bottom: 0%;
    z-index: 100;
    transform: translate(-50%, 50%);
  }
  .button {
    width: 80%;
    padding: 16px;
    background-color: #16701b;
    border-radius: 10px;
    color: white;
  }
  .count-button {
    padding: 3px 10px;
    border: 1px solid #000;
    background-color: #fff;
    border-radius: 5px;
  }

  .spin {
    animation: rotation 3s ease-in-out forwards;
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
