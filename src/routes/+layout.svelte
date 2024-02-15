<script lang="ts">
  import { browser } from "$app/environment";
  import { currentSession } from "$lib/stores";

  if (browser) {
    const savedSession = localStorage.donation;
    if (savedSession) {
      const session = JSON.parse(savedSession);
      currentSession.set(session);
    }
  }
</script>

<div class="container">
  <slot />
</div>
