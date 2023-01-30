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
      <li>
        <span
          class={`lotto-ball lotto-ball-${
            number <= 10
              ? 'yellow'
              : number <= 20
              ? 'blue'
              : number <= 30
              ? 'red'
              : number <= 40
              ? 'gray'
              : 'green'
          }`}>{number}</span
        >
      </li>
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
  ul {
    display: flex;
  }
  .lotto-ball {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
  .lotto-ball-yellow {
    background-color: yellow;
  }
  .lotto-ball-blue {
    background-color: blue;
  }
  .lotto-ball-red {
    background-color: red;
  }
  .lotto-ball-gray {
    background-color: gray;
  }
  .lotto-ball-green {
    background-color: green;
  }
</style>
