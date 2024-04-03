"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

import React from "react";
import { ICoin } from "@/lib/database/models/coin.model";
import { useRouter } from "next/navigation";
import { addCoin } from "@/lib/actions/coin.actions";

const formSchema = z.object({
  coin: z.string().min(2).max(5),
});

type AddCoinProps = {
  userId: string;
  type: "Add" | "Update";
  coin?: ICoin;
};

const AddCoinForm = ({ userId, type }: AddCoinProps) => {
    const router = useRouter();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coin: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const coinValue = values.coin.toUpperCase().trim();
    console.log(coinValue);

    if(type === 'Add') {
        try {
          const newEvent = await addCoin({
            coin: coinValue,
            userId,
            path: '/portfolio'
          })
  
          if(newEvent) {
            form.reset();
            router.push(`/events/${newEvent._id}`)
          }
        } catch (error) {
          console.log(error);
        }
      }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="coin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Coin Ticker</FormLabel>
              <FormControl>
                <Input placeholder="ex: BTC, ETH, SOL, LINK" {...field} />
              </FormControl>
              <FormDescription>
                Once you've added a coin to your bag you can add specific purchases to that coin.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add Coin</Button>
      </form>
    </Form>
  );
};

export default AddCoinForm;
