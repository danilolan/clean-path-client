"use client";

import { CustomerDTO } from "@/types/dtos";
import { Button, Divider, TextField } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  phone: string;
  email: string;
  x: string;
  y: string;
};

export default function CustomerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({ name, email, phone, x, y }) => {
    const customer: CustomerDTO = {
      name,
      email,
      phone,
      position: {
        x: parseInt(x),
        y: parseInt(y),
      },
    };
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    })
      .then((resp) => {
        console.log(resp);
        if (resp.status !== 200) {
          toast.error("Try again later");
          return;
        }
        reset({
          name: "",
          email: "",
          phone: "",
          x: "",
          y: "",
        });
        toast.success("Customer created");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error("Try again later");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="w-full flex gap-4">
        <Controller
          name="name"
          control={control}
          rules={{
            required: {
              value: true,
              message: "This field is required.",
            },
            maxLength: 255,
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Entered value does not match email format",
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              {...fieldState}
              label="Name"
              error={!!errors.email}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          rules={{
            required: {
              value: true,
              message: "This field is required.",
            },
            maxLength: 11,
            pattern: {
              value: /^\d{11}$/,
              message: "Entered value does not match email format",
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              {...fieldState}
              label="Phone"
              error={!!errors.phone}
            />
          )}
        />
      </div>
      <Controller
        name="email"
        control={control}
        rules={{
          required: {
            value: true,
            message: "This field is required.",
          },
          maxLength: 255,
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format",
          },
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            {...fieldState}
            label="Email"
            error={!!errors.email}
          />
        )}
      />

      <Divider className="my-4" />
      <div className="w-full flex gap-4">
        <TextField
          {...register("x", { required: true })}
          label="Position X"
          error={!!errors.x}
          type="number"
        />
        <TextField
          {...register("y", { required: true })}
          label="Position Y"
          error={!!errors.y}
          type="number"
        />
      </div>

      <Button variant="outlined" type="submit" className="mt-4">
        Submit
      </Button>
    </form>
  );
}
