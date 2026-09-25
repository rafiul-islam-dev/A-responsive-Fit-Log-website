"use client";

interface SortDropdownProps {
    value: string;
    onChange: (value: string) => void;
}

const SortDropdown = ({
    value,
    onChange,
}: SortDropdownProps) => {
    return (
        <div className="flex items-center gap-2">
            <label
                htmlFor="sort"
                className="text-[9px] font-bold uppercase tracking-widest text-zinc-500"
            >
                Sort By
            </label>

            <select
                id="sort"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="rounded-md border border-zinc-800 bg-[#14161b] px-3 py-2 text-[10px] font-bold uppercase text-zinc-300 outline-none transition focus:border-lime-400"
            >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
            </select>
        </div>
    );
};

export default SortDropdown;