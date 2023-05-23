import { useState } from "react";
import {
  Button,
  Checkbox,
  Divider,
  Group,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import Logo from "@/components/partials/Logo";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { APILoginUser } from "../../apis/authAPI";
import showNotify from "../../utils/notify";
import { useRouter } from "next/router";

type LoginFormDataType = {
  username: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // const [checked, setChecked] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormDataType>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormDataType> = async (
    data: LoginFormDataType
  ) => {
    try {
      setLoading(true);
      const res = await APILoginUser(data);
      localStorage.setItem("city-token", res.data.token);
      router.push("/dashboard");
      setLoading(false);
      showNotify("success", "Logged in successfully");
    } catch (e: any) {
      setLoading(false);
      showNotify("error", e);
    }
  };

  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-[#E5E5E5] col-span-12">
      <div className=" h-[480px] w-[380px] flex flex-col items-center justify-center gap-8 rounded-sm bg-white px-8">
        <Logo type="black" />
        <div className="w-full">
          <Divider
            label={
              <div className="text-center text-black px-2">
                <div className="text-xl">Login </div>
              </div>
            }
            labelPosition="center"
            size={"sm"}
            color={"#CA8A04"}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="true">
          <Group spacing={12}>
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  type="text"
                  size="md"
                  label="Username"
                  className="w-full"
                  placeholder="Enter username"
                  error={errors.username?.message}
                />
              )}
              name="username"
              control={control}
              rules={{ required: "required *" }}
            />
            <Controller
              render={({ field }) => (
                <PasswordInput
                  {...field}
                  label="Password"
                  size="md"
                  placeholder="Enter password"
                  className="w-full"
                  error={errors.password?.message}
                />
              )}
              name="password"
              control={control}
              rules={{ required: "required *" }}
            />
            {/* <div className=" flex w-full  justify-between items-center pt-4">
              <Checkbox
                label="Remember me"
                size="xs"
                checked={checked}
                onChange={(e) => setChecked(e.currentTarget.checked)}
              />
              <div className="text-xs cursor-pointer text-secondary underline">
                Forgot Password?
              </div>
            </div> */}
            <Button
              type="submit"
              loading={loading}
              size="md"
              className="my-5 w-full"
            >
              Login
            </Button>
          </Group>
        </form>
      </div>
    </div>
  );
};

export default Login;
