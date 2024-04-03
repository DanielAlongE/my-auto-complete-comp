import React, { useCallback, useState } from "react";

import AutoCompleteSelect, { IOption, ValueType } from "./AutoCompleteSelect";

const sleep = (delay: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, delay)
  );

export default function AsyncAutoCompleteSelect() {
  const [selected, setSelected] = useState<ValueType>([]);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<IOption[]>([]);

  const handleSelected = useCallback(
    (values: ValueType) => {
      setSelected(values);
    },
    [setSelected]
  );

  const handleSearch = useCallback(async (search: string) => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();

      const newOptions = (json as { username: string; name: string }[])
        .map(({ username, name }) => ({ label: name, value: username }))
        .filter(({ label }) =>
          label.toLowerCase().includes(search.toLowerCase())
        );

      await sleep(2000);

      setOptions(newOptions);
    } catch (error) {
      // TODO show error message
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <AutoCompleteSelect
      placeholder="Search to choose a buddy"
      loading={loading}
      options={options}
      onSelect={handleSelected}
      onSearch={handleSearch}
      skipFilter
    />
  );
}
