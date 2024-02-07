import { donationService } from "$lib/services/donation-service";

export const load = async () => {
  return {
    donations: await donationService.getDonations()
  };
};
