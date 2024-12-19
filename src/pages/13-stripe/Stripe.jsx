import './Stripe.css'
import StripeNavbar from "../../components/StripeNavbar/StripeNavbar";
import StripeSubmenu from "../../components/StripeSubmenu/StripeSubmenu";
import StripeHero from "../../components/StripeHero/StripeHero";
import StripeSidebar from "../../components/StripeSidebar/StripeSidebar";
import {StripeAppContext} from "../13-stripe/context";
import {useState} from "react";


function Stripe () {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(true);

    function openSidebar () {
        setIsSidebarOpen(true);
    }

    function closeSidebar () {
        setIsSidebarOpen(false)
    }

    function openModal () {
        setIsModalOpen(true)
    }

    function closeModal () {
        setIsModalOpen(false)
    }

    return(
        <>
            <StripeAppContext.Provider value={{isSidebarOpen, isModalOpen, openModal, closeModal, openSidebar, closeSidebar}}>
                <StripeNavbar></StripeNavbar>
                <StripeSidebar></StripeSidebar>
                <StripeHero></StripeHero>
                <StripeSubmenu></StripeSubmenu>
            </StripeAppContext.Provider>
        </>
    )
}

export default Stripe