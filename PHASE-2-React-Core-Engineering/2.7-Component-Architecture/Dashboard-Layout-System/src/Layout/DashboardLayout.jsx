import TopBar from "./TopBar";
import Sidebar from "./Sidebar";

function DashboardLayout ({children}){
    return (
        <>
        <TopBar />
        <div className="container">
        <Sidebar />
        <div>{children}</div>
        </div>
        
        </>
    )
}
export default DashboardLayout;