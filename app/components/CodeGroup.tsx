'use client'

import { useState, Children, ReactElement, isValidElement } from 'react'
import { LanguageEnum } from '../utils/LanguageEnum'

type CodeGroupProps = {
  children: React.ReactNode
}

export function CodeGroup({ children }: CodeGroupProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(LanguageEnum.haskell)

  const handleSelectLanguage = (language: LanguageEnum) => {
    setSelectedLanguage(language)
  }

  const childrenArray = Children.toArray(children)

  const selectedChildren = childrenArray.filter(
    (code): code is ReactElement => {
      if (!isValidElement(code)) return false

      const className = (code.props as { className: string }).className || ''
      return className === `language-${selectedLanguage}`
    }
  )

  return (
    <div>
      <div>
        {Object.values(LanguageEnum).map((language) => (
          <button
            onClick={() => handleSelectLanguage(language)}
            className={`rounded py-2 px-5 border mx-2 ${selectedLanguage === language && 'bg-blue-600'}`}
            key={language}
          >
            {language}
          </button>
        ))}
      </div>
      {selectedChildren}
    </div>
  )
}
