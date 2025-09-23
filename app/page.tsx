import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className='space-background flex min-h-screen w-full items-center justify-center p-4'>
      <div className='relative z-10'>
        <Card className='w-full max-w-lg border-white/20 bg-white/10 backdrop-blur-md'>
          <CardHeader className='text-center'>
            <CardTitle className='mb-4 text-4xl font-bold text-white'>
              OrganizeKids
            </CardTitle>
            <CardDescription className='text-lg text-white/80'>
              Organize your family life with tasks, rewards, and household
              management
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Link href='/signin' className='block'>
              <Button variant='space' className='w-full' size='lg'>
                Sign In
              </Button>
            </Link>
            <Link href='/signup' className='block'>
              <Button
                variant='outline'
                className='w-full border-white/20 text-white hover:bg-white/10'
                size='lg'
              >
                Sign Up
              </Button>
            </Link>
            <div className='text-center'>
              <p className='text-sm text-white/60'>
                Welcome to the space where families thrive together
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
