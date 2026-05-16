import { AlertCircleIcon, CalendarIcon, ClockIcon } from "lucide-react";
import React from "react";

const AttendanceStats = ({ history }) => {
  const totalPresent = history.filter(
    (h) => (h.status === "PRESENT") | (h.status === "LATE"),
  ).length;
  const totalLate = history.filter((h) => h.status === "LATE").length;
  const stats = [
    { label: "Days Present", value: totalPresent, icon: CalendarIcon },
    { label: "Late Arrivals", value: totalLate, icon: AlertCircleIcon },
    { label: "Avg. Work Hrs", value: "8.5 Hrs", icon: ClockIcon },
  ];

  return (
    <div className="grid gird-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
      {stats.map((s) => (
        <div
          key={s.label}
          className="card card-hover p-5 sm:p-6 flex items-center gap-4 relative orverflow-hidden group"
        ></div>
      ))}
    </div>
  );
};

export default AttendanceStats;
