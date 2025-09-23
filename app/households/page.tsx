import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function HouseholdsPage() {
  return (
    <div className='space-background min-h-screen p-6'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-8'>
          <h1 className='mb-2 text-4xl font-bold text-white'>Households</h1>
          <p className='text-white/80'>
            Manage your family households and their settings
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <Card className='border-white/20 bg-white/10 backdrop-blur-md'>
            <CardHeader>
              <CardTitle className='text-white'>Smith Family</CardTitle>
              <CardDescription className='text-white/70'>
                4 members • Created 2 months ago
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <p className='text-sm text-white/80'>Active Tasks: 8</p>
                <p className='text-sm text-white/80'>Total Points: 1,250</p>
                <Button
                  variant='outline'
                  className='mt-4 w-full border-white/20 text-white hover:bg-white/10'
                >
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className='border-white/20 bg-white/10 backdrop-blur-md'>
            <CardHeader>
              <CardTitle className='text-white'>Johnson Home</CardTitle>
              <CardDescription className='text-white/70'>
                2 members • Created 1 week ago
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <p className='text-sm text-white/80'>Active Tasks: 3</p>
                <p className='text-sm text-white/80'>Total Points: 150</p>
                <Button
                  variant='outline'
                  className='mt-4 w-full border-white/20 text-white hover:bg-white/10'
                >
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className='border-dashed border-white/20 bg-white/10 backdrop-blur-md'>
            <CardContent className='flex h-full flex-col items-center justify-center py-8'>
              <div className='text-center'>
                <h3 className='mb-2 text-lg font-semibold text-white'>
                  Create New Household
                </h3>
                <p className='mb-4 text-sm text-white/70'>
                  Start organizing a new family unit
                </p>
                <Button variant='space' size='lg'>
                  + Add Household
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
