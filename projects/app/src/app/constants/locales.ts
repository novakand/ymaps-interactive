// src/app/constants/locales.ts
import en from 'primelocale/en.json';
import it from 'primelocale/it.json';
import ru from 'primelocale/ru.json';
import ar from 'primelocale/ar.json';
import fr from 'primelocale/fr.json';
import de from 'primelocale/de.json';
import ja from 'primelocale/ja.json';
import ko from 'primelocale/ko.json';
import pt from 'primelocale/pt.json';
import es from 'primelocale/es.json';
import vi from 'primelocale/vi.json';
import tr from 'primelocale/tr.json';
// китайские локали как JSON
import zhCNjson  from 'primelocale/zh-CN.json';
import zhTWjson  from 'primelocale/zh-TW.json';

function unwrap<T>(mod: any, key: string): T {
  return (mod[key] as T) ?? (mod.default as T) ?? mod;
}

export const LOCALES: Record<string, any> = {
  en:    unwrap(en,    'en'),
  ru:    unwrap(ru,    'ru'),
  ar:    unwrap(ar,    'ar'),
  fr:    unwrap(fr,    'fr'),
  de:    unwrap(de,    'de'),
  it:    unwrap(it,    'it'),
  ja:    unwrap(ja,    'ja'),
  ko:    unwrap(ko,    'ko'),
  pt:    unwrap(pt,    'pt'),
  es:    unwrap(es,    'es'),
  vi:    unwrap(vi,    'vi'),
  tr:    unwrap(tr,    'tr'),
  'zh-Hans': unwrap(zhCNjson, 'zh-CN'),
  'zh-Hant': unwrap(zhTWjson, 'zh-TW')
};
