import React, { createContext, useContext, useEffect, useState } from 'react'

const githubContext = createContext()

function GithubProvider({ children }) {
    const [query, setQuery] = useState("github")
    const [userData, setUserData] = useState({})
    function handleQuery(e) {
        setQuery(e.target.value)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://api.github.com/users/${query}`)
                if (!response.ok) throw new Error("failed to fetch")
                const data = await response.json()
                console.log(data);
                setUserData(data)

            } catch (error) {
                console.error("failed to fecth data", error);

            }
        }
        fetchData()
    }, [query])
    return (
        <githubContext.Provider value={{ handleQuery, query, userData }}>{children}</githubContext.Provider>
    )
}

function useGithubContext() {
    const context = useContext(githubContext)
    if (context === undefined) throw new Error("github context was used outside of its provider")

    return context
}

export { GithubProvider, useGithubContext }