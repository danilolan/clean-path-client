"use client";

import { Button, Divider, TextField } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  phone: number;
  email: string;
  x: number;
  y: number;
};

export default function CustomerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    //#TODO call api
    toast.success("Customer submited");
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
