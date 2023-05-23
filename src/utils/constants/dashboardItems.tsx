import {
  IconBook,
  IconDashboard,
  IconPackage,
  IconPencil,
  IconReportMoney,
  IconStar,
  IconClock2,
} from "@tabler/icons";

export const adminDashboardItems = [
  {
    icon: <IconDashboard />,
    name: "Dashboard",
    path: "/dashboard",
  },

  {
    icon: <IconPackage />,
    name: "Tours",
    path: "/dashboard/tour",
  },

  {
    icon: <IconBook />,
    name: "Bookings",
    path: "/dashboard/booking",
  },

  {
    icon: <IconClock2 />,
    name: "Schedule Tours",
    path: "/dashboard/scheduleTour",
  },

  {
    icon: <IconReportMoney />,
    name: "Payments",
    path: "/dashboard/payment",
  },

  {
    icon: <IconPencil />,
    name: "Blogs",
    path: "/dashboard/blog",
  },

  {
    icon: <IconStar />,
    name: "Reviews",
    path: "/dashboard/review",
  },
];
