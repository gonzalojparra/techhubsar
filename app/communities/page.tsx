"use client"

import { useState, useEffect } from "react"
import { fetchCommunities } from "@/utils/fetchCommunities"
import type { Community } from "@/types/community"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Globe, Twitter } from "lucide-react"

export default function CommunitiesPage() {
  const [communities, setCommunities] = useState<Community[]>([])
  const [filteredCommunities, setFilteredCommunities] = useState<Community[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [provinces, setProvinces] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedProvince, setSelectedProvince] = useState<string>("all")

  useEffect(() => {
    const loadCommunities = async () => {
      const fetchedCommunities = await fetchCommunities()
      setCommunities(fetchedCommunities)
      setFilteredCommunities(fetchedCommunities)

      const uniqueCategories = Array.from(new Set(fetchedCommunities.map((c) => c.category)))
      setCategories(["all", ...uniqueCategories])

      const uniqueProvinces = Array.from(new Set(fetchedCommunities.map((c) => c.province)))
      setProvinces(["all", ...uniqueProvinces])
    }
    loadCommunities()
  }, [])

  useEffect(() => {
    let filtered = communities
    if (selectedCategory !== "all") {
      filtered = filtered.filter((c) => c.category === selectedCategory)
    }
    if (selectedProvince !== "all") {
      filtered = filtered.filter((c) => c.province === selectedProvince)
    }
    setFilteredCommunities(filtered)
  }, [selectedCategory, selectedProvince, communities])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Tech Communities in Argentina</h1>

      <div className="mb-8 flex justify-between items-center">
        <Tabs defaultValue="all" className="w-[400px]" onValueChange={setSelectedCategory}>
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <Select onValueChange={setSelectedProvince}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a province" />
          </SelectTrigger>
          <SelectContent>
            {provinces.map((province) => (
              <SelectItem key={province} value={province}>
                {province}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCommunities.map((community) => (
          <Card key={community.id}>
            <CardHeader>
              <CardTitle>{community.name}</CardTitle>
              <CardDescription>{community.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <Badge>{community.category}</Badge>
                <div className="space-x-2">
                  {community.website && (
                    <a href={community.website} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Globe className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                  {community.twitter && (
                    <a href={`https://twitter.com/${community.twitter}`} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
              <Link href={`/community/${community.id}`} className="mt-4 inline-block text-primary hover:underline">
                View Details
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

