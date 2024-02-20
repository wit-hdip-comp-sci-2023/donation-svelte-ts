<script lang="ts">
  import Card from "$lib/ui/Card.svelte";
  import DonationList from "$lib/ui/DonationList.svelte";
  import Heading from "$lib/ui/Heading.svelte";
  import Menu from "$lib/ui/Menu.svelte";

  export let data: any;
</script>

<Menu />
<Heading title="Donations to Date" />
<Card title="Donations">
  <DonationList donations={data.donations} />
</Card>
