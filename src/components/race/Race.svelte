<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Duck from './parts/Duck.svelte';
  import RankResult from './parts/RankResult.svelte';
  import type { duckType } from './type';

  let ducks: duckType[] = [{ name: '', id: 1, rank: 0, distanceX: 0 }];
  let isStart = false;
  let isReset = false;
  let rankings: duckType[] = [];
  let race: HTMLDivElement;

  const resetRace = () => {
    ducks = ducks.map((duck) => ({
      ...duck,
      rank: 0,
      distanceX: 0
    }));
    rankings = [];
    isReset = true;
    isStart = false;
  };

  const setDuckRanking = (curDuck: duckType) => () => {
    const rankedDucks = ducks.map((duck) => {
      if (curDuck.id === duck.id) {
        const updatedDuck = {
          ...duck,
          rank: rankings.length + 1
        };
        rankings.push(updatedDuck);
        return updatedDuck;
      }
      return duck;
    });
    ducks = rankedDucks;
  };

  const addDuck = () => {
    const lastDuck = ducks.at(-1);
    ducks = [
      ...ducks,
      { name: '', id: lastDuck ? lastDuck.id + 1 : 1, rank: 0, distanceX: 0 }
    ];
    resetRace();
  };

  const startRace = () => {
    resetRace();
    const timer = setTimeout(() => {
      isStart = true;
      clearTimeout(timer);
    }, 300);
  };

  onMount(resetRace);

  $: {
    const maxDistanceX = ducks.reduce(
      (maxDistanceX, { distanceX }) =>
        maxDistanceX < distanceX ? distanceX : maxDistanceX,
      0
    );
    const viewWidth = browser
      ? window.innerWidth > 600
        ? 600
        : window.innerWidth
      : 600;
    race?.scrollTo({
      left: maxDistanceX - viewWidth + 250,
      behavior: 'smooth'
    });
  }
</script>

<div class="header">
  <img
    src="/imgs/race/race-background.png"
    alt="오리 경주 배경"
    aria-hidden="true"
  />
  <div class="button-wrapper">
    <button class="duck-add" on:click={addDuck} type="button"
      ><img width="20" src="/imgs/race/add.svg" alt="추가" aria-hidden="true" />
      오리 추가</button
    >
    <div class="start-reset-wrapper">
      <button class="start" on:click={startRace} type="button">START</button>
      <button class="reset" on:click={resetRace} type="button">RESET</button>
    </div>
  </div>
</div>

<div bind:this={race} class="race">
  {#each ducks as duck (duck.id)}
    <div class="race-field">
      <div class="ducky-number">{duck.id}번 덕희</div>
      <Duck
        setDuckRanking={setDuckRanking(duck)}
        bind:isStart
        bind:isReset
        bind:distanceX={duck.distanceX}
      />
      <RankResult rank={duck.rank} lastLank={ducks.length} />
      <div class="race-goal" />
    </div>
  {/each}
</div>

<style lang="scss">
  .header {
    position: relative;
  }
  .button-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    .start-reset-wrapper {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 30%;
      right: 50%;
      transform: translateX(50%);
    }
    .start {
      background-color: #f6ce55;
      border: 1.2px solid #000;
      padding: 15px 77px;
      border-radius: 7px;
      font-size: 18px;
      letter-spacing: 0.38em;
    }

    .reset {
      color: #fff;
      opacity: 0.6;
      padding-top: 7px;
    }

    .duck-add {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 7px;
      top: 5%;
      right: 5%;
      background-color: #fff;
      border: 1.2px solid #000;
      border-radius: 5px;
      padding: 9px 14px;
    }
  }
  .race {
    padding-top: 30px;
    overflow-x: scroll;
    overflow-y: visible;
    width: 100%;
    height: 100%;
    transform: translateY(-60px);

    &-field {
      display: flex;
      align-items: flex-end;
      position: relative;
      justify-content: start;
      align-items: center;
      width: 2200px;
      height: 63px;
    }

    &-goal {
      position: absolute;
      top: 0;
      right: 150px;
      width: 1px;
      height: 100%;
      background-color: black;
    }
  }

  .ducky-number {
    background-color: #16701b;
    padding: 7px 14px;
    border-radius: 5px;
    border: 1px solid #000;
    color: #fff;
    margin: 60px 10px 0px;
  }
</style>
