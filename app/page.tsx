'use client';

import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

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
  const isMobile = useIsMobile();

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
        <div className='flex flex-col lg:flex-row gap-8 mb-12'>
          <div className={`${isMobile ? 'w-full' : 'lg:w-2/3'} relative`}>
            <div className='aspect-[4/3] lg:h-[600px]'>
              <ArgentinaMap
                communities={communities}
                onHoverCommunity={setHoveredCommunityId}
              />
            </div>
          </div>

          <div className={`${isMobile ? 'w-full' : 'lg:w-1/3'} flex flex-col justify-center`}>
            <Spotlight />
            <div className='relative'>
              <h1 className='text-4xl lg:text-5xl font-bold mb-6 tech-gradient'>
                Tech Communities in Argentina
              </h1>
              <p className='text-xl text-muted-foreground'>
                Discover and connect with tech enthusiasts across the country
              </p>
              <AddCommunityButton />
            </div>
          </div>
        </div>

        <div className='w-full'>
          <div className='bg-card/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/50'>
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
