import { twMerge } from "tailwind-merge";

interface InputProps {
    type?: string;
    placeholder?: string;
    defaultValue?: string;
    className?: string;
    onChangeText: (text: string) => void;
    disabled?: boolean;
}

const Input = ({ type = "text", disabled = false, placeholder = "", defaultValue = '', onChangeText, className = "" }: InputProps) => {
    let disabledCls = disabled ? 'text-gray-400 cursor-not-allowed' : '';
    return <input
        type={type}
        disabled={disabled}
        className={twMerge('bg-slate-100 py-2 px-2 border rounded-md focus:outline-none ring-gray-300 focus:ring-1 focus:border-gray-300', className, disabledCls)}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={({ currentTarget }: React.FormEvent<HTMLInputElement>) => onChangeText(currentTarget.value)}
    />
}

export default Input;