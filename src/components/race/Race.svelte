<script lang="ts">
  import { onMount } from 'svelte';
  import Duck from './parts/Duck.svelte';
  import RankText from './parts/RankText.svelte';

  type duckType = {
    name: string;
    id: number;
    rank: number;
  };

  let ducks: duckType[] = [{ name: '', id: 1, rank: 0 }];
  let isStart = false;
  let isReset = false;
  let rankings: duckType[] = [];

  const resetRace = () => {
    ducks = ducks.map((duck) => ({
      ...duck,
      rank: 0
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
    ducks = [...ducks, { name: '', id: lastDuck ? lastDuck.id + 1 : 1, rank: 0 }];
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
</script>

<button on:click={addDuck} type="button">말 추가하기</button>
<button on:click={startRace} type="button">시작하기</button>
<button on:click={resetRace} type="button">리셋하기</button>

{#each ducks as duck (duck.id)}
  <div>
    <div>{duck.id}번 말</div>
    <div>
      <Duck totalDistance={200} setDuckRanking={setDuckRanking(duck)} bind:isStart bind:isReset />
    </div>

    <RankText rank={duck.rank} lastLank={ducks.length} />
  </div>
{/each}
