<script lang="ts">
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
  import type { Candidate, Donation } from "$lib/services/donation-types";
  import { currentSession, latestDonation } from "$lib/stores";
  import Card from "$lib/ui/Card.svelte";
  import Heading from "$lib/ui/Heading.svelte";
  import Menu from "$lib/ui/Menu.svelte";
  import { onMount } from "svelte";
  import { donationService } from "$lib/services/donation-service";
  import { get } from "svelte/store";
  import DonateForm from "./DonateForm.svelte";
  import { generateByCandidate } from "$lib/services/donation-utils";
  import LeafletMap from "$lib/ui/LeafletMap.svelte";
  import DonationList from "$lib/ui/DonationList.svelte";

  export let data: any;

  let donations = data.donations;
  let byCandidate = data.byCandidate;
  let candidateList = data.candidates;
  let map: LeafletMap;

  onMount(async () => {
    for (let i = 0; i < data.donations.length; i++) {
      const popup = `${data.donations[i].candidate.firstName} ${data.donations[i].candidate.lastName}: €${data.donations[i].amount}`;
      await map.addMarker(data.donations[i].lat, data.donations[i].lng, popup);
    }
    const lastDonation = donations[donations.length - 1];
    if (lastDonation) map.moveTo(lastDonation.lat, lastDonation.lng);
  });

  latestDonation.subscribe(async (donation) => {
    if (donation) {
      donations.push(donation);
      donations = [...donations];
      byCandidate = generateByCandidate(donations, candidateList);
      let popup = `€${donation.amount}`;
      if (typeof donation.candidate !== "string") {
        popup += ` donated for ${donation.candidate.firstName} ${donation.candidate.lastName}`;
      }
      map.addMarker(donation.lat, donation.lng, popup);
      map.moveTo(donation.lat, donation.lng);
    }
  });
</script>

<Menu />
<Heading title="Make a Donation" />
<div class="columns">
  <div class="column">
    <Card title="Donatinons to Date">
      <LeafletMap height={30} bind:this={map} />
    </Card>
  </div>
  <div class="column">
    <Card title="Please Donate">
      <DonateForm candidates={data.candidates} />
    </Card>
  </div>
</div>
<div class="columns">
  <div class="column">
    <Card title="Donatinons to Date">
      <Chart data={data.byCandidate} type="bar" />
    </Card>
  </div>
  <div class="column">
    <Card title="Please Donate">
      <DonationList donations={data.donations} />
    </Card>
  </div>
</div>
