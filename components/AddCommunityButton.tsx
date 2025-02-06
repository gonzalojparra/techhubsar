'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AddCommunityButton() {
  return (
    <Link href='/add-community'>
      <button
        className={cn(
          'group relative overflow-hidden rounded-xl mt-8',
          'bg-background p-px transition-transform',
          'active:scale-95 hover:scale-[1.02]'
        )}
      >
        <motion.span
          animate={{
            top: ['50%', '0%', '50%', '100%', '50%'],
            left: ['0%', '50%', '100%', '50%', '0%'],
          }}
          className='-translate-x-1/2 -translate-y-1/2 absolute z-10 size-8
            transform-gpu blur-sm transition-transform duration-300
            group-hover:scale-[3]'
          transition={{
            duration: 3,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <motion.span
            animate={{
              rotate: ['0deg', '360deg'],
            }}
            className='block size-full transform-gpu rounded-full'
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
            }}
            transition={{
              duration: 3,
              ease: 'linear',
              repeat: Infinity,
            }}
          />
        </motion.span>

        <span className='relative z-10 flex items-center gap-2 rounded-xl bg-background/95
          px-6 py-3 text-sm font-medium'>
          <motion.span
            animate={{
              backgroundImage: [
                'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))',
                'linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary)))',
              ],
            }}
            className='flex items-center gap-2 bg-clip-text text-primary transition-colors
              duration-500 group-hover:text-transparent font-mono'
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            <Plus className='w-4 h-4 text-primary' />
            Add new community
          </motion.span>
        </span>
      </button>
    </Link>
  );
}