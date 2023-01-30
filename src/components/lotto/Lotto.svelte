<script>
  import { suffleArray } from '@/utils/random';
  import Button from '../common/button.svelte';

  const numbers = new Array(46).fill(null).map((number, i) => i + 1);
  let selectedNumbers = new Array(6).fill('?');
  const selectNumbers = () => {
    selectedNumbers = suffleArray(numbers)
      .slice(0, 6)
      .sort((a, b) => a - b);
  };
</script>

<main>
  <ul>
    {#each selectedNumbers as number}
      <li><span>{number}</span></li>
    {/each}
  </ul>

  <Button handleClick={selectNumbers} buttonText={'공 뽑기!'} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
