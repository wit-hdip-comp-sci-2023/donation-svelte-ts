<script lang="ts">
  import type { Donation } from "$lib/services/donation-types";

  export let donations: Donation[];
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Amount</th>
    <th>Method</th>
    <th>Candidate</th>
    <th>Donor</th>
  </thead>
  <tbody>
    {#each donations as donation}
      <tr>
        <td>
          {donation.amount}
        </td>
        <td>
          {donation.method}
        </td>
        <td>
          {#if typeof donation.candidate !== "string"}
            {donation.candidate.lastName}, {donation.candidate.firstName}
          {/if}
        </td>
        <td>
          {donation.donor}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
