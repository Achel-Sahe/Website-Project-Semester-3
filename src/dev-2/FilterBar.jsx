import FilterChip from "./FilterChip";


export default function FilterBar({ options, value, onChange, className = "" }) {
  return (
    <div className={`filter-bar ${className}`}>
      {options.map((opt) => (
        <FilterChip
          key={opt.id}
          label={opt.label}
          active={value === opt.id}
          onClick={() => onChange(opt.id)}
        />
      ))}
    </div>
  );
}