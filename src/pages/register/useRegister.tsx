import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const loginFormSchema = z.object({
  userName: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(12, { message: "Password must be less than 13 characters" }),
});

export type TFormSchema = z.infer<typeof loginFormSchema>;

export const useRegisterForm = () => {
  return useForm<TFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });
};
