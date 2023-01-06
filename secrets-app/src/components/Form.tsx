import { FC, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export type FormValues = {
  name?: string;
  secret?: string;
};

export type FormProps = {
  isNameForm?: boolean;
  submitForm: (name: FormValues | boolean) => void;
  isEntering?: boolean;
  name?: string;
  secret?: string;
};

export const Form: FC<FormProps> = ({
  isNameForm,
  submitForm,
  isEntering,
  name,
  secret,
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
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-2xl border shadow-x1 p-10 max-w-lg">
        <div className="flex flex-col items-center space-y-4">
          {isEntering ? (
            <>
              <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">
                Tell me your {isNameForm ? "name" : "secrets"}
              </h1>
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
            </>
          ) : (
            <>
              <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">
                {name}, your secret is...
              </h1>
              <h2>{secret}</h2>
              <h3>Are you ready to lock it away?</h3>
              <form>
                <input
                  onClick={(e) => {
                    submitForm(true);
                  }}
                  type="submit"
                  value="Yes!"
                  className="bg-red-400 text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full"
                />
                <input
                  onClick={(e) => {
                    submitForm(false);
                  }}
                  type="submit"
                  value="Nah"
                  className="bg-red-400 text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full"
                />
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
