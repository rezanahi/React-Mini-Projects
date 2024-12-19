import './SideBarProject.css'
import SideBarProjectHome from "../../components/SideBarProjectHome/SideBarProjectHome";
import Modal from "../../components/Modal/Modal";
import SideBar from "../../components/SideBar/SideBar";


function SideBarProject() {



    return(
        <>
            <SideBarProjectHome></SideBarProjectHome>
            <Modal></Modal>
            <SideBar></SideBar>
        </>
    )
}

export default SideBarProject