import { useState } from "react";
import "./App.css";
import { Form, FormValues } from "./components/Form";
import { Thanks } from "./components/Thanks";

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

  return (
    <div className="App">
      {!secret && (
        <div className="form-section">
          {!name ? (
            <Form
              isNameForm={true}
              isEntering={true}
              submitForm={submitNameForm}
            />
          ) : (
            <Form isEntering={true} submitForm={submitSecretForm} />
          )}
        </div>
      )}

      <div className="confirmation">
        {name && secret && answer == undefined && (
          <Form name={name} secret={secret} submitForm={submitLockForm} />
        )}
      </div>
      <div className="thanks-section">
        {answer !== undefined && name && (
          <Thanks name={name} isLocked={!!answer} />
        )}
      </div>
    </div>
  );
};
