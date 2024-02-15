import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ cookies }) => {
  const donationUser = cookies.get("donation-user") as string;
  if (donationUser) {
    const user = JSON.parse(donationUser);
    return {
      user: user
    };
  }
  return;
};
