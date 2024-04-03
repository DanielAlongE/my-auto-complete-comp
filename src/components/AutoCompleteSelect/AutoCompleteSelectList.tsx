import React, { useMemo } from "react";

import TextHighlighter from "../TextHighlighter";

export interface IOption {
  label: string;
  value: string;
}

export type ValueType = string | string[];

interface Props {
  loading?: boolean;
  options: IOption[];
  search: string;
  selected: ValueType;
  onSelect: (obj: IOption) => void;
  skipFilter?: boolean;
}

export default function AutoCompleteSelect({
  loading,
  options,
  onSelect,
  search,
  selected,
  skipFilter,
}: Props) {
  const filteredOptions = useMemo(() => {
    if (!search || skipFilter) {
      return options;
    }

    return options.filter(({ label }) =>
      label.toLowerCase().includes(search.toLowerCase())
    );
  }, [options, search, skipFilter]);

  const isSelected = (value: string) => {
    if (Array.isArray(selected)) {
      return selected.includes(value);
    } else {
      return selected === value;
    }
  };

  const isEmpty = !filteredOptions.length;
  const showNoMatch = !loading && search && isEmpty;

  if (isEmpty && (!showNoMatch || !loading)) {
    return null;
  }

  return (
    <ul
      aria-orientation="vertical"
      className="my-autocomplete-list"
      role="listbox"
    >
      {filteredOptions.map(({ label, value }) => {
        const selected = isSelected(value);
        return (
          <li
            aria-selected={selected ? "true" : "false"}
            className={selected ? "selected" : ""}
            key={value}
            value={value}
            onClick={() => onSelect({ label, value })}
            role="option"
          >
            <TextHighlighter textContent={label} search={search} />
          </li>
        );
      })}
      {showNoMatch && <li className="empty">No match found!</li>}
      {loading && <li className="loading">Loading...</li>}
    </ul>
  );
}
