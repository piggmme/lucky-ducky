<script lang="ts">
  import ItemCard from '@/components/main/ItemCard.svelte';
  import MobileLayout from '@/Layout/MobileLayout.svelte';
  const games = [
    { title: '오리 경주', url: '/race', thumbnail: 'thumbnail_race.svg' },
    {
      title: '오리 돌리기',
      url: '/spin-duck',
      thumbnail: 'thumbnail_spin.svg'
    },
    {
      title: '포춘쿠키',
      url: '/fortuneCookie',
      thumbnail: 'thumbnail_spin.svg'
    },
    { title: '오리 로또', url: '/lotto', thumbnail: 'thumbnail_lotto.svg' },
    { title: '동전 던지기', url: '/coin', thumbnail: 'thumbnail_coin.svg' },
    { title: '오리 사다리', url: '/ladder', thumbnail: 'thumbnail_ladder.svg' },
    { title: '오리 뽑기', url: '/raffle', thumbnail: 'thumbnail_raffle.svg' },
    { title: '오리 돌림판', url: '/wheel', thumbnail: 'thumbnail_raffle.svg' },
    { title: 'comming soon', url: '/raffle', thumbnail: 'thumbnail_raffle.svg' }
  ];
</script>

<MobileLayout>
  <header>
    <h1>게임 선택하기</h1>
  </header>
  <main>
    <section>
      <ul>
        {#each games as game}
          <li>
            <ItemCard
              title={game.title}
              url={game.url}
              thumbnail={game.thumbnail}
            />
          </li>
        {/each}
      </ul>
    </section>
  </main>
</MobileLayout>

<style lang="scss">
  header {
    text-align: center;
    font-size: 32px;
  }
  main {
    max-width: 600px;
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    list-style: none;
  }
</style>
