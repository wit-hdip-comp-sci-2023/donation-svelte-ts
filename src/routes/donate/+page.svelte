<script lang="ts">
  import type { Donation } from "$lib/services/donation-types";
  import { latestDonation } from "$lib/stores";
  import Card from "$lib/ui/Card.svelte";
  import DonateForm from "$lib/ui/DonateForm.svelte";
  import DonationList from "$lib/ui/DonationList.svelte";
  import Heading from "$lib/ui/Heading.svelte";
  import Menu from "$lib/ui/Menu.svelte";

  export let data: any;

  let donations: Donation[] = data.donations;
  latestDonation.subscribe(async (donation) => {
    if (donation) {
      donations.push(donation);
      donations = [...donations];
    }
  });
</script>

<Menu />
<Heading title="Make a Donation" />
<div class="columns">
  <div class="column">
    <Card title="Donatinons to Date">
      <DonationList {donations} />
    </Card>
  </div>
  <div class="column">
    <Card title="Please Donate">
      <DonateForm candidateList={data.candidateList} />
    </Card>
  </div>
</div>
