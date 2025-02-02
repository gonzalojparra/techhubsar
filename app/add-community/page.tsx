import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AddCommunity() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Add a New Tech Community</h1>
      <div className="bg-background border border-border shadow-md rounded-lg p-6">
        <p className="mb-4">To add a new tech community to our list, please follow these steps:</p>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Fork the TechHubsAr repository on GitHub.</li>
          <li>Clone your forked repository to your local machine.</li>
          <li>Create a new branch for your changes.</li>
          <li>Add the new community information to the /data/communities.json JSON file.</li>
          <li>Commit your changes and push to your forked repository.</li>
          <li>Create a Pull Request (PR) from your fork to the main TechHubsAr repository.</li>
        </ol>
        <p className="mb-4">
          For more detailed instructions and to access the repository, please visit our GitHub page:
        </p>
        <a
          href="https://github.com/TechHubsAr/techhubsar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline mb-6 inline-block"
        >
          TechHubsAr GitHub Repository
        </a>
        <div className="mt-8">
          <Link href="/">
            <Button variant="secondary">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

