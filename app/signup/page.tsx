import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function SignUpPage() {
  return (
    <div className='space-background flex min-h-screen w-full items-center justify-center p-4'>
      <div className='relative z-10'>
        <Card className='w-full max-w-md border-white/20 bg-white/10 backdrop-blur-md'>
          <CardHeader className='text-center'>
            <CardTitle className='text-3xl font-bold text-white'>
              Create Account
            </CardTitle>
            <CardDescription className='text-white/80'>
              Join OrganizeKids and start organizing your family
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <label className='text-sm font-medium text-white'>Name</label>
              <Input
                type='text'
                placeholder='Your full name'
                className='border-white/20 bg-white/10 text-white placeholder:text-white/60'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-medium text-white'>Email</label>
              <Input
                type='email'
                placeholder='your.email@example.com'
                className='border-white/20 bg-white/10 text-white placeholder:text-white/60'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-medium text-white'>Password</label>
              <Input
                type='password'
                placeholder='Create a secure password'
                className='border-white/20 bg-white/10 text-white placeholder:text-white/60'
              />
            </div>
            <Button variant='space' className='w-full' size='lg'>
              Create Account
            </Button>

            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t border-white/20' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-transparent px-2 text-white/60'>
                  Or continue with
                </span>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-3'>
              <Button
                variant='outline'
                className='border-white/20 text-white hover:bg-white/10'
              >
                Google
              </Button>
              <Button
                variant='outline'
                className='border-white/20 text-white hover:bg-white/10'
              >
                Facebook
              </Button>
            </div>

            <div className='text-center'>
              <p className='text-sm text-white/60'>
                Already have an account?{' '}
                <Link
                  href='/signin'
                  className='font-medium text-white hover:underline'
                >
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
