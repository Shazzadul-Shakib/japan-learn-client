import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const registerFormSchema = z.object({
  userName: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  profile: z.union([
    z
      .instanceof(File)
      .refine(
        (file) => ["image/jpeg", "image/png", "image/jpg"].includes(file.type),
        { message: "Only .jpeg, .jpg, or .png files are allowed." },
      )
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "File size must be under 2MB.",
      }),
    z.string().url({ message: "Invalid URL format for profile" }),
  ]),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(12, { message: "Password must be less than 13 characters" }),
});

export type TFormSchema = z.infer<typeof registerFormSchema>;

export const useRegisterForm = () => {
  return useForm<TFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      userName: "",
      email: "",
      profile: "",
      password: "",
    },
  });
};
