import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <p className="mb-6">
          Have questions, suggestions, or just want to get in touch? We'd love to hear from you! Fill out the form
          below, and we'll get back to you as soon as possible.
        </p>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="What's this about?" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message here..." required />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
          <p>
            Email:{" "}
            <a href="mailto:contact@techhubs.ar" className="text-primary hover:underline">
              contact@techhubs.ar
            </a>
          </p>
          <p>
            Twitter:{" "}
            <a
              href="https://twitter.com/techhubsar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @techhubsar
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/TechHubsAr/techhubsar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              TechHubsAr Repository
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

