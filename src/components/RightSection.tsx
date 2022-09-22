import React, { useState } from "react";
import { useToast } from "../hooks/useToast";
import { Button } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

export const RightSection = () => {
  const { pushError, pushSuccess } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleScheduleEvent = () => {
    if (!name.trim()) {
      pushError("Please enter name");
    } else if (
      !email.trim() ||
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email) === false
    ) {
      pushError("Please enter email");
    } else {
      pushSuccess(
        `Name: ${name},
        Email: ${email} ${
          additionalInfo &&
          `, 
        Addditional Info: ${additionalInfo}       
        `
        } `
      );
    }
  };

  return (
    <section className="w-full max-w-lg p-6 text-gray-900 mb-2">
      <h5 className=" text-xl mb-2 font-bold">Enter Details</h5>
      <Input
        controlId="name"
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Name"
        containerClass="mb-4"
      />
      <Input
        controlId="email"
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        containerClass="mb-2"
      />
      <Button className="mb-4">Add Guests</Button>
      <TextArea
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
        label="Please share anything that will help prepare for our meeting."
        controlId="additional-info"
        containerClass="mb-12"
      />
      <Button fill onClick={handleScheduleEvent}>
        Schedule Event
      </Button>
    </section>
  );
};
