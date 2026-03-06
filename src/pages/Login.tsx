import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { MobileContainer } from "@/components/MobileContainer";
import { FloatingInput } from "@/components/FloatingInput";

export default function Login() {
  const [, setLocation] = useLocation();
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => {
    setLocation("/account");
  };

  return (
    <MobileContainer>
      <div className="flex-1 flex flex-col px-6 pt-12 pb-8">
        <h1 className="text-[28px] font-bold text-gray-900 tracking-tight leading-snug">
          Signin to your <br />PopX account
        </h1>
        <p className="text-gray-500 mt-3 text-[15px] leading-relaxed max-w-[260px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col flex-1">
          <FloatingInput
            label="Email Address"
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

          <div className="mt-auto pt-10">
            <button
              type="submit"
              className="w-full bg-[#6C25FF] text-white font-semibold py-[14px] rounded-[10px] text-center shadow-[0_8px_16px_-6px_rgba(108,37,255,0.4)] hover:opacity-90 transition-all duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </MobileContainer>
  );
}
