import { useState, FormEvent } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { initialState, flats, rooms } from "@/utils/HouseConstants";
import Combobox from "./Combobox";

interface FilterFormProps {
  onFilter: (filters: {
    location: string;
    flat: string;
    minMetrics: string;
    maxMetrics: string;
    rooms: string;
  }) => void;
}

const FilterForm = ({ onFilter }: FilterFormProps) => {
  const [filters, setFilters] = useState(initialState);
  const [resetCombobox, setResetCombobox] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleReset = () => {
    setFilters(initialState);
    setResetCombobox(true);
    setTimeout(() => setResetCombobox(false), 0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center gap-10 mt-8 items-end flex-wrap"
    >
      <div className="flex flex-col">
        <label>
          <p className="text-xl font-medium">Lokalizacja:</p>
          <Combobox onSelectChange={handleSelectChange} reset={resetCombobox} />
        </label>
      </div>
      <div className="flex flex-col">
        <label>
          <p className="text-xl font-medium">Ilość pięter:</p>
          <Select
            name="flat"
            value={filters.flat}
            onValueChange={(value) => handleSelectChange("flat", value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Wybierz z listy" />
            </SelectTrigger>
            <SelectContent>
              {flats.map((item) => (
                <SelectItem key={item.flat} value={item.flat}>
                  {item.flat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </label>
      </div>
      <div className="flex flex-col">
        <label>
          <p className="text-xl font-medium">
            Pow. m<sup>2</sup>:
          </p>
          <div className="flex gap-4">
            <input
              type="number"
              min={0}
              max={1000}
              name="minMetrics"
              value={filters.minMetrics}
              onChange={handleChange}
              className="w-[100px] py-2 px-3 border rounded-lg"
              placeholder="Od"
            />
            <input
              type="number"
              min={0}
              max={1000}
              name="maxMetrics"
              value={filters.maxMetrics}
              onChange={handleChange}
              className="w-[100px] py-2 px-3 border rounded-lg"
              placeholder="Do"
            />
          </div>
        </label>
      </div>
      <div className="flex flex-col">
        <label>
          <p className="text-xl font-medium">Liczba pokoi:</p>
          <Select
            name="rooms"
            value={filters.rooms}
            onValueChange={(value) => handleSelectChange("rooms", value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Wybierz z listy" />
            </SelectTrigger>
            <SelectContent>
              {rooms.map((item) => (
                <SelectItem key={item.room} value={item.room}>
                  {item.room}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </label>
      </div>
      <div className="flex gap-4 -mt-4">
        <Button variant="outline" type="submit">
          Zastosuj
        </Button>
        <Button variant="destructive" type="submit" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default FilterForm;
