import React from 'react'
//components
import { NavbarRedux } from '../Components'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <>
            <NavbarRedux />
            <main>
                <Outlet />
            </main>
        </>
    )
}
