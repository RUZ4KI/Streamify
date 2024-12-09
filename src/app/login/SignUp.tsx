import { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const signupSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

function Signup() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const [authing, setAuthing] = useState(false);

  const signUpWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        toast({
          title: "Account created successfully",
          description: "You are logged in",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Account creation failed",
          description: "Please try again",
          variant: "destructive",
        });
        setAuthing(false);
      });
  };

  const signUpWithEmail = async ({
    email,
    password,
  }: z.infer<typeof signupSchema>) => {
    setAuthing(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user.uid);
        toast({
          title: "Account created successfully",
          description: "You are logged in",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Account creation failed",
          description: "Please try again",
          variant: "destructive",
        });
        setAuthing(false);
      });
  };

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof signupSchema>) => {
    console.log(data, "data");
    signUpWithEmail(data);
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div
        className={`${
          isMobile ? "hidden" : "w-1/2"
        } h-full flex flex-col bg-[#282c34] items-center justify-center`}
      ></div>

      <div
        className={`${
          isMobile ? "w-full" : "w-1/2"
        } h-full flex flex-col p-6 md:p-20 justify-center`}
      >
        <div className="w-full flex flex-col max-w-[450px] mx-auto">
          <div className="w-full flex flex-col mb-10 text">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">Sign Up</h3>
            <p className="text-base md:text-lg mb-4">
              Welcome! Please enter your information below to begin.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit" disabled={authing}>
                {authing && <Loader2 className="animate-spin" />}
                {authing ? "Signing up..." : "Sign Up"}
              </Button>
            </form>
          </Form>

          <div className="flex items-center gap-4 my-6 md:my-8">
            <Separator className="flex-1" />
            <span className="text-base md:text-lg text-muted-foreground">
              OR
            </span>
            <Separator className="flex-1" />
          </div>

          <Button
            onClick={signUpWithGoogle}
            disabled={authing}
            className="w-full"
          >
            Sign Up With Google
          </Button>
        </div>

        <div className="w-full flex items-center justify-center mt-6 md:mt-10">
          <p className="text-sm font-normal text-gray-400">
            Already have an account?{" "}
            <span className="font-semibold text-gray-800 cursor-pointer underline">
              <a href="/login">Log In</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
