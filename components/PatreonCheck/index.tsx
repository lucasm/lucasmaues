import { useEffect, useState } from 'react'
import Styles from './PatreonCheck.module.css'

const PatreonCheck = () => {
  const [allTiersFull, setAllTiersFull] = useState<boolean | null>(null)

  useEffect(() => {
    // Função para fazer a requisição ao endpoint
    const checkPatreonTiers = async () => {
      try {
        const response = await fetch('/api/patreonCheck?limit=true')
        const data = await response.json()

        // Verificar se o campo allTiersFull está presente e atualizar o estado
        if (data.allTiersFull !== undefined) {
          setAllTiersFull(data.allTiersFull)
        }
      } catch (error) {
        console.error('Error fetching Patreon tiers status:', error)
        setAllTiersFull(null) // Caso de erro, pode-se tratar como "não esgotado"
      }
    }

    checkPatreonTiers()
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

export default PatreonCheck
