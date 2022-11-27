<script lang="ts">
  import { onMount } from 'svelte';
  import Duck from './parts/Duck.svelte';
  import RankText from './parts/RankText.svelte';

  type duckType = {
    name: string;
    id: number;
    rank: number;
  };

  let duckList: duckType[] = [{ name: '', id: 1, rank: -1 }];
  let isStart = false;
  let isReset = false;
  let raceWidth = 200;
  let rankingList: duckType[] = [];

  const resetRace = () => {
    duckList = duckList.map((duck) => ({
      ...duck,
      rank: -1
    }));
    rankingList = [];
    isReset = true;
    isStart = false;
  };

  onMount(resetRace);
</script>

<button
  on:click={() => {
    const lastDuck = duckList[duckList.length - 1];
    duckList = [...duckList, { name: '', id: lastDuck.id + 1, rank: -1 }];
    resetRace();
  }}
  type="button">오리 추가하기</button
>
<button
  on:click={() => {
    resetRace();
    const timer = setTimeout(() => {
      isStart = true;
      clearTimeout(timer);
    }, 300);
  }}
  type="button">시작하기</button
>
<button on:click={resetRace} type="button">리셋하기</button>

<!-- 말 sprite css 로 바꾸기  -->
{#each duckList as duck (duck.id)}
  <div class="flex items-center">
    <div>{duck.id}번 말</div>
    <div style={`width: ${raceWidth + 100}px`}>
      <Duck
        {raceWidth}
        setDuckInfo={() => {
          duckList = duckList.map((newDuck) => {
            if (duck.id === newDuck.id) {
              const updatedDuck = {
                ...newDuck,
                rank: rankingList.length + 1
              };
              rankingList.push(updatedDuck);
              return updatedDuck;
            }
            return newDuck;
          });
        }}
        initReset={() => {
          isReset = false;
        }}
        {isStart}
        {isReset}
      />
    </div>

    <RankText rank={duck.rank} lastLank={duckList.length} />
  </div>
{/each}
