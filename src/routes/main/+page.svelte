<script lang="ts">
  import ItemCard from '@/components/main/ItemCard.svelte';
  const games = [
    { title: '오리 경주', url: '/race', thumbnail: 'thumbnail_race' },
    { title: '오리 돌리기', url: '/spin', thumbnail: 'thumbnail_spin' },
    { title: '오리 로또', url: '/lotto', thumbnail: 'thumbnail_lotto' },
    { title: '오리 사다리', url: '/ladder', thumbnail: 'thumbnail_ladder' },
    { title: '오리 뽑기', url: '/raffle', thumbnail: 'thumbnail_raffle' },
    { title: '동전 던지기', url: '/coin', thumbnail: 'thumbnail_coin' }
  ];
</script>

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

<!-- TODO: footer 레이아웃 분리 -->
<footer>
  <p>Contact Us</p>
  <p>문의</p>
  <p>제작</p>
  <p>인스타그램</p>
  <p>유튜브</p>
</footer>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
  }
</style>
