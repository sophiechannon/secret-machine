import { useState } from "react";
import "./App.css";
import { FormValues } from "./components/Form";
import { FormWrapper } from "./components/FormWrapper";

export const App = () => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [secret, setSecret] = useState<string | undefined>(undefined);
  const [answer, setAnswer] = useState<boolean | undefined>(undefined);

  const submitNameForm = (data: FormValues | boolean) => {
    if (typeof data === "boolean") return;
    setName(data.name);
  };

  const submitSecretForm = (data: FormValues | boolean) => {
    if (typeof data === "boolean") return;
    setSecret(data.secret);
  };

  const submitLockForm = (data: FormValues | boolean) => {
    if (typeof data === "boolean") {
      setAnswer(data);
    }
  };

  const startOver = (data: FormValues | boolean) => {
    if (typeof data === "boolean") {
      setName(undefined);
      setSecret(undefined);
      setAnswer(undefined);
    }
  };

  return (
    <div className="App">
      {!secret && (
        <div className="form-section">
          {!name ? (
            <FormWrapper
              isNameForm={true}
              isEntering={true}
              submitForm={submitNameForm}
            />
          ) : (
            <FormWrapper isEntering={true} submitForm={submitSecretForm} />
          )}
        </div>
      )}
      <div className="confirmation">
        {name && secret && answer == undefined && (
          <FormWrapper
            name={name}
            secret={secret}
            submitForm={submitLockForm}
          />
        )}
      </div>
      <div className="thanks-section">
        {answer !== undefined && name && (
          <FormWrapper
            submitForm={startOver}
            isStartOver={true}
            isLocked={!!answer}
            name={name}
          ></FormWrapper>
        )}
      </div>
    </div>
  );
};
