'use client'

import { JSX, useEffect, useState } from 'react'
import Styles from './PatreonCheck.module.css'

// Types
interface PatreonCheckResponse {
  allTiersFull?: boolean
}

export default function PatreonCheck(): JSX.Element {
  const [allTiersFull, setAllTiersFull] = useState<boolean | null>(null)

  useEffect(() => {
    const abortController = new AbortController()

    // Função para fazer a requisição ao endpoint
    const checkPatreonTiers = async (): Promise<void> => {
      try {
        const response = await fetch('/api/patreonCheck?limit=true', {
          signal: abortController.signal,
        })
        const data: PatreonCheckResponse = await response.json()

        // Verificar se o campo allTiersFull está presente e atualizar o estado
        if (data.allTiersFull !== undefined) {
          setAllTiersFull(data.allTiersFull)
        }
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Error fetching Patreon tiers status:', error)
          setAllTiersFull(null) // Caso de erro, pode-se tratar como "não esgotado"
        }
      }
    }

    checkPatreonTiers()

    return () => abortController.abort()
  }, [])

  // Renderiza "esgotado" caso allTiersFull seja true
  return (
    <>
      {allTiersFull ? (
        <span className={Styles.tag}>
          Vagas esgotadas! Aguarde a liberação de novas vagas!
        </span>
      ) : null}
    </>
  )
}
