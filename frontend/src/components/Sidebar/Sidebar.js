import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Products</li>
        <li>Orders</li>
        <li className="active">Categories</li>
        <li>Customers</li>
        <li>Coupons</li>
        <li>Reports</li>
        <li>Inbox</li>
        <li>Knowledge Base</li>
        <li>Product Updates</li>
        <li>Personal Settings</li>
        <li>Global Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
