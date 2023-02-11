<script lang="ts">
  import GameName from '@/components/common/GameName.svelte';
  import MobileLayout from '@/Layout/MobileLayout.svelte';
  import Button from '@/components/common/button.svelte';
  import { fortunePhrases } from '@/data/fortune.json';
  import { getRandomNumber } from '@/utils/random';

  const fortuneCount = fortunePhrases.length;
  let fortunePhrase = '';
  const getFortune = () => {};
</script>

<MobileLayout>
  <GameName>포춘 쿠키</GameName>
  <div class="game_space">
    <section>
      <div class="dish" />
      <div class="cookie" />
      <div class="memo">
        <p class="luck_text">
          {fortunePhrase}
        </p>
      </div>
    </section>

    <Button handleClick={getFortune} buttonText={'포춘쿠키를 열어 보세요!'} />
  </div>
</MobileLayout>

<style lang="scss">
  .game_space {
    height: 100vh;
    background-color: #efdab1;
  }
  .dish {
    width: 390;
    height: 352px;
    background: url('/imgs/cookie/dish.svg') no-repeat;
  }
  .cookie {
    width: 181;
    height: 156px;
    background: url('/imgs/cookie/cookie.svg') no-repeat;
  }
  .memo {
    background-color: #ebebeb;
    width: 170px;
    height: 120px;
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 30px;
  }
  .luck_text {
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
