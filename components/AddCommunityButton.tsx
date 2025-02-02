import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AddCommunityButton() {
  return (
    <Link href="/add-community">
      <Button className=" bg-tech-gradient text-gray font-bold py-2 px-4 rounded">
        Add New Community
      </Button>
    </Link>
  )
}

