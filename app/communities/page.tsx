'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Twitter, Globe, MapPin, ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Tabs,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';

import { fetchCommunities } from '@/utils/fetchCommunities';
import { cn } from '@/lib/utils';
import type { Community } from '@/types/community';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function CommunitiesPage() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [filteredCommunities, setFilteredCommunities] = useState<Community[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [provinces, setProvinces] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProvince, setSelectedProvince] = useState<string>('all');

  useEffect(() => {
    const loadCommunities = async () => {
      const fetchedCommunities = await fetchCommunities();
      setCommunities(fetchedCommunities);
      setFilteredCommunities(fetchedCommunities);

      const uniqueCategories = Array.from(
        new Set(fetchedCommunities.map((c) => c.category))
      );
      setCategories(['all', ...uniqueCategories]);

      const uniqueProvinces = Array.from(
        new Set(fetchedCommunities.map((c) => c.province))
      );
      setProvinces(['all', ...uniqueProvinces]);
    };
    loadCommunities();
  }, []);

  useEffect(() => {
    let filtered = communities;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((c) => c.category === selectedCategory);
    }
    if (selectedProvince !== 'all') {
      filtered = filtered.filter((c) => c.province === selectedProvince);
    }
    setFilteredCommunities(filtered);
  }, [selectedCategory, selectedProvince, communities]);

  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
      <div className='container mx-auto px-4 py-12 md:py-16'>
        <div className='space-y-12'>
          <div className='relative flex flex-col items-center text-center space-y-6'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='space-y-4'
            >
              <h1 className='text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent'>
                Tech Communities
              </h1>
              <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                Discover and connect with tech communities across Argentina
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 md:p-6'
          >
            <div className='flex flex-col md:flex-row items-start md:items-center gap-6'>
              <Tabs
                defaultValue='all'
                className='w-full'
                onValueChange={setSelectedCategory}
              >
                <TabsList className='w-full h-full flex-wrap justify-start gap-2 bg-transparent'>
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className={cn(
                        'flex-shrink-0 px-4 py-2 rounded-lg',
                        'data-[state=active]:bg-primary/10',
                        'data-[state=active]:text-primary',
                        'transition-all duration-200',
                        'hover:bg-accent/10'
                      )}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              <Select onValueChange={setSelectedProvince}>
                <SelectTrigger className='w-full md:w-[200px]'>
                  <SelectValue placeholder='Filter by province' />
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
          </motion.div>

          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {filteredCommunities.map((community) => (
              <motion.div key={community.id} variants={item}>
                <Card className='group relative h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 bg-card/50 backdrop-blur-sm'>
                  <CardHeader>
                    <div className='flex items-center justify-between'>
                      <Badge variant='outline' className='bg-primary/5'>
                        {community.category}
                      </Badge>
                      <div className='flex items-center gap-1.5'>
                        {community.website && (
                          <Button
                            variant='ghost'
                            size='icon'
                            className='h-8 w-8 hover:bg-primary/10'
                          >
                            <a
                              href={community.website}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='flex items-center justify-center'
                            >
                              <Globe className='h-4 w-4' />
                            </a>
                          </Button>
                        )}
                        {community.twitter && (
                          <Button
                            variant='ghost'
                            size='icon'
                            className='h-8 w-8 hover:bg-primary/10'
                          >
                            <a
                              href={`https://twitter.com/${community.twitter}`}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='flex items-center justify-center'
                            >
                              <Twitter className='h-4 w-4' />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className='space-y-4'>
                    <div className='space-y-2'>
                      <h2 className='text-xl font-semibold tracking-tight'>
                        {community.name}
                      </h2>
                      <p className='text-sm text-muted-foreground flex items-center gap-1.5'>
                        <MapPin className='h-3.5 w-3.5' />
                        {community.province}
                      </p>
                    </div>
                    <p className='text-sm text-muted-foreground line-clamp-3'>
                      {community.shortDescription}
                    </p>
                  </CardContent>

                  <CardFooter>
                    <Link
                      href={`/community/${community.id}`}
                      className='text-sm font-medium text-primary hover:text-primary/80 transition-colors group-hover:underline flex items-center gap-1'
                    >
                      View Details
                      <ArrowRight className='h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all' />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
