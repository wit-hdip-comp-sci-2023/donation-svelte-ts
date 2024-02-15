<script lang="ts">
  import Card from "$lib/ui/Card.svelte";
  import DonationList from "$lib/ui/DonationList.svelte";
  import Heading from "$lib/ui/Heading.svelte";
  import Menu from "$lib/ui/Menu.svelte";
  import { donationService } from "$lib/services/donation-service";
  import type { Donation } from "$lib/services/donation-types";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { currentSession } from "$lib/stores";

  let donations: Donation[] = [];

  onMount(async () => {
    donations = await donationService.getDonations(get(currentSession));
  });
</script>

<Menu />
<Heading title="Donations to Date" />
<Card title="Donations">
  <DonationList {donations} />
</Card>
