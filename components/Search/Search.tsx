import React, { useState, useCallback, ChangeEvent, useTransition } from 'react'
import dynamic from 'next/dynamic'
import { FiExternalLink, FiFileText } from 'react-icons/fi'
import Link from '../Link'
import styles from './Search.module.css'

const isSameSite = (url: string) => url.startsWith('/')

const Search = dynamic({
  loader: async () => {
    const wasm = await import('../../wasm/fulltext-search/pkg')

    return function SearchComponent() {
      const [query, setQuery] = useState('')
      const [results, setResults] = useState<[string, string][]>([])
      const [, startTransition] = useTransition()

      const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        startTransition(() => {
          const pending = wasm.search(e.target.value, 5)
          setResults(pending)
        })
      }, [])

      return (
        <div className={styles.wrapper}>
          <input
            value={query}
            onChange={onChange}
            placeholder="🔭 Type anything to search for articles..."
            className={styles.search}
          />

          <div className={styles.result}>
            {query && (
              <p className={styles.resultTitle}>
                {results.length === 0
                  ? 'No result yet 🤷'
                  : 'Search results ✨'}
              </p>
            )}

            {results.map(([title, url]) => (
              <div key={url} className={styles.list}>
                {isSameSite(url) ? <FiFileText /> : <FiExternalLink />}
                <Link href={url} className={styles.link}>
                  {title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )
    }
  },
})

export default Search
