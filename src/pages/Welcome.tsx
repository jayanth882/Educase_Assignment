import { Link } from "wouter";
import { MobileContainer } from "@/components/MobileContainer";

export default function Welcome() {
  return (
    <MobileContainer>
      <div className="flex-1 flex flex-col">
        {/* Placeholder for top illustration area to match the visual balance */}
        <div className="h-[400px] w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center rounded-b-[40px] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#6C25FF] via-transparent to-transparent" />
        </div>
        
        <div className="px-6 pt-8 pb-32 flex-1 flex flex-col">
          <h1 className="text-[28px] font-bold text-gray-900 tracking-tight">Welcome to PopX</h1>
          <p className="text-gray-500 mt-3 text-[15px] leading-relaxed max-w-[260px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="absolute bottom-0 w-full px-6 pb-8 pt-4 bg-gradient-to-t from-white via-white to-transparent flex flex-col gap-3">
          <Link 
            href="/signup" 
            className="block w-full bg-[#6C25FF] text-white font-semibold py-[14px] rounded-[10px] text-center shadow-[0_8px_16px_-6px_rgba(108,37,255,0.4)] hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            Create Account
          </Link>
          <Link 
            href="/login" 
            className="block w-full bg-[#CBB8FF] text-black font-semibold py-[14px] rounded-[10px] text-center hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </MobileContainer>
  );
}
