interface Props {
  type: string;
  name: string;
  placeholder: string;
  form: any;
  label: string;
}

const Input = ({ type, name, placeholder, label, form }: Props) => {
  return (
    <label htmlFor="" className="text-[#4A4A4A]">
      {label}
      <input
        {...form.register(name)}
        placeholder={placeholder}
        className="w-full mt-1.5 bg-white p-[13px_0px_10px_29px] focus:outline-none rounded-[10px] border border-[#B4B4BB]"
        type={type}
      />
    </label>
  );
};

export default Input;
