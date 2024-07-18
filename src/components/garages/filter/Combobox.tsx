import React, { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cities } from "@/utils/FlatsConstants";

const Combobox = ({ onSelectChange, reset }: any) => {
  const [open, setOpen] = useState(false);
  const [cityValue, setCityValue] = useState("");

  const handleSelect = (currentValue: any) => {
    const newValue = currentValue === cityValue ? "" : currentValue;
    setCityValue(newValue);
    onSelectChange("location", newValue);
    setOpen(false);
  };

  useEffect(() => {
    reset && setCityValue("");
  }, [reset]);

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between font-normal"
          >
            {cityValue
              ? cities.find((city) => city.value === cityValue)?.label
              : "Wybierz miasto..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Wyszukaj miasto..." />
            <CommandList>
              <CommandEmpty>Nie znaleziono miasta.</CommandEmpty>
              <CommandGroup>
                {cities.map((city) => (
                  <CommandItem
                    key={city.value}
                    value={city.value}
                    onSelect={handleSelect}
                  >
                    <Check
                      className={`mr-2 h-4 w-4 ${
                        cityValue === city.value ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {city.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Combobox;
