<script lang="ts">
  import GameName from '@/components/common/GameName.svelte';
  import MobileLayout from '@/Layout/MobileLayout.svelte';
  import Button from '@/components/common/button.svelte';
  import { getRandomNumber } from '@/utils/random';
  import { fortunePhrases } from '@/data/fortune.json';

  let isBroken = false;
  $: buttonText = isBroken ? '다시 뽑을래!' : '포춘쿠키를 열어 보세요!';

  const getRandomFortunePhrase = () =>
    fortunePhrases[getRandomNumber(0, fortunePhrases.length - 1)];
  let fortunePhrase = getRandomFortunePhrase();

  const handleClick = () => {
    if (isBroken) fortunePhrase = getRandomFortunePhrase();
    isBroken = !isBroken;
  };
</script>

<MobileLayout>
  <GameName>포춘 쿠키</GameName>
  <div class="container">
    <img class="dish" src="/imgs/cookie/dish.svg" alt="접시" />
    <img
      class="cookie"
      src={`/imgs/cookie/cookie${isBroken ? '_broken' : ''}.svg`}
      alt={`포춘쿠키${isBroken ? '_쪼개짐' : ''}`}
    />
    {#if isBroken}
      <div class="paper">
        <p class="luck_text">{fortunePhrase}</p>
      </div>
    {/if}
    <Button {handleClick} {buttonText} />
  </div>
</MobileLayout>

<style lang="scss">
  .container :global(button) {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;

    height: 54px;
    width: 360px;
    left: 15px;
    top: 514px;
    border-radius: 9px;
    background-color: #16701b;
    color: #ffffff;
  }

  .container {
    display: grid;
    grid-template-columns: auto 5% minmax(500px, auto) 5% auto;
    grid-template-rows: 20% minmax(auto, 400px) 20% 20%;
    place-items: center;
  }
  .dish {
    width: 390;
    height: 352px;

    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .cookie {
    width: 181;
    height: 156px;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;

    z-index: 10;
  }
  .paper {
    background-color: #f2f2f2;

    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 170px;
    height: 70px;
    padding-left: 15px;
    padding-right: 15px;
    transform: translateY(40px);
  }
  .luck_text {
    font-size: 15px;
    word-break: keep-all;
    text-align: center;
  }
</style>
