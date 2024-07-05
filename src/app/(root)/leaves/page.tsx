import React from "react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import AttendanceTable from "@/components/attendanceTable/AttendanceTable";

const Page = () => {
  return (
    <DefaultLayout heading={"Leaves"} description={"All Leaves"}>
      <AttendanceTable
        showAttendance={true}
        display={"hidden"}
        SearchBarDisplay={"flex"}
      />
    </DefaultLayout>
  );
};

export default Page;
