<script lang="ts">
  export let rank = 0;
  export let lastLank: number;
</script>

<div class="rank">
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

<style>
  .rank {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 180px;
  }
</style>
