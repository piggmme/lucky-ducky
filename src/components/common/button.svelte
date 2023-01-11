<script lang="ts">
  export let handleClick = () => {};
  export let buttonText = '';
</script>

<button on:click={handleClick}>{buttonText}</button>

<style>
  button {
    width: 150px;
    padding: 15px 0;
    border: none;
    font-size: 16px;
    border-radius: 30px;
    cursor: pointer;
    background-color: #46d5e2;
    color: #414141;
  }
</style>
