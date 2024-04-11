"use server";
import { createUser } from "@/app/api/register-user/route";

export async function searchDrugs(
  formData: FormData,
  setSearchResults: React.Dispatch<React.SetStateAction<any>>
) {
  const searchQuery = formData.get("search");
  const abuse = formData.get("abuse");
  console.log(abuse);

  const response = await fetch(
    `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${searchQuery}&limit=1`
  );

  const data = await response.json();
  setSearchResults(data);
  console.log(data.results);
}

export async function register(formData: FormData) {
  let username = formData.get("username") as string;
  let email = formData.get("email") as string;
  let password = formData.get("password") as string;

  await createUser(username, email, password);
}
