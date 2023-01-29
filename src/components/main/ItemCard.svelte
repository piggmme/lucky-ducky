<script lang="ts">
  export let title: string;
  export let url: string;
  export let thumbnail: string;
</script>

<div class="item-card">
  <!-- <a href={url}>
    <img class="image" src={`/imgs/thumbnails/${thumbnail}`} alt={title} />
    <p>{title}</p>
  </a> -->
</div>

<style>
  .item-card {
    width: 169px;
    margin: 11px;
    background-color: lightsalmon;
  }
  .image {
    display: block;
    width: 169px;
    height: 117px;
    margin: 0;
    background-color: lightseagreen;
  }
</style>
