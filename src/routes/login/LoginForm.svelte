<script lang="ts">
  import Message from "$lib/ui/Message.svelte";
  import UserCredentials from "$lib/ui/UserCredentials.svelte";

  let email = "";
  let password = "";
  let message = "";
</script>

{#if message}
  <Message {message} />
{/if}
<form method="POST" action="?/login">
  <UserCredentials bind:email bind:password />
  <button class="button is-success is-fullwidth">Log In</button>
</form>
