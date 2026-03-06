import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { MobileContainer } from "@/components/MobileContainer";
import { FloatingInput } from "@/components/FloatingInput";

export default function Signup() {
  const [, setLocation] = useLocation();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      agencyRadio: "yes"
    }
  });

  const onSubmit = () => {
    setLocation("/account");
  };

  return (
    <MobileContainer>
      <div className="flex-1 flex flex-col px-6 pt-12 pb-8">
        <h1 className="text-[28px] font-bold text-gray-900 tracking-tight leading-snug">
          Create your <br />PopX account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col flex-1 pb-20">
          <FloatingInput
            label="Full Name"
            type="text"
            registration={register("fullName")}
            error={errors.fullName?.message}
          />
          
          <FloatingInput
            label="Phone number"
            type="tel"
            registration={register("phoneNumber")}
            error={errors.phoneNumber?.message}
          />

          <FloatingInput
            label="Email address"
            type="email"
            registration={register("email")}
            error={errors.email?.message}
          />

          <FloatingInput
            label="Password"
            type="password"
            registration={register("password")}
            error={errors.password?.message}
          />

          <FloatingInput
            label="Company name"
            type="text"
            registration={register("companyName")}
            error={errors.companyName?.message}
          />

          <div className="mt-8 mb-6">
            <label className="text-[14px] text-gray-900 font-medium mb-3 block">
              Are you an Agency?<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="flex gap-8 items-center">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input 
                  type="radio" 
                  value="yes" 
                  {...register("agencyRadio")}
                  className="w-5 h-5 text-[#6C25FF] focus:ring-[#6C25FF] accent-[#6C25FF] border-gray-300" 
                />
                <span className="text-[15px] text-gray-800">Yes</span>
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input 
                  type="radio" 
                  value="no" 
                  {...register("agencyRadio")}
                  className="w-5 h-5 text-[#6C25FF] focus:ring-[#6C25FF] accent-[#6C25FF] border-gray-300" 
                />
                <span className="text-[15px] text-gray-800">No</span>
              </label>
            </div>
            {errors.agencyRadio && <p className="text-xs text-red-500 mt-2">{errors.agencyRadio.message}</p>}
          </div>

          <div className="mt-auto absolute bottom-0 left-0 w-full p-6 bg-white shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
            <button
              type="submit"
              className="w-full bg-[#6C25FF] text-white font-semibold py-[14px] rounded-[10px] text-center shadow-[0_8px_16px_-6px_rgba(108,37,255,0.4)] hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 transition-all duration-200"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </MobileContainer>
  );
}
