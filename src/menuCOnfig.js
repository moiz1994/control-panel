import {
  FaTachometerAlt,
  FaChartBar,
  FaUsers,
  FaCogs,
  FaFileAlt,
} from "react-icons/fa";

const menuConfig = [
  {
    label: "Dashboard",
    path: "/",
    icon: FaTachometerAlt,
  },
  {
    label: "BOD Report",
    icon: FaChartBar,
    children: [
      { label: "BOD Data", path: "/bod/data" },
      { label: "Report Builder", path: "/bod/report-builder" },
      { label: "Sales Comparison", path: "/bod/sales-comparison" },
      { label: "OS Report Builder", path: "/bod/os-report-builder" },
      { label: "OS Sales Comparison", path: "/bod/os-sales-comparison" },
    ],
  },
  {
    label: "BI Report",
    icon: FaFileAlt,
    children: [
      { label: "Main Menu", path: "/bi/main" },
      { label: "Report Links", path: "/bi/report-links" },
      { label: "User Roles", path: "/bi/user-roles" },
      { label: "Users", path: "/bi/users" },
      { label: "Transfer Roles", path: "/bi/transfer-roles" },
      { label: "Upload Report", path: "/bi/upload" },
    ],
  },
  {
    label: "HR",
    icon: FaUsers,
    children: [
      { label: "Job Posting", path: "/hr/job-posting" },
      { label: "CV / Resume", path: "/hr/cv" },
      { label: "Requisition", path: "/hr/requisition" },
      { label: "Interview Report", path: "/hr/interview" },
    ],
  },
  {
    label: "Application Logs",
    path: "/logs",
    icon: FaCogs,
  },
];

export default menuConfig;
