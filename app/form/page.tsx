"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../components/input";
import { FormValues, formSchema } from "../schemas/form-schema";
import { useItemsStore } from "../store/items-store";

export default function Form() {
  const { users, addUser } = useItemsStore();

  const { handleSubmit, control, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: ""
    }
  });

  return (
    <>
      <title>Form view</title>

      <main className="flex min-h-screen flex-col items-center p-24 gap-6">
        <div className="text-white flex flex-col h-fit w-full">
          <h2 className="bg-purple-700 w-full px-2">Users</h2>
          <ul className=" text-black w-full">
            {users.map((user, index) => (
              <li
                key={index}
                className="odd:bg-gray-300 even:bg-gray-100 px-2 "
              >
                {user.firstName} {user.lastName}
              </li>
            ))}
          </ul>
        </div>
        <form
          className="flex flex-col gap-2 text-black"
          onSubmit={handleSubmit((data) => {
            addUser(data);
            reset();
          })}
        >
          <Input name="firstName" control={control} label="Name" />
          <Input name="lastName" control={control} label="Lastname" />

          <button className="px-2 py-1 bg-purple-700 text-white">Add user</button>
        </form>
      </main>
    </>
  );
}
