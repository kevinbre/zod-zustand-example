import { Control, FieldValue, useController } from "react-hook-form";

interface Props {
  name: string;
  control: Control<FieldValue<any>>;
  label: string;
}

export function Input({ name, control, label }: Props) {
  const { field, fieldState } = useController({ name: name, control });
  return (
    <label className="flex flex-col text-white">
      <span>{label}</span>
      <input {...field} name={name} className="text-black" />
      <h2 className="text-red-500 text-xs">{fieldState.error?.message}</h2>
    </label>
  );
}
