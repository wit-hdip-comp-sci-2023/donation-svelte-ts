<script lang="ts">
  import Menu from "$lib/ui/Menu.svelte";
  import Heading from "$lib/ui/Heading.svelte";
  import Card from "$lib/ui/Card.svelte";
  import LeafletMap from "$lib/ui/LeafletMap.svelte";
  import { onMount } from "svelte";
  export let data: any;

  let map: LeafletMap;

  onMount(async () => {
    for (let i = 0; i < data.donations.length; i++) {
      const popup = `${data.donations[i].candidate.firstName} ${data.donations[i].candidate.lastName}: €${data.donations[i].amount}`;
      await map.addMarker(data.donations[i].lat, data.donations[i].lng, popup);
    }
    const lastDonation = data.donations[data.donations.length - 1];
    if (lastDonation) map.moveTo(lastDonation.lat, lastDonation.lng);
  });
</script>

<Menu />
<Heading title="Donations Geo Data" />
<Card title="Donations Locations">
  <LeafletMap height={60} bind:this={map} />
</Card>
