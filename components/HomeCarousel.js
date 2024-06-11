'use client'

const CarouselFull =() => {
  return (
    <div
      id="controls-carousel"
      class="relative w-full h-full"
      data-carousel="slide"
    >
      <div class="relative overflow-hidden h-full">
      
        
            <div
           
              class="hidden duration-700 ease-in-out"
              data-carousel-item
            >
              <img
                src="/home/fresh_prespectives.png"
                class=" block w-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[550px]"
                alt="..."
              />
              
            </div>
            <div
           
           class="hidden duration-700 ease-in-out"
           data-carousel-item
         >
           <img
             src="/home/meaningful_networking.png"
             class=" block w-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-[550px]"
             alt="..."
           />
           
         </div>
          
      </div>
      
    </div>
  )
}

export default CarouselFull
