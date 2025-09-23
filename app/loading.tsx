export default function Loading() {
  return (
    <div className='space-background flex min-h-screen items-center justify-center'>
      <div className='text-center'>
        <div className='mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-white'></div>
        <p className='text-white/80'>Loading...</p>
      </div>
    </div>
  )
}
