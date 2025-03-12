"use client";
import { loginFormSchema, loginFormType } from "@/types";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";

type Props = {};

export default function LoginForm({}: Props) {
  const form = useForm<loginFormType>({
    resolver: zodResolver(loginFormSchema),
  });
  const onSubmit = (data: loginFormType) => {
    console.log(data);
  };
  return (
    <div className=" flex justify-center items-center m-auto py-10">
      <Card className="rounded-none w-[700px] h-[100vh] shadow-lg">
        <CardContent className="lg:p-12">
          <div>
            <h1 className="text-[30px] text-center font-bold mb-[16px] ">
              Login
            </h1>
            <p className="text-center mb-[16px]">
              Enter Login details to get access
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-2 lg:gap-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[17px] font-bold ">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-none w-[100%] h-[50px] "
                        {...field}
                        placeholder="Enter your email"
                        type="email"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[17px] font-bold">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-none  w-[100%] h-[50px]"
                        {...field}
                        placeholder="Enter your password"
                        type="password"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-6">
                <label className=" mr-10 font-bold flex flex-row  gap-2">
                  <Checkbox className=" mt-1" />
                  Keep Me Logged In
                </label>
                <Link href={"/Forgot_page"} className="text-[red] mt-2">
                  Forgot Password?
                </Link>
              </div>
              <div className="flex flex-col mb-4 md:flex-row md:justify-between md:items-end md:mt-16">
                <p className="mt-4">
                  Don&apost have an account?
                  <Link href={"/register"} className="text-[red] ">
                    Signup
                  </Link>
                  here
                </p>
                <Button
                  type="submit"
                  className="rounded-none  bg-[red] w-[30%] md:w-[15%] h-12 mt-2 "
                >
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
