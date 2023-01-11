import { FC, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export type FormValues = {
  name?: string;
  secret?: string;
};

export type FormProps = {
  isNameForm?: boolean;
  submitForm: (data: FormValues | boolean) => void;
  isEntering?: boolean;
  isStartOver?: boolean;
};

export const Form: FC<FormProps> = ({
  isNameForm,
  submitForm,
  isEntering,
  isStartOver,
}) => {
  const [formData, setFormData] = useState<FormValues | undefined>(undefined);
  const { register, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: { name: "", secret: "" },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => setFormData(data);

  useEffect(() => {
    if (!formData) return;
    console.log(formData);
    submitForm(formData);
  }, [formData]);

  return (
    <>
      {isEntering ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border-2 rounded-lg w-full h-12 px-4"
            {...register(`${isNameForm ? "name" : "secret"}`)}
          />
          <input
            type="submit"
            value="Go"
            className="bg-red-400 text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full"
          />
        </form>
      ) : (
        <form>
          <input
            onClick={(e) => {
              submitForm(true);
            }}
            type="submit"
            value="Yes!"
            className="bg-red-400 text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full"
          />
          {!isStartOver && (
            <input
              onClick={(e) => {
                submitForm(false);
              }}
              type="submit"
              value="Nah"
              className="bg-red-400 text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full"
            />
          )}
        </form>
      )}
    </>
  );
};
