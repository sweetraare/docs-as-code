'use client';

import { useState } from "react"
import { LanguageEnum } from "../utils/LanguageEnum";

type CodeGroupProps = {
  children: React.ReactNode[]
}

export function CodeGroup({ children }: CodeGroupProps) {

  const [selectedLanguage, setSelectedLanguage] = useState(LanguageEnum.haskell);

  const handleSelectLanguage = (language: LanguageEnum) => {
    setSelectedLanguage(language)
  }

  const selectedChildren = children?.filter?.(code => {
    return code?.props?.className === `language-${selectedLanguage}`
  })

  return <div>
    <div>
      {
        Object.values(LanguageEnum).map(language =>
          <button
            onClick={() => handleSelectLanguage(language)}
            className={`p-1 border mx-2 ${selectedLanguage === language && 'bg-blue-600'}`}
            key={language}>{language}</button>
        )
      }
    </div>
    {selectedChildren}
  </div >
}
