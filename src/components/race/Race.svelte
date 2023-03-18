<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Duck from './parts/Duck.svelte';
  import RankResult from './parts/RankResult.svelte';
  import type { duckType } from './type';
  import RaceGudieLine from './parts/RaceGudieLine.svelte';

  let ducks: duckType[] = [{ name: '', id: 1, rank: 0, distanceX: 0 }];
  let isStart = false;
  let isReset = false;
  let rankings: duckType[] = [];
  let race: HTMLDivElement;

  const totalDistance = 2200;

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
  <div class="header-button-wrapper">
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
  <RaceGudieLine {totalDistance} isBottomBorder={false} />
  {#each ducks as duck (duck.id)}
    <div class="race-field">
      <div class="race-duck">
        <RaceGudieLine {totalDistance} />
        <div class="race-number">{duck.id}번 덕희</div>
        <Duck
          setDuckRanking={setDuckRanking(duck)}
          bind:isStart
          bind:isReset
          bind:distanceX={duck.distanceX}
        />
        <div class="race-space" style={`width: ${totalDistance}px`} />
        <RankResult {duck} rank={duck.rank} lastLank={ducks.length} />
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .header {
    position: relative;

    &-button-wrapper {
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
  }

  .race {
    padding-top: 40px;
    overflow-x: scroll;
    width: 100%;
    position: relative;

    &-field {
      display: flex;
      align-items: flex-end;
      position: relative;
      justify-content: start;
      align-items: center;
      height: 70px;
    }

    &-duck {
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-around;
      align-items: end;
      padding: 10px;
      height: 70px;
      border-bottom: 2px solid #ccc;
    }

    &-number {
      background-color: #16701b;
      padding: 7px 14px;
      border-radius: 5px;
      border: 1px solid #000;
      color: #fff;
      flex-shrink: 0;
      margin: 10px;
    }

    &-space {
      height: 70px;
    }
  }
</style>
