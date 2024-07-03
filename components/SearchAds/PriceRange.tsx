import { cn } from "@/lib/utils"
import { Slider } from "@nextui-org/react";
import { useEffect, useState } from "react";

type SliderProps = React.ComponentProps<typeof Slider>

interface PriceRangeProps {
  className: string,
  minPrice: number;
  maxPrice: number;
}

export default function PriceRange({ className, minPrice, maxPrice, ...props }: PriceRangeProps) {
  const [value, setValue] = useState<number[] | number>([minPrice, maxPrice])
  useEffect(() => {
    console.log(value)
  },[value])
  return (
    <Slider
    label="Select a budget"
    formatOptions={{style: "currency", currency: "USD"}}
    step={10}
    minValue={minPrice}
    maxValue={maxPrice}
      value={value} 
      onChange={(e: number | number[])=>setValue(e)}
    className="max-w-md"
  />
  )
}
