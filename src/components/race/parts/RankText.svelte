<script lang="ts">
  export let rank = 0;
  export let lastLank: number;
</script>

{#if rank === 0}
  <div>두구두구</div>
{:else if rank === 1}
  <div>🏅{rank}등🏅</div>
{:else if rank === lastLank}
  <div>💥{rank}등💥</div>
{:else}
  <div>{rank}등</div>
{/if}
