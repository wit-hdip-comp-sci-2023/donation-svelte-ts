import { browser } from "$app/environment";
import { donationService } from "$lib/services/donation-service";

if (browser) donationService.checkIsAlreadyLoggedIn();
