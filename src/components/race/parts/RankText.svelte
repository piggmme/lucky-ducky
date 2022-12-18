<script lang="ts">
  export let rank = -1;
  export let lastLank: number;
</script>

{#if rank <= 0}
  <div class="">두구두구</div>
{:else if rank === 1}
  <div class="font-bold text-blue-600 ">🏅{rank}등🏅</div>
{:else if rank === lastLank}
  <div class="font-bold text-red-600 ">💥{rank}등💥</div>
{:else}
  <div>{rank}등</div>
{/if}
