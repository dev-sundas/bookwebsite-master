"use client";
import { registerSchema, registerType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import Forminput from "./Forminput";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {};

export default function Register({}: Props) {
  const form = useForm<registerType>({
    resolver: zodResolver(registerSchema),
  });
  const OnSubmit = (data: registerType) => {
    console.log(data);
  };
  return (
    <div className=" flex justify-center items-center m-auto py-10">
      <Card className="rounded-none w-[700px] h-[100vh] shadow-lg">
        <CardContent className="lg:p-10">
          <div>
            <h1 className="text-[30px] text-center font-bold mb-[16px] ">
              Sign Up
            </h1>
            <p className="text-center mb-[16px]">
              Create your account to get full access
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(OnSubmit)}
              className="flex flex-col md:gap-4"
            >
              <Forminput
                form={form}
                label="Full Name"
                name="name"
                placeholder="Enter your name"
                type="text"
              />
              <Forminput
                form={form}
                label="Email Address"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
              <Forminput
                form={form}
                label="Password"
                name="password"
                placeholder="Enter your password"
                type="password"
              />
              <Forminput
                form={form}
                label="Confirm Password"
                name="confirmpassword"
                placeholder="Enter your confirm password"
                type="password"
              />
              <div className="flex flex-col md:flex-row justify-between md:items-end lg:mt-6">
                <p className="mt-4">
                  Already have an account?
                  <Link href={"/loginuser"} className="text-[red] ">
                    Login
                  </Link>
                  here
                </p>
                <Button
                  type="submit"
                  className="rounded-none  bg-[red]  w-[30%] md:w-[15%] h-12 mt-2 "
                >
                  SignUp
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
