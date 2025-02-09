'use client';

import { useState, useEffect } from 'react';

import CommunityList from '@/components/CommunityList';
import ArgentinaMap from '@/components/ArgentinaMap';
import AddCommunityButton from '@/components/AddCommunityButton';

import { fetchCommunities } from '@/utils/fetchCommunities';
import { Spotlight } from '@/components/ui/spotlight';
import type { Community } from '@/types/community';

export default function Home() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [hoveredCommunityId, setHoveredCommunityId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const loadCommunities = async () => {
      const fetchedCommunities = await fetchCommunities();
      setCommunities(fetchedCommunities);
    };
    loadCommunities();
  }, []);

  return (
    <div className='w-full'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex flex-col xl:flex-row gap-8 mb-12'>
          <div className='w-full xl:w-2/3 relative'>
            <div className='aspect-[4/3] md:aspect-[16/9] xl:aspect-auto xl:h-[600px]'>
              <ArgentinaMap
                communities={communities}
                onHoverCommunity={setHoveredCommunityId}
              />
            </div>
          </div>

          <div className='w-full xl:w-1/3 flex flex-col justify-center'>
            <Spotlight />
            <div className='relative space-y-4'>
              <h1 className='text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight tech-gradient'>
                Tech Communities in Argentina
              </h1>
              <p className='text-lg sm:text-xl text-muted-foreground max-w-prose'>
                Discover and connect with tech enthusiasts across the country
              </p>
              <div className='pt-2'>
                <AddCommunityButton />
              </div>
            </div>
          </div>
        </div>

        <div className='w-full'>
          <div className='bg-card/50 backdrop-blur-sm rounded-xl shadow-lg p-4 sm:p-6 border border-border/50'>
            <CommunityList
              communities={communities}
              hoveredCommunityId={hoveredCommunityId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
