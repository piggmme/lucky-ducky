<script lang="ts">
  export let title: string;
  export let url: string;
  export let thumbnail: string;
</script>

<div class="item-card">
  <a href={url}>
    <img class="image" src={`/imgs/thumbnails/${thumbnail}`} alt={title} />
    <p>{title}</p>
  </a>
</div>

<style lang="scss">
  .item-card {
    display: flex;
  }
  .image {
    display: block;
    margin: 0;
  }
</style>
