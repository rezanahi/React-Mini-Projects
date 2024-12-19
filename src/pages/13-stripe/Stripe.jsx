import './Stripe.css'
import StripeNavbar from "../../components/StripeNavbar/StripeNavbar";
import StripeSubmenu from "../../components/StripeSubmenu/StripeSubmenu";
import StripeHero from "../../components/StripeHero/StripeHero";
import StripeSidebar from "../../components/StripeSidebar/StripeSidebar";
import {StripeAppContext} from "./context";
import {useState} from "react";


function Stripe () {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [location, setLocation] = useState({})

    function openSidebar () {
        setIsSidebarOpen(true);
    }

    function closeSidebar () {
        setIsSidebarOpen(false)
    }

    function openModal (page, coordinates) {
        setIsModalOpen(true)
        setLocation(coordinates)

    }

    function closeModal () {
        setIsModalOpen(false)
    }

    return(
        <>
            <StripeAppContext.Provider
                value={{isSidebarOpen, isModalOpen, location, openModal, closeModal, openSidebar, closeSidebar}}>
                <StripeNavbar></StripeNavbar>
                <StripeSidebar></StripeSidebar>
                <StripeHero></StripeHero>
                <StripeSubmenu></StripeSubmenu>
            </StripeAppContext.Provider>
        </>
    )
}

export default Stripe