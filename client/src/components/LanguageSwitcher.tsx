import { useLanguage } from "@/contexts/LanguageContext";
import { LANGUAGES } from "@shared/constants";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === LANGUAGES.FR ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage(LANGUAGES.FR)}
        className="min-w-20"
      >
        🇫🇷 Français
      </Button>
      <Button
        variant={language === LANGUAGES.IT ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage(LANGUAGES.IT)}
        className="min-w-20"
      >
        🇮🇹 Italiano
      </Button>
    </div>
  );
}
