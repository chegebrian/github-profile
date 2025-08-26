import React, { createContext, useContext, useState } from 'react'

const githubContext = createContext()

function GithubProvider({ children }) {
    const [query, setQuery] = useState("")
    function handleQuery(e) {
        setQuery(e.target.value)

    }
    return (
        <githubContext.Provider value={{ handleQuery, query }}>{children}</githubContext.Provider>
    )
}

function useGithubContext() {
    const context = useContext(githubContext)
    if (context === undefined) throw new Error("github context was used outside of its provider")

    return context
}

export { GithubProvider, useGithubContext }