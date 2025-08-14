import { useEffect, useState, createContext, useContext } from "react";

type language = "EN" | "JP";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<language>("EN");

  const toggleLanguage = () => {
    if (language === "EN") {
      setLanguage("JP");
      window.localStorage.setItem("language", "JP");
      document.documentElement.classList.add("JP");
    } else {
      setLanguage("EN");
      window.localStorage.setItem("language", "EN");
      document.documentElement.classList.remove("JP");
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      "language"
    ) as language | null;

    if (localLanguage) {
      setLanguage(localLanguage);

      if (localLanguage === "JP") {
        document.documentElement.classList.add("JP");
      }
    } else if (window.matchMedia("(prefers-color-scheme: JP)").matches) {
      setLanguage("JP");
      document.documentElement.classList.add("JP");
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }

  return context;
}
