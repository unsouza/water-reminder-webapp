interface OptionsProperty {
    label: string,
    value: number
}

type RadioListProps = {
    name: string;
    options: OptionsProperty[];
    selected: number | null;
    onChange: (option: OptionsProperty) => void;
};

export default function RadioList({ name, options, selected, onChange }: RadioListProps) {
    return <div className="flex flex-col gap-2">
        {options.map((option) => (
            <label
                key={option.value}
                className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition
            ${selected === option.value ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}
            hover:border-blue-400`}
            >
                <input
                    type="radio"
                    name={name}
                    value={option.value}
                    checked={selected === option.value}
                    onChange={() => onChange(option)}
                    className="form-radio text-blue-600"
                />
                <span className="text-gray-800">{option.label}</span>
            </label>
        ))}
    </div>
}
