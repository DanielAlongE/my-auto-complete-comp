import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  SyntheticEvent,
} from "react";

import useDebounceState from "../../hooks/useDebounceState";

import AutoCompleteSelectList, {
  IOption,
  ValueType,
} from "./AutoCompleteSelectList";

export type { IOption, ValueType };

interface Props {
  id?: string;
  defaultSelected?: ValueType;
  label?: string;
  loading?: boolean;
  options: IOption[];
  placeholder?: string;
  onSearch?: (search: string) => void;
  onSelect: (v: ValueType) => void;
  multi?: boolean;
  skipFilter?: boolean;
}

export default function AutoCompleteSelect({
  id = "my-auto-complete",
  defaultSelected,
  label,
  loading,
  options,
  placeholder,
  onSearch,
  onSelect,
  multi,
  skipFilter,
}: Props) {
  const [search, setSearch] = useDebounceState("");
  const [selected, setSelected] = useState<ValueType>(
    defaultSelected || multi ? [] : ""
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (onSearch) {
      onSearch(search);
    }
  }, [search, onSearch]);

  const multiTags = useMemo(() => {
    if (Array.isArray(selected)) {
      return options.filter(({ value }) => selected.includes(value));
    }

    return [];
  }, [options, selected]);

  const setInputFocus = () => inputRef.current!.focus();

  const handleSetSelected = (selection: ValueType) => {
    setSelected(selection);
    if (onSelect) {
      onSelect(selection);
    }
  };

  const handleDeleteTags = React.useCallback(
    (value: string) => {
      if (Array.isArray(selected)) {
        handleSetSelected(selected.filter((v) => v !== value));
        setInputFocus();
      }
    },
    [selected, handleSetSelected]
  );

  const handleSelection = React.useCallback(
    ({ label, value }: IOption) => {
      if (Array.isArray(selected)) {
        const hasSelection = selected.includes(value);
        handleSetSelected(
          hasSelection
            ? selected.filter((v) => v !== value)
            : [...selected, value]
        );
      } else {
        const clearSelection = selected === value;
        handleSetSelected(clearSelection ? "" : value);
        inputRef.current!.value = clearSelection ? "" : label;
      }
      setInputFocus();
    },
    [selected, setSearch, handleSetSelected]
  );

  return (
    <div className="my-autocomplete-box">
      {label && (
        <div>
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div className="my-autocomplete-wrapper">
        {multiTags.map(({ label, value }) => (
          <button
            className="my-autocomplete-tag"
            key={`tag-${value}`}
            onClick={() => handleDeleteTags(value)}
          >
            {label}
          </button>
        ))}
        <input
          id={id}
          ref={inputRef}
          type="text"
          autoComplete="off"
          onChange={(e: SyntheticEvent) => {
            const inputValue = (e!.target as HTMLInputElement)!.value;
            setSearch(inputValue);
          }}
          placeholder={placeholder}
        />
        <AutoCompleteSelectList
          loading={loading}
          options={options}
          onSelect={handleSelection}
          selected={selected}
          search={search}
          skipFilter={skipFilter}
        />
      </div>
    </div>
  );
}
