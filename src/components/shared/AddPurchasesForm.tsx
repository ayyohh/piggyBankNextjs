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
import { DateInput } from "rsuite";

import React from "react";
import { ICoin } from "@/lib/database/models/coin.model";
import { useRouter } from "next/navigation";
import { addCoin } from "@/lib/actions/coin.actions";

const formSchema = z.object({
  priceAtPurchase: z.string().min(2).max(5),
  amount: z.string().min(2).max(5),
});

type AddPurchaseProps = {
  coinId: string;
  type: "Add" | "Update";
  coin?: ICoin;
  priceAtPurchase: number;
  amount: number;
};

const AddPurchaseForm = ({ coinId, type }: AddPurchaseProps) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      priceAtPurchase: "",
      amount: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const coinValue = values.coin.toUpperCase().trim();

    if (type === "Add") {
      try {
        const newPurchase = await addCoin({
          coin: coinValue,
          userId,
          path: "/portfolio",
        });

        if (newPurchase) {
          form.reset();
          router.push(`/portfolio/${newPurchase._id}`);
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
          name="priceAtPurchase"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Price at Purchase ex. 15.25" {...field} />
              </FormControl>
              <FormDescription>
                This is the price per coin when this purchase was made.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Amount Purchased ex. 100 or .024"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Total amount of coins purchased at this time.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                  <DateInput format="MM/dd/yyyy" />

              </FormControl>
              <FormDescription>
                Date this purchase was made.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add Purchase</Button>
      </form>
    </Form>
  );
};

export default AddPurchaseForm;
