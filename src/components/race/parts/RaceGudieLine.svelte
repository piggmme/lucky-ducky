<script lang="ts">
  export let totalDistance: number;
  export let isBottomBorder: boolean = true;

  $: count = Math.floor(totalDistance / 100 - 1);
  $: lines = Array.from({ length: count }, (_, i) => i);
</script>

<div class="guide" style={`width: ${totalDistance}px`}>
  {#each lines as line}
    <div
      class={`guide-line ${line % 2 === 0 ? '' : 'odd'} ${
        line === lines.at(-1) ? 'isLast' : ''
      }`}
      class:isBottomBorder
      data-line={line}
    />
  {/each}
</div>

<style lang="scss">
  .guide {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 160px;

    &-line {
      /* box-sizing: border-box; */
      width: 100px;
      height: 70px;
      border-left: 2px dotted rgb(237, 237, 237);
    }

    .isLast {
      border-left: 2px solid #000;
    }

    .isBottomBorder {
      border-bottom: 2px solid #ccc;
    }

    &-line.odd {
      background-color: rgba(252, 252, 252);
    }
  }
</style>
