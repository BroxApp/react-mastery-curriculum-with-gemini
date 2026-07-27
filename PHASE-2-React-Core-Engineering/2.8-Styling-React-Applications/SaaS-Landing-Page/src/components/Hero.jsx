import Button from "./Button";

function Hero () {
    return (
        <section className='flex flex-col lg:flex-row items-center justify-between gap-8 px-4 py-12 lg:px-16 lg:py-20 border bg-gray-600 text-white h-[90vh]'>
            <div>
          <h1 className="w-full lg:w-1/2 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Accelerate and streamline your team’s projects and tasks—three times faster</h1>  
          <p className="text-base sm:text-lg text-white mt-4">TaskFlow is the all-in-one tool for team planning, daily task management, and project synchronization—without clutter or complexity</p>
          </div>
          <div className="flex flex-col  gap-4 mt-8">
            <img src="/img/test.png" alt="Demo img" />
            <Button variant='primary'>Get Started</Button>
            <Button variant='secondary'>Watch Demo</Button>
          </div>
          
        </section>
    )
}
export default Hero;