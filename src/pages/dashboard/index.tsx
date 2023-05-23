import CommonHead from "@/components/common/CommonHead";
import AdminDashboardLayout from "@/layouts/AdminDashboardLayout";
import React from "react";

const AdminDashboard = () => {
  return (
    <>
      <CommonHead title={"Dashboard"} />

      <section>dashboard</section>
    </>
  );
};

AdminDashboard.Layout = AdminDashboardLayout;
export default AdminDashboard;
