import React from 'react'
import Layout from "../Layout/Layout";

const page = () => {
    return (

        <Layout>
        <div className="-mt-10 ">
            <div className="m-20 flex">
                <div class="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-10 m-3">
                    <svg class="absolute w-12 h-12 text-gray-400 left-4 top-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>
                <div className="mr-">
                    <div className="font-bold text-2xl mt-3">
                        BaatChiit
                    </div>
                    <div className="text-sky-400/50 text-sm ">
                        @baatchiit
    
                    </div>
                    <div className="py-3 text-sm">
                        Update bio
    
                    </div>
                    <div className="flex -ml-3 text-sm ">
                        <div className='p-2'><span className='text-sky-400/50 px-1'>1 </span>Posts</div> 
                        <div className='p-2'><span className='text-sky-400/50 '>10 </span>Followers</div> 
                        <div className='p-2'><span className='text-sky-400/50 '>20 </span>Following</div> 
                        
                        
                    </div>
                </div>
                <div className="-mr-100">
                    <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 ">
                        
                        Edit Profile
                    </button>

                </div>
            </div>
            <div className="ml-20 -mt-10   ">
                    <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 ">
                        
                        Posts
                    </button>
                    <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 ">
                        
                        Liked Posts
                    </button>
            </div>
            
            
        </div>
        </Layout>
    )
}

export default page