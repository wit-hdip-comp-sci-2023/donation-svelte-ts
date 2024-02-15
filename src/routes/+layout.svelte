<script lang="ts">
  import { currentSession } from "$lib/stores";

  export let data: any;
  if (data.user) currentSession.set(data.user);
</script>

<div class="container">
  <slot />
</div>
