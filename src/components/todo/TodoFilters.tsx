import { Button } from "@/components/ui/button";

type FilterType = "all" | "active" | "completed";

interface TodoFiltersProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const TodoFilters = ({ currentFilter, onFilterChange }: TodoFiltersProps) => {
  const filters: { value: FilterType; label: string }[] = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <div className="flex gap-2">
      {filters.map(({ value, label }) => (
        <Button
          key={value}
          size="sm"
          variant={currentFilter === value ? "default" : "outline"}
          onClick={() => onFilterChange(value)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};