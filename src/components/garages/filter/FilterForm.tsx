import { useState, FormEvent } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { initialState, lots } from "@/utils/GarageConstants";
import Combobox from "./Combobox";

interface FilterFormProps {
  onFilter: (filters: { location: string; lot: string }) => void;
}

const FilterForm = ({ onFilter }: FilterFormProps) => {
  const [filters, setFilters] = useState(initialState);
  const [resetCombobox, setResetCombobox] = useState(false);

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
          <p className="text-xl font-medium">Miejsca parkingowe:</p>
          <Select
            name="lot"
            value={filters.lot}
            onValueChange={(value) => handleSelectChange("lot", value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Wybierz z listy" />
            </SelectTrigger>
            <SelectContent>
              {lots.map((item) => (
                <SelectItem key={item.lot} value={item.lot}>
                  {item.lot}
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
