"use client"

import { createContext } from "react"
import { useState } from "react"

export const DrawerContext = createContext(null)

export default function DrawerContextProvider({ children }) {

    const [open, setOpen] = useState(false)

    return (
        <DrawerContext.Provider value={{ open, setOpen }}>
            {children}
        </DrawerContext.Provider>
    )
}