import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col min-h-[calc(100vh-8rem)] p-4 text-center">
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <h1 className="text-6xl font-black bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Buy Me a Chai <span className="text-purple-500"> ☕</span>
          </h1>
          <p className="text-xl font-bold text-slate-700">
            A crowdfunding platform for chai lovers
          </p>
          <p className="text-lg font-medium text-slate-500">
            Support your favorite chai creators and get exclusive rewards
          </p>
          <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg active:scale-95">
            Start now
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center py-24 px-4 bg-slate-50/50 backdrop-blur-sm border-y border-slate-200/60">
        <h2 className="text-4xl font-black text-slate-900 mb-16 text-center">
          Your fans can support your <span className="text-purple-600 italic">vision</span>
        </h2>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:scale-[1.02] transition-transform duration-300">
            <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
              <img src="person.svg" alt="Fans" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Fans want to help</h3>
            <p className="text-slate-500 text-center leading-relaxed">
              Your amazing community is always there to fuel your creativity and passion.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:scale-[1.02] transition-transform duration-300">
            <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
              <img id="dynamic-image" src="coin.gif" alt="Support" className="w-14 h-14 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Fast Payouts</h3>
            <p className="text-slate-500 text-center leading-relaxed">
              Recieve funds instantly from your fans directly into your account.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:scale-[1.02] transition-transform duration-300">
            <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
              <img src="team.svg" alt="Team" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Unlock Rewards</h3>
            <p className="text-slate-500 text-center leading-relaxed">
              Offer exclusive rewards and private content to your top supporters.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:scale-[1.02] transition-transform duration-300">
            <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
              <img src="person.svg" alt="Fans" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Fans want to help</h3>
            <p className="text-slate-500 text-center leading-relaxed">
              Your amazing community is always there to fuel your creativity and passion.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:scale-[1.02] transition-transform duration-300">
            <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
              <img id="dynamic-image" src="coin.gif" alt="Support" className="w-14 h-14 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Fast Payouts</h3>
            <p className="text-slate-500 text-center leading-relaxed">
              Recieve funds instantly from your fans directly into your account.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:scale-[1.02] transition-transform duration-300">
            <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
              <img src="team.svg" alt="Team" className="w-12 h-12 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Unlock Rewards</h3>
            <p className="text-slate-500 text-center leading-relaxed">
              Offer exclusive rewards and private content to your top supporters.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
