"use client";

import React from "react";

import { Select, SelectItem } from "@nextui-org/react";
import { states } from "@/static";

export default function SelectLocationComponent() {
  const [value, setValue] = React.useState<any>(new Set([states[0].name]));
  return (
    <>
      <Select
        radius="full"
        disallowEmptySelection
        items={states}
        className="rounded-full h-full"
        selectedKeys={value}
        defaultSelectedKeys={[states[0].name]}
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
