"use client";

import React from "react";

import { Select, SelectItem } from "@nextui-org/react";
import { states } from "@/static";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SelectStateComponent() {
  const pathname = usePathname()
  const {replace} = useRouter()
  const searchParams = useSearchParams()
  const [value, setValue] = React.useState<any>([states[0].name]);
  React.useEffect(() => {
    const params = new URLSearchParams(searchParams)
    if (searchParams.has('states') === false) {
      params.set('states', states[0].name.toLowerCase())
    }
    replace(`${pathname}?${params.toString()}`)
  }, [searchParams, pathname, replace])
  return (
    <>
      <Select
        aria-label="Select a state"
        radius="full"
        disallowEmptySelection
        items={states}
        className="rounded-full h-full"
        selectedKeys={value}
        defaultSelectedKeys={[states[0].value]}
        selectionMode="single"
        onSelectionChange={setValue}>
        {(state) => (
          <SelectItem key={state.name} textValue={state.name}>
            {state.name}
          </SelectItem>
        )}
      </Select>
    </>
  );
}
