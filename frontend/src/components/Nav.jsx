import { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom"
import menuIcon from '../Assets/Images/hamburger.png'

const Nav = (props) => {
    const Navigate = useNavigate()

    const [sideNav, setSideNav] = useState(false)

    const handleAbout = () => {
        Navigate('/about')
    }

    const handleService = () => {
        Navigate('/services')
    }

    const handleSeekers = () => {
        Navigate('/jobseekers')
    }

    const handleHome = () => {
        Navigate('/')
    }

    const handleClient = () => {
        Navigate('/clients')
    }

    const handleContact = () => {
        Navigate('/contact')
    }

    const handleCloseNav = () => {
        setSideNav(false)
    }

    const handleOpenNav = () => {
        setSideNav(true)
    }
    return (
        <Fragment>
            <main className="w-[100%] shadow bg-gradient-to-r from-red-900 to-red-500 duration-500 text-white lg:px-24 p-5 lg:py-8 sticky top-0 z-20 flex items-center justify-between">
                <section className="flex flex-row items-center font-bold gap-2">
                    <h2 className="lg:text-4xl text-xl">JAISAI</h2>
                    <h2 className="lg:text-4xl text-xl">Academy</h2>
                </section>
                <section className="lg:flex hidden font-bold text-zinc-200 gap-10 cursor-pointer">
                    <p style={{ color: props.home ? 'white' : '', borderBottom: props.home?'3px solid white':''}} onClick={handleHome} className="hover:text-white">HOME</p>
                    <p style={{ color: props.course ? 'white' : '', borderBottom: props.course?'3px solid white':'' }} onClick={handleAbout} className="hover:text-white">ABOUT US</p>
                    <p style={{ color: props.client ? 'white' : '', borderBottom: props.client?'3px solid white':'' }} onClick={handleClient} className="hover:text-white">CLIENTS</p>
                    <p style={{ color: props.service ? 'white' : '', borderBottom: props.service?'3px solid white':'' }} onClick={handleService} className="hover:text-white">SERVICES</p>
                    <p style={{ color: props.seekers ? 'white' : '', borderBottom: props.seekers?'3px solid white':'' }} onClick={handleSeekers} className="hover:text-white">JOB SEEKERS</p>
                    <p style={{ color: props.contact ? 'white' : '', borderBottom: props.contact?'3px solid white':'' }} onClick={handleContact} className="hover:text-white">CONTACT US</p>
                </section>
                <section className="lg:hidden flex">
                    <img onClick={handleOpenNav} className="w-5" src={menuIcon} alt="menu" />
                </section>
            </main>
            <section style={{ right: sideNav ? '0' : '-75%' }} className="fixed w-[75%] bg-gradient-to-r from-gray-400 to-white duration-500 p-10 top-0 -right-[75%] z-30 h-[100%]">
                <div className="flex flex-col font-bold gap-10">
                    <p onClick={handleCloseNav} className="text-right mb-5 text-3xl">x</p>
                    <p style={{ color: props.home ? '#EC3A54' : '' }} onClick={handleHome} className="hover:text-[#EC3A54]">HOME</p>
                    <p style={{ color: props.course ? '#EC3A54' : '' }} onClick={handleAbout} className="hover:text-[#EC3A54]">ABOUT US</p>
                    <p style={{ color: props.client ? '#EC3A54' : '' }} onClick={handleClient} className="hover:text-[#EC3A54]">CLIENTS</p>
                    <p style={{ color: props.service ? '#EC3A54' : '' }} onClick={handleService} className="hover:text-[#EC3A54]">SERVICES</p>
                    <p style={{ color: props.seekers ? '#EC3A54' : '' }} onClick={handleSeekers} className="hover:text-[#EC3A54]">JOB SEEKERS</p>
                    <p style={{ color: props.contact ? '#EC3A54' : '' }} onClick={handleContact} className="hover:text-[#EC3A54]">CONTACT US</p>
                </div>
            </section>
        </Fragment>
    )
}

export default Nav