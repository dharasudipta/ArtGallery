import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'findLanguageFromKey',
})
export default class FindLanguageFromKeyPipe implements PipeTransform {
  private readonly languages: { [key: string]: { name: string; rtl?: boolean } } = {
    en: { name: 'English' },
    bn: { name: 'বাংলা' },
    cs: { name: 'Český' },
    nl: { name: 'Nederlands' },
    fr: { name: 'Français' },
    de: { name: 'Deutsch' },
    hi: { name: 'हिंदी' },
    pl: { name: 'Polski' },
    // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
  };

  transform(lang: string): string {
    return this.languages[lang].name;
  }
}
