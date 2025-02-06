import { fetchCommunities } from '@/utils/fetchCommunities';
import CommunityContent from './CommunityContent';

export default async function CommunityPage({
  params,
}: {
  params: { id: string };
}) {
  const communities = await fetchCommunities();
  const community = communities.find((c) => c.id === params.id);

  if (!community) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='text-2xl font-bold text-red-500'>
          Community not found
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen w-full'>
      <CommunityContent community={community} />
    </div>
  );
}
