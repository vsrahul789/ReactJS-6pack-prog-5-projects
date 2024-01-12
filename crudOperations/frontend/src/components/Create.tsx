import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// import * as apiClient from "@/utils/apiClient";
// import { useMutation } from "@tanstack/react-query";

export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

const RegisterSchema = z.object({
  name: z
    .string()
    .min(6, { message: "Name should contain atleast 6 letters" })
    .max(50),
  email: z.string().email({ message: "Not a valid Email address" }),
  password: z.string().min(8, {
    message: "Invalid password. Password should be minimum of 8 charecters",
  }),
});

type TRegisterSchema = z.infer<typeof RegisterSchema>;

const Create = async () => {
  const register = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // const mutation = useMutation<(
  //   apiClient.register,
  //   {
  //     onSuccess: () => {
  //       console.log("Registration successful");
  //     },
  //     onError: (error: Error) => {
  //       console.log(error);
  //     },
  //   }
  // );

  function onSubmit(values: TRegisterSchema) {
    // mutation.mutate(values);
    console.log(values);
  }

  return (
    <Form {...register}>
      <form onSubmit={register.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={register.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={register.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={register.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default Create;
