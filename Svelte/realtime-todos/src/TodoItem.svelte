<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function remove() {
    dispatch('remove', { id });
  }

  function toggleStatus() {
    const newStatus = !complete;

    dispatch('toggle', {
      id,
      newStatus,
    });
  }

  export let id; // document ID
  export let text;
  export let complete;
</script>

<tr>
  {#if complete}
    <td><span class="is-complete">{text}</span></td>
    <td><button on:click={toggleStatus}> ❌ </button></td>
  {:else}
    <td><span>{text}</span></td>
    <td><button on:click={toggleStatus}> ✔️ </button></td>
  {/if}

  <td>
    <button on:click={remove}> 🗑 </button>
  </td>
</tr>

<style>
  .is-complete {
    text-decoration: line-through;
    color: green;
  }
</style>
