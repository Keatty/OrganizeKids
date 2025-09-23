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

export default function SignInPage() {
  return (
    <div className='space-background flex min-h-screen w-full items-center justify-center p-4'>
      <div className='relative z-10'>
        <Card className='w-full max-w-md border-white/20 bg-white/10 backdrop-blur-md'>
          <CardHeader className='text-center'>
            <CardTitle className='text-3xl font-bold text-white'>
              Welcome Back
            </CardTitle>
            <CardDescription className='text-white/80'>
              Sign in to your OrganizeKids account
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
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
                placeholder='Enter your password'
                className='border-white/20 bg-white/10 text-white placeholder:text-white/60'
              />
            </div>
            <Button variant='space' className='w-full' size='lg'>
              Sign In
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

            <div className='space-y-2 text-center'>
              <p className='text-sm text-white/60'>
                Don't have an account?{' '}
                <Link
                  href='/signup'
                  className='font-medium text-white hover:underline'
                >
                  Sign up
                </Link>
              </p>
              <Link
                href='/forgot-password'
                className='text-sm text-white/60 hover:text-white hover:underline'
              >
                Forgot your password?
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
