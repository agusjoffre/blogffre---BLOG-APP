const LoadingPage = (): JSX.Element => {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <h1 className='text-9xl font-bold lora animate-pulse duration-1000'>
        Loading <span className='animate-ping duration-600'>...</span>
      </h1>
    </div>
  )
}

export default LoadingPage
