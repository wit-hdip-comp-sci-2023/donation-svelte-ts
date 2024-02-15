<script lang="ts">
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
  import Menu from "$lib/ui/Menu.svelte";
  import Heading from "$lib/ui/Heading.svelte";
  import Card from "$lib/ui/Card.svelte";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { currentSession } from "$lib/stores";
  import { donationService } from "$lib/services/donation-service";
  import { generateByCandidate, generateByMethod } from "$lib/services/donation-utils";

  let byMethod: any;
  let byCandidate: any;

  onMount(async () => {
    const donationList = await donationService.getDonations(get(currentSession));
    const candidates = await donationService.getCandidates(get(currentSession));
    byMethod = generateByMethod(donationList);
    byCandidate = generateByCandidate(donationList, candidates);
  });
</script>

<Menu />
<Heading title="Donations Data" />
<div class="columns">
  <div class="column">
    <Card title="Donations By Method">
      <Chart data={byMethod} type="bar" />
    </Card>
  </div>
  <div class="column">
    <Card title="Donations By Candidate">
      <Chart data={byCandidate} type="pie" />
    </Card>
  </div>
</div>
