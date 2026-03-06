import { MobileContainer } from "@/components/MobileContainer";
import { Camera } from "lucide-react";
const avatarImg = "/profile.png";
export default function Account() {
  const user = {
    fullName: "Marry Doe",
    email: "Marry@Gmail.Com"
  };

  return (
    <MobileContainer className="bg-gray-50/50">
      <div className="bg-white pb-6 shadow-sm shadow-gray-100/50">
        <div className="p-5 flex items-center shadow-sm">
          <h1 className="text-[19px] font-semibold text-gray-900">Account Settings</h1>
        </div>

        <div className="px-6 pt-6 flex items-start gap-5">
          <div className="relative inline-block shrink-0">
            <div className="w-[76px] h-[76px] rounded-full overflow-hidden border border-gray-100 shadow-sm relative bg-gray-200">
               <img 
                src={avatarImg} 
                alt="Profile" 
                className="w-full h-full object-cover scale-[2.5] translate-y-[-10px] translate-x-[5px]"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-[#6C25FF] w-7 h-7 rounded-full flex items-center justify-center border-2 border-white text-white hover:scale-110 transition-transform cursor-pointer shadow-sm shadow-black/10">
              <Camera size={13} strokeWidth={2.5} />
            </button>
          </div>
          
          <div className="pt-2">
            <h2 className="text-[17px] font-bold text-gray-900 tracking-tight leading-tight">{user.fullName}</h2>
            <p className="text-[14px] font-medium text-gray-600 mt-0.5">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="px-6 mt-6 pb-8 border-b border-dashed border-gray-300">
        <p className="text-[15px] text-gray-500 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.
        </p>
      </div>
    </MobileContainer>
  );
}
