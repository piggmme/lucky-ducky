<script lang="ts">
  import type { duckType } from '../type';

  export let duck: duckType;
  export let rank = 0;
  export let lastLank: number;
</script>

<div class={`rank ${rank === 1 ? 'win' : rank === lastLank ? 'lose' : ''}`}>
  {#if rank !== 0}
    <div>{duck.name || `${duck.id}번 덕희`}</div>
  {/if}

  {#if rank === 0}
    <div />
  {:else if rank === 1}
    <div>🏅{rank}등🏅</div>
  {:else if rank === lastLank}
    <div>💥{rank}등💥</div>
  {:else}
    <div>{rank}등</div>
  {/if}
</div>

<style lang="scss">
  .rank {
    background-color: rgba(171, 231, 255, 0.512);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    transform: translateX(-30%);

    &.win {
      background-color: rgba(171, 255, 177, 0.512);
    }

    &.lose {
      background-color: rgba(255, 171, 171, 0.512);
    }
  }
</style>
