import { useActionState } from "react";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormState = {
  message: string;
  errors?: {
    email?: string[];
    password?: string[];
  };
};

const LoginFormWithActionState: React.FC = () => {
  const [state, formAction, isPending] = useActionState(
    async (previousState: FormState, formData: FormData) => {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const validationResult = loginSchema.safeParse({ email, password });

      if (!validationResult.success) {
        return {
          ...previousState,
          errors: validationResult.error.flatten().fieldErrors,
        };
      }

      console.log("Form submitted:", { email, password });
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return {
        ...previousState,
        message: "Login successful!",
        errors: {},
      };
    },
    { message: "", errors: {} }
  );

  return (
    <form
      action={formAction}
      className="mx-4 w-full max-w-[360px] space-y-6 rounded-lg bg-white p-8 shadow-md"
    >
      <h2 className="text-center text-2xl font-bold text-gray-800">
        Login with useActionState
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
          name="email"
          type="email"
          className={`mt-1 block w-full border px-3 py-2 text-slate-800 ${
            state.errors?.email ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:ring-2 focus:outline-none focus:${
            state.errors?.email ? "ring-red-500" : "ring-blue-500"
          }`}
          placeholder="your@email.com"
        />
        {state.errors?.email && (
          <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>
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
          name="password"
          type="password"
          className={`mt-1 block w-full border px-3 py-2 text-slate-800 ${
            state.errors?.password ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:ring-2 focus:outline-none focus:${
            state.errors?.password ? "ring-red-500" : "ring-blue-500"
          }`}
          placeholder="••••••••"
        />
        {state.errors?.password && (
          <p className="mt-1 text-sm text-red-600">
            {state.errors.password[0]}
          </p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isPending}
          className={`flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm ${
            isPending ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
          } focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none`}
        >
          {isPending ? (
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
      {state.message && (
        <p className="mt-1 text-sm text-green-600">{state.message}</p>
      )}
    </form>
  );
};

export default LoginFormWithActionState;
