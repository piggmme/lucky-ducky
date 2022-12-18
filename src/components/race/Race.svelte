<script lang="ts">
  import { onMount } from 'svelte';
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
    ducks = [...ducks, { name: '', id: lastDuck ? lastDuck.id + 1 : 1, rank: 0, distanceX: 0 }];
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
      (maxDistanceX, { distanceX }) => (maxDistanceX < distanceX ? distanceX : maxDistanceX),
      0
    );
    race?.scrollTo({ left: maxDistanceX - window.innerWidth + 200, behavior: 'smooth' });
  }
</script>

<button on:click={addDuck} type="button">말 추가하기</button>
<button on:click={startRace} type="button">시작하기</button>
<button on:click={resetRace} type="button">리셋하기</button>

<div bind:this={race} class="race">
  {#each ducks as duck (duck.id)}
    <div class="race-field">
      <div>{duck.id}번 말</div>
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
  .race {
    overflow-y: scroll;
    width: 100vw;

    &-field {
      display: flex;
      position: relative;
      justify-content: start;
      align-items: center;
      background-color: azure;
      width: 2200px;
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
</style>
