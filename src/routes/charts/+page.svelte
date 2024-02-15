<script lang="ts">
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
  import Menu from "$lib/ui/Menu.svelte";
  import Heading from "$lib/ui/Heading.svelte";
  import Card from "$lib/ui/Card.svelte";
  export let data: any;
</script>

<Menu />
<Heading title="Donations Data" />
<div class="columns">
  <div class="column">
    <Card title="Donations By Method">
      <Chart data={data.byMethod} type="bar" />
    </Card>
  </div>
  <div class="column">
    <Card title="Donations By Candidate">
      <Chart data={data.byCandidate} type="pie" />
    </Card>
  </div>
</div>
