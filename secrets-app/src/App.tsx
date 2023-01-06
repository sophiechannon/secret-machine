import { useState } from "react";
import "./App.css";
import { Form, FormValues } from "./components/Form";

export const App = () => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [secret, setSecret] = useState<string | undefined>(undefined);

  const submitNameForm = (data: FormValues) => {
    setName(data.name);
  };

  const submitSecretForm = (data: FormValues) => {
    setName(data.secret);
  };

  return (
    <div className="App">
      {!name ? (
        <Form isNameForm={true} submitForm={submitNameForm} />
      ) : (
        <Form submitForm={submitSecretForm} />
      )}
    </div>
  );
};
