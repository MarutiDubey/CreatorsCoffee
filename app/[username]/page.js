import React from 'react'

const Username = async ({ params }) => {
  const { username } = await params;
  return (
    <>
      <div className='relative w-full h-[350px] bg-slate-200'>
        <img className='w-full h-full object-cover' src="/cover.jfif" alt="profile cover" />
        <div className='absolute -bottom-16 left-1/2 transform -translate-x-1/2'>
          <img className='w-32 h-32 object-cover border-4 border-white rounded-full shadow-lg bg-white' src="/coin.gif" alt="profile" />
        </div>
      </div>
      
      <div className='info flex flex-col items-center justify-center mt-20 px-4 text-center pb-12'>
        <div className="name">
          <h1 className='text-3xl font-black tracking-tight text-slate-900 mb-1'>@{username}</h1>
        </div>
        <div className="about text-slate-500 font-medium text-lg mb-4">
          Creating awesome content
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 mt-12 w-full max-w-6xl mx-auto px-4">
          {/* Supporters Section */}
          <div className="supportblock w-full lg:w-1/2 bg-slate-900/5 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col h-[520px]">
            <h2 className='text-2xl font-black text-slate-900 mb-6 flex items-center gap-2'>
               Supporters 🏆
            </h2>
            <div className="overflow-y-auto pr-2 scrollbar-none">
              <ul className='flex flex-col gap-4'>
                <li className='flex items-center gap-4 p-4 bg-white/60 rounded-2xl border border-slate-100 shadow-sm hover:scale-[1.01] transition-transform'>
                  <div className='w-12 h-12 shrink-0 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner'>S</div>
                  <div className='flex flex-col'>
                    <span className='font-bold text-slate-900'>Sawan donated <span className='text-purple-600 font-black text-lg'>$20</span></span>
                    <p className='text-slate-500 font-medium italic text-sm mt-1 leading-relaxed'>"Keep up the great work! ✨ Your content is truly inspiring and I love what you are building here."</p>
                  </div>
                </li>
                <li className='flex items-center gap-4 p-4 bg-white/60 rounded-2xl border border-slate-100 shadow-sm hover:scale-[1.01] transition-transform'>
                  <div className='w-12 h-12 shrink-0 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner'>S</div>
                  <div className='flex flex-col'>
                    <span className='font-bold text-slate-900'>Sawan donated <span className='text-purple-600 font-black text-lg'>$20</span></span>
                    <p className='text-slate-500 font-medium italic text-sm mt-1 leading-relaxed'>"Keep up the great work! ✨ Your content is truly inspiring and I love what you are building here."</p>
                  </div>
                </li>
                
                
                <li className='flex items-center gap-4 p-4 bg-white/60 rounded-2xl border border-slate-100 shadow-sm hover:scale-[1.01] transition-transform'>
                  <div className='w-12 h-12 shrink-0 bg-linear-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner'>A</div>
                  <div className='flex flex-col'>
                    <span className='font-bold text-slate-900'>Anish donated <span className='text-blue-600 font-black text-lg'>$10</span></span>
                    <p className='text-slate-500 font-medium italic text-sm mt-1 leading-relaxed'>"Love the content! ❤️ Waiting for the next update!"</p>
                  </div>
                </li>

                <li className='flex items-center gap-4 p-4 bg-white/60 rounded-2xl border border-slate-100 shadow-sm hover:scale-[1.01] transition-transform'>
                  <div className='w-12 h-12 shrink-0 bg-linear-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner'>R</div>
                  <div className='flex flex-col'>
                    <span className='font-bold text-slate-900'>Rahul donated <span className='text-orange-600 font-black text-lg'>$50</span></span>
                    <p className='text-slate-500 font-medium italic text-sm mt-1 leading-relaxed'>"Legend! ☕ Best creator around."</p>
                  </div>
                </li>

                {/* Future messages will scroll here */}
              </ul>
            </div>
          </div>

          {/* Payments Section */}
          <div className="paymentsblock w-full lg:w-1/2 bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
             <div className='absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -mr-16 -mt-16'></div>
             
             <h2 className='text-2xl font-black mb-6'>Make a Payment ☕</h2>
             <div className='flex flex-col gap-4'>
                <div className='relative'>
                  <input type="" placeholder='Enter Name' className='w-full bg-slate-800 border border-slate-700 rounded-2xl py-4 px-6 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all font-bold text-lg' />
                   {/* <span className='absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold'>USD</span> */}
                   <input type="number" placeholder='Enter Message' className='w-full bg-slate-800 border border-slate-700 rounded-2xl py-4 px-6 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all font-bold text-lg' />
                   {/* <span className='absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold'>USD</span> */}
                   <input type="number" placeholder='Enter amount' className='w-full bg-slate-800 border border-slate-700 rounded-2xl py-4 px-6 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all font-bold text-lg' />
                   
                   
                </div>
                
                <div className='grid grid-cols-3 gap-3 mb-2'>
                   <button className='bg-slate-800 hover:bg-slate-700 py-3 rounded-xl font-bold border border-slate-700 transition-all active:scale-95'>$10</button>
                   <button className='bg-slate-800 hover:bg-slate-700 py-3 rounded-xl font-bold border border-slate-700 transition-all active:scale-95'>$20</button>
                   <button className='bg-slate-800 hover:bg-slate-700 py-3 rounded-xl font-bold border border-slate-700 transition-all active:scale-95'>$50</button>
                </div>

                <button className="w-full bg-linear-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-black text-lg shadow-xl hover:shadow-purple-500/20 hover:scale-[1.02] transition-all active:scale-[0.98]">
                  Pay Now
                </button>
             </div>

             <div className="sponserby mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-4 items-center justify-center text-xs font-bold text-slate-500 uppercase tracking-widest">
               <span>Powered by</span>
               <div className='flex gap-4 grayscale opacity-50 contrast-125'>
                 <span>GPay</span>
                 <span>Razorpay</span>
                 <span>AmazonPay</span>
                 <span>PhonePe</span>
               </div>
             </div>
          </div>
        </div>

        <div className="tag text-slate-600 max-w-2xl mx-auto text-center border-t border-slate-200 pt-8 mt-2 w-full">
          <p>This is a description area where the creator can talk about what they do and why they are seeking support from their fans.</p>
        </div>
      </div>

    </>
  )
}

export default Username