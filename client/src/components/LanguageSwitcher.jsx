import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;
  const isEnglish =
    currentLanguage === 'en' || currentLanguage.startsWith('en-');

  return (
    <div className="flex justify-end items-center py-3">
      {isEnglish ? (
        <button onClick={() => changeLanguage('es')} className="translateBtn">
          ES
        </button>
      ) : (
        <button onClick={() => changeLanguage('en')} className="translateBtn">
          EN
        </button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
