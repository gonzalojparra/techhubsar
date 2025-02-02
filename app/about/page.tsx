import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About TechHubsAr</h1>
      <div className="space-y-6">
        <p>
          TechHubsAr is a community-driven project aimed at showcasing and connecting tech communities across Argentina.
          Our mission is to foster collaboration, knowledge sharing, and growth within the Argentine tech ecosystem.
        </p>
        <p>
          We believe in the power of local tech communities to drive innovation, create opportunities, and shape the
          future of technology in Argentina. By providing a platform to discover and connect with these communities, we
          hope to contribute to the growth and success of the Argentine tech industry.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Goals</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Showcase diverse tech communities across Argentina</li>
          <li>Facilitate connections between tech enthusiasts, professionals, and communities</li>
          <li>Promote knowledge sharing and collaboration within the tech ecosystem</li>
          <li>Support the growth and development of local tech initiatives</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Get Involved</h2>
        <p>
          TechHubsAr is an open-source project, and we welcome contributions from the community. Whether you want to add
          your tech community, improve our platform, or share your ideas, we'd love to hear from you!
        </p>
        <div className="flex space-x-4 mt-6">
          <Button asChild>
            <Link href="/add-community">Add Your Community</Link>
          </Button>
          <Button asChild variant="outline">
            <a href="https://github.com/yourusername/TechHubsAr" target="_blank" rel="noopener noreferrer">
              Contribute on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

