import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TimeFrameSelector() {
  const [selectedValue, setSelectedValue] = useState("today 12-m");
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <div>
      <Select value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
        <SelectTrigger
          style={{
            width: "150px",
            borderRadius: "0.5rem",
            fontFamily: "Poppins",
            padding: "5px",
            fontSize: "12px",
          }}
          id="time-frame-select-trigger"
        >
          <SelectValue placeholder="Select a time frame" />
        </SelectTrigger>
        <SelectContent
          style={{
            borderRadius: "0.75rem",
            fontFamily: "Poppins",
            width: "150px",
          }}
        >
          <SelectGroup>
            <SelectItem
              style={{ borderRadius: "0.5rem", fontSize: "12px" }}
              value="now 1-H"
            >
              Past hour
            </SelectItem>
            <SelectItem
              style={{ borderRadius: "0.5rem", fontSize: "12px" }}
              value="now 1-d"
            >
              Past day
            </SelectItem>
            <SelectItem
              style={{ borderRadius: "0.5rem", fontSize: "12px" }}
              value="now 7-d"
            >
              Past 7 days
            </SelectItem>
            <SelectItem
              style={{ borderRadius: "0.5rem", fontSize: "12px" }}
              value="today 1-m"
            >
              Past 30 days
            </SelectItem>
            <SelectItem
              style={{ borderRadius: "0.5rem", fontSize: "12px" }}
              value="today 3-m"
            >
              Past 90 days
            </SelectItem>
            <SelectItem
              style={{ borderRadius: "0.5rem", fontSize: "12px" }}
              value="today 12-m"
            >
              Past 12 months
            </SelectItem>
            <SelectItem
              style={{ borderRadius: "0.5rem", fontSize: "12px" }}
              value="today 5-y"
            >
              Past 5 years
            </SelectItem>
            <SelectItem
              style={{ borderRadius: "0.5rem", fontSize: "12px" }}
              value={`2004-01-01 ${currentDate}`}
            >
              2004 - present
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* Hidden input field */}
      <input type="hidden" id="time-frame" value={selectedValue} />
    </div>
  );
}
