import DefaultLayout from "@/components/layouts/DefaultLayout";
import SettingOptions from "@/components/settingOptions/SettingOptions";
import React from "react";

const Page = () => {
  return (
    <DefaultLayout heading={"Settings"} description={"All System Settings"}>
      <SettingOptions />
    </DefaultLayout>
  );
};

export default Page;
