import { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
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
import useZustandStore from "@/store/useStore";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

function Login() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const setEmail = useZustandStore.use.setEmail();

  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  const signInWithEmail = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setAuthing(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
        setEmail(email);
        toast({
          title: "Logged in successfully",
          description: "Welcome back!",
        });
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
        toast({
          title: "Error logging in",
          description: "Please try again",
          variant: "destructive",
        });
      });
  };

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data, "data");
    signInWithEmail(data);
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full flex flex-col bg-[#282c34] items-center justify-center"></div>

      <div className="w-1/2 h-full flex flex-col p-20 justify-center">
        <div className="w-full flex flex-col max-w-[450px] mx-auto">
          <div className="w-full flex flex-col mb-10 text">
            <h3 className="text-4xl font-bold mb-2">Login</h3>
            <p className="text-lg mb-4">
              Welcome Back! Please enter your details.
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
              <Button className="w-full" type="submit" disabled={authing}>
                {authing && <Loader2 className="animate-spin" />}
                {authing ? "Logging in..." : "Log In"}
              </Button>
            </form>
          </Form>
          <div className="flex items-center gap-4 my-8">
            <Separator className="flex-1" />
            <span className="text-lg text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>
          <Button onClick={signInWithGoogle} disabled={authing}>
            Log In With Google
          </Button>
        </div>

        <div className="w-full flex items-center justify-center mt-10">
          <p className="text-sm font-normal text-gray-400">
            Don't have an account?{" "}
            <span className="font-semibold  text-gray-800 cursor-pointer underline">
              <a href="/signup">Sign Up</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
