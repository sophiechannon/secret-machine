import { FC } from "react";
import { Form, FormValues } from "./Form";

export type FormWrapperProps = {
  isNameForm?: boolean;
  submitForm: (name: FormValues | boolean) => void;
  isEntering?: boolean;
  isStartOver?: boolean;
  isLocked?: boolean;
  name?: string;
  secret?: string;
};

export const FormWrapper: FC<FormWrapperProps> = ({
  isNameForm,
  submitForm,
  isEntering,
  isStartOver,
  isLocked,
  name,
  secret,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-2xl border shadow-x1 p-10 max-w-lg">
        <div className="flex flex-col items-center space-y-4">
          {isEntering ? (
            <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">
              Tell me your {isNameForm ? "name" : "secrets"}
            </h1>
          ) : (
            <>
              <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">
                {!isStartOver
                  ? `${name}, your secret is...`
                  : isLocked
                  ? `Your secret is safe with us, ${name}!`
                  : "Okay, no probs."}
              </h1>
              <h2>{secret}</h2>
              <h3>
                {!isStartOver
                  ? "Are you ready to lock it away?"
                  : "Do you have more secrets?"}
              </h3>
            </>
          )}
          <Form
            isNameForm={isNameForm}
            submitForm={submitForm}
            isEntering={isEntering}
            isStartOver={isStartOver}
          />
        </div>
      </div>
    </div>
  );
};
