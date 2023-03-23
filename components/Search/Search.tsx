import React, { ChangeEvent, useCallback, useState, useTransition } from 'react'
import dynamic from 'next/dynamic'
import { FiExternalLink, FiFileText } from 'react-icons/fi'
import Link from '../Link'
import styles from './Search.module.css'

type Title = string
type ImgUrl = string
type SearchResult = [Title, ImgUrl][]

const isSameSite = (url: string) => url.startsWith('/')

const Search = dynamic({
  loader: async () => {
    const wasm = await import('wasm/fulltext-search/pkg')

    const search = (term: string): SearchResult => {
      return wasm.search(term, 5)
    }

    return function SearchComponent() {
      const [term, setTerm] = useState('')
      const [results, setResults] = useState<SearchResult>([])
      const [, startTransition] = useTransition()

      const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value)

        startTransition(() => {
          const pending = search(e.target.value)
          setResults(pending)
        })
      }, [])

      return (
        <div className={styles.wrapper}>
          <input
            value={term}
            onChange={onChange}
            placeholder="🔭 Type anything to search for articles..."
            className={styles.search}
            data-testid="search-input"
          />

          <div className={styles.result}>
            {!term && (
              <p className={styles.resultPlaceholder}>
                Search result will display here{' '}
                <span role="img" aria-label="Memo">
                  📝
                </span>
              </p>
            )}
            {term && (
              <p
                className={styles.resultTitle}
                data-testid="search-result-message"
              >
                {results.length === 0
                  ? 'No result yet 🤷'
                  : 'Search results ✨'}
              </p>
            )}

            {results.map(([title, url]) => (
              <div key={url} className={styles.list}>
                {isSameSite(url) ? <FiFileText /> : <FiExternalLink />}
                <Link
                  href={url}
                  className={styles.link}
                  data-testid="search-result-item"
                >
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
