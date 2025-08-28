import React, { createContext, useContext, useEffect, useState } from 'react'

const githubContext = createContext()

function GithubProvider({ children }) {
    const [displayAll, setDisplayAll] = useState(false)
    function handleDisplay() {
        setDisplayAll(displayAll => !displayAll)
    }
    const [query, setQuery] = useState("github")
    const [userData, setUserData] = useState({})
    const [repos, setRepos] = useState([])
    function handleQuery(e) {
        setQuery(e.target.value)
    }

    const filteredRepos = displayAll ? repos : repos.slice(0,4)

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

    useEffect(() => {
        async function fetchRepos() {
            try {
                const response = await fetch(`https://api.github.com/users/${query}/repos`)
                if (!response.ok) throw new Error("failed to fetch repos")
                const data = await response.json()
                console.log(data);
                setRepos(data)

            } catch (error) {
                console.error("failed to fecth repos", error);

            }
        }
        fetchRepos()

    }, [query])
    return (
        <githubContext.Provider value={{ handleQuery, query, userData, handleDisplay, displayAll, filteredRepos }}>{children}</githubContext.Provider>
    )
}

function useGithubContext() {
    const context = useContext(githubContext)
    if (context === undefined) throw new Error("github context was used outside of its provider")

    return context
}

export { GithubProvider, useGithubContext }