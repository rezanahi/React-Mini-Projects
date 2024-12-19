import './SideBarProject.css'
import SideBarProjectHome from "../../components/SideBarProjectHome/SideBarProjectHome";
import Modal from "../../components/Modal/Modal";
import SideBar from "../../components/SideBar/SideBar";
import {AppContext} from "./context";
import {useState} from "react";

function SideBarProject() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSideBar = () => {
        setIsSidebarOpen(true);
    }

    const closeSideBar = () => {
        setIsSidebarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return(
        <>
            <AppContext.Provider value={{isModalOpen, isSidebarOpen, openSideBar, closeSideBar, openModal, closeModal}}>
                <SideBarProjectHome></SideBarProjectHome>
                <Modal></Modal>
                <SideBar></SideBar>
            </AppContext.Provider>
        </>
    )
}

export default SideBarProject