import { FaArrowDown, FaSearch } from 'react-icons/fa';

type TProps = {
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  value: { search: string; region: string };
  options: { text: string; value: string }[];
};

export default function Filters({ handleInputChange, value, options }: TProps) {
  return (
    <div className="py-12">
      <div className="md:flex items-center justify-between">
        <div className="mb-12 md:mb-0">
          <div className="relative">
            <FaSearch className="absolute top-1/2 transform -translate-y-1/2  ml-4 pointer-events-none text-light-mode-input dark:text-white" />
            <input
              type="text"
              id="search"
              placeholder="Search for a country..."
              className="dark:bg-dark-mode-el placeholder:dark:text-white placeholder:text-light-mode-input  placeholder:text-sm w-full md:w-96 pl-12 pr-2 py-4  rounded-lg"
              onChange={handleInputChange}
              value={value.search}
            />
          </div>
        </div>

        <div className="relative w-fit">
          <select
            aria-label="region"
            name="region"
            id="region"
            className="dark:bg-dark-mode-el placeholder:text-white placeholder:text-sm py-4 pl-6 pr-12 rounded-lg appearance-none"
            onChange={handleInputChange}
          >
            <option value="">Search by Region</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          <FaArrowDown className="absolute top-1/2 right-1 transform -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
