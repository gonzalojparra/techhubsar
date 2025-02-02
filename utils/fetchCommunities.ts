import type { Community } from "../types/community";
export async function fetchCommunities(): Promise<Community[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOSTNAME}/data/communities.json`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch communities data");
    }
    const data: Community[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching communities:", error);
    return [];
  }
}
