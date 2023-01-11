<script>
  import { getRandomNumber } from '@/utils/random';
  import Button from '../common/button.svelte';

  let randomNum = getRandomNumber(0, 1);

  let tailsImage = '/imgs/coins/tails-coin.png';
  let headsImage = '/imgs/coins/heads-coin.png';

  let tailCount = 0;
  let headCount = 0;

  const flipCoin = () => {
    randomNum = getRandomNumber(0, 1);
    if (randomNum) headCount++;
    else tailCount++;
  };
</script>

<main>
  <div>
    {#if randomNum}
      <img src={headsImage} alt="동전 앞면" />
    {:else}
      <img src={tailsImage} alt="동전 뒷면" />
    {/if}
    <Button handleClick={flipCoin} buttonText={'던지기!'} />
  </div>
  <p>head: {headCount}</p>
  <p>tail: {tailCount}</p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 240px;
    width: 240px;
    margin: 20px;
  }
</style>
