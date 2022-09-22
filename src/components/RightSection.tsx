import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

export const RightSection = () => {
  return (
    <section className="w-full max-w-lg p-6 text-gray-900 mb-2">
      <h5 className=" text-xl mb-2 font-bold">Enter Details</h5>
      <Input
        controlId="name"
        type="text"
        required
        label="Name"
        containerClass="mb-4"
      />
      <Input
        controlId="email"
        required
        type="email"
        label="Email"
        containerClass="mb-2"
      />
      <Button className="mb-4">Add Guests</Button>
      <TextArea
        label="Please share anything that will help prepare for our meeting."
        controlId="additional-info"
        containerClass="mb-12"
      />
      <Button fill>Schedule Event</Button>
    </section>
  );
};
