import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function DashboardPage() {
  return (
    <div className='space-background min-h-screen p-6'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-8'>
          <h1 className='mb-2 text-4xl font-bold text-white'>
            Welcome to OrganizeKids Dashboard
          </h1>
          <p className='text-white/80'>
            Manage your family's tasks, rewards, and household activities
          </p>
        </div>

        <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          <Card className='border-white/20 bg-white/10 backdrop-blur-md'>
            <CardHeader>
              <CardTitle className='text-white'>Households</CardTitle>
              <CardDescription className='text-white/70'>
                2 Active
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-2xl font-bold text-white'>2</p>
            </CardContent>
          </Card>

          <Card className='border-white/20 bg-white/10 backdrop-blur-md'>
            <CardHeader>
              <CardTitle className='text-white'>Active Tasks</CardTitle>
              <CardDescription className='text-white/70'>
                Pending completion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-2xl font-bold text-white'>12</p>
            </CardContent>
          </Card>

          <Card className='border-white/20 bg-white/10 backdrop-blur-md'>
            <CardHeader>
              <CardTitle className='text-white'>Family Members</CardTitle>
              <CardDescription className='text-white/70'>
                Total registered
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-2xl font-bold text-white'>5</p>
            </CardContent>
          </Card>

          <Card className='border-white/20 bg-white/10 backdrop-blur-md'>
            <CardHeader>
              <CardTitle className='text-white'>Total Points</CardTitle>
              <CardDescription className='text-white/70'>
                Earned this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-2xl font-bold text-white'>1,250</p>
            </CardContent>
          </Card>
        </div>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <Card className='border-white/20 bg-white/10 backdrop-blur-md'>
            <CardHeader>
              <CardTitle className='text-white'>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className='space-y-3'>
              <Link href='/households'>
                <Button
                  variant='outline'
                  className='w-full border-white/20 text-white hover:bg-white/10'
                >
                  Manage Households
                </Button>
              </Link>
              <Link href='/tasks'>
                <Button
                  variant='outline'
                  className='w-full border-white/20 text-white hover:bg-white/10'
                >
                  Create New Task
                </Button>
              </Link>
              <Link href='/members'>
                <Button
                  variant='outline'
                  className='w-full border-white/20 text-white hover:bg-white/10'
                >
                  Add Family Member
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className='border-white/20 bg-white/10 backdrop-blur-md'>
            <CardHeader>
              <CardTitle className='text-white'>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-4 text-white/80'>
                <div className='flex items-center justify-between'>
                  <span>Alice completed "Clean Room"</span>
                  <span className='text-sm'>2 hours ago</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span>Bob earned 50 points</span>
                  <span className='text-sm'>4 hours ago</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span>New task "Take out trash" assigned</span>
                  <span className='text-sm'>1 day ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
