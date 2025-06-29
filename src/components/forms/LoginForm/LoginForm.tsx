import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// const loginSchema = z.object({
//   email: z.string()
//     .email("Invalid email format")
//     .refine(async (email) => {
//       const res = await fetch(`/api/check-email?email=${email}`);
//       return res.ok;
//     }, "Email already in use"),
//   password: z.string().min(6),
// });

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Form submitted:", data);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-4 w-full max-w-[360px] space-y-6 rounded-lg bg-white p-8 shadow-md"
    >
      <h2 className="text-center text-2xl font-bold text-gray-800">
        Welcome Back
      </h2>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={`mt-1 block w-full border px-3 py-2 text-slate-800 ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:ring-2 focus:outline-none focus:${
            errors.email ? "ring-red-500" : "ring-blue-500"
          }`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className={`mt-1 block w-full border px-3 py-2 text-slate-800 ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:ring-2 focus:outline-none focus:${
            errors.password ? "ring-red-500" : "ring-blue-500"
          }`}
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm ${
            isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
          } focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="mr-2 -ml-1 h-4 w-4 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            "Sign in"
          )}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
