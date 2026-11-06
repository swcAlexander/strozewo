"use client";

import { useEffect, useRef, useState } from "react";

type Language = "pl" | "uk";

const polishToUkrainian: Record<string, string> = {
  "O nas": "Про нас", "Praca na plantacji": "Робота на плантації", Kontakt: "Контакти", "Zarezerwuj miejsce": "Забронювати місце",
  "NASZE MIEJSCE": "НАША ФЕРМА", "ROŚNIEMY RAZEM OD 2012": "РОСТЕМО РАЗОМ З 2012 РОКУ", "Mała wieś.": "Невелике село.", "Wielkie serce.": "Велике серце.",
  "100%": "100%", "rodzinnej": "родинної", "atmosfery": "атмосфери", "SEZON 2026 · STROŻEWO, POLSKA": "СЕЗОН 2026 · STROŻEWO, ПОЛЬЩА",
  "Dobra praca.": "Гарна робота.", "Smak lata.": "Смак літа.", "Dołącz do naszej malinowej rodziny. Pracuj blisko natury, mieszkaj wygodnie i poznaj Polskę od jej najsłodszej strony.": "Приєднуйся до нашої малинової родини. Працюй серед природи, живи з комфортом і відкрий для себе Польщу з її найсолодшого боку.",
  "Sprawdź dostępne miejsca": "Переглянути вільні місця", "Poznaj naszą plantację": "Познайомитися з фермою", "prosto": "прямо", "z krzaka": "з куща", "WIELKOPOLSKA, PL": "ВЕЛЬКОПОЛЬЩА, PL",
  "W Strożewie, pośród wielkopolskich pól, prowadzimy rodzinną plantację malin i tworzymy miejsce, w którym dobrze się pracuje.": "У Strożewo, серед полів Великопольщі, ми вирощуємо малину на сімейній фермі та створюємо місце, де приємно працювати.",
  "Dbamy o nasze krzewy i o ludzi, którzy pomagają nam zbierać ich owoce. Przyjeżdżasz do nas na sezon? Pomożemy Ci poczuć się jak u siebie.": "Ми дбаємо і про ягідні кущі, і про людей, які допомагають збирати врожай. Приїдеш до нас на сезон? Допоможемо тобі почуватися як удома.",
  "Poznaj nas bliżej": "Дізнатися про нас більше", "RAZEM PRZY ZBIORACH": "РАЗОМ НА ЗБОРІ", "Każdy dzień": "Кожен день", "ma": "має", "swój rytm.": "свій ритм.",
  "Praca na świeżym powietrzu, sprawdzone zadania i ludzie, na których możesz liczyć.": "Робота на свіжому повітрі, зрозумілі завдання та команда, на яку можна покластися.",
  "Zbiór malin": "Збір малини", "Delikatne zbieranie owoców do łubianek. Pokażemy Ci, jak robić to sprawnie i ostrożnie.": "Дбайливий збір ягід у лотки. Покажемо, як збирати швидко й обережно.",
  "Sortowanie i pakowanie": "Сортування та пакування", "Przygotowanie świeżych malin do dalszej drogi — dokładnie i w przyjaznym zespole.": "Підготовка свіжої малини до відправлення — уважно та в дружній команді.",
  "Prace przy uprawie": "Догляд за плантацією", "Pielęgnacja krzewów i porządkowanie plantacji w rytmie kolejnych pór roku.": "Догляд за кущами й підтримання ладу на плантації протягом сезону.",
  "Pracownicy zbierają maliny na polskiej plantacji": "Працівники збирають малину на польській плантації", "LUDZIE, NIE NUMERY": "ЛЮДИ, А НЕ НОМЕРИ", "Dobre rzeczy": "Гарні речі", "zbiera się": "збирають", "razem.": "разом.",
  "Każdego sezonu nasza ekipa staje się większa. Nieważne, czy masz doświadczenie — ważne, że przyjeżdżasz z dobrym nastawieniem.": "Щосезону наша команда зростає. Досвід не обов’язковий — важливо приїхати з хорошим настроєм.", "Dołącz do zespołu": "Приєднатися до команди",
  "ODPOCZNIJ PO ZBIORACH": "ВІДПОЧИНОК ПІСЛЯ ЗБОРУ", "Twoje miejsce": "Твоє місце", "po pracy.": "після роботи.", "Przygotowaliśmy wygodne zakwaterowanie blisko plantacji. Sprawdź dostępność i dopytaj nas o szczegóły pobytu.": "Ми підготували комфортне житло поруч із плантацією. Дізнайся про вільні місця та деталі проживання.",
  "Zapytaj o zakwaterowanie": "Запитати про житло", "Wygodny nocleg": "Комфортне житло", "Blisko plantacji": "Поруч із плантацією", "ODPOCZYNEK WŚRÓD ZIELENI": "ВІДПОЧИНОК СЕРЕД ЗЕЛЕНІ",
  "MALINY NIE BĘDĄ CZEKAĆ": "МАЛИНА НЕ ЧЕКАТИМЕ", "Widzimy się": "Побачимося", "na plantacji?": "на плантації?", "Zarezerwuj pracę i nocleg": "Забронювати роботу й житло", "Strona główna": "Головна", "Rezerwacja": "Бронювання", "Mała wieś. Wielkie serce.": "Невелике село. Велике серце.",
  "JESTEŚMY BLISKO": "МИ ПОРУ", "Znajdź nas": "Знайди нас", "w Strożewie.": "у Strożewo.", "Nasza plantacja znajduje się w spokojnej wielkopolskiej wsi. Napisz do nas, a podpowiemy, jak dojechać.": "Наша плантація розташована у спокійному селі Великопольщі. Напиши нам — підкажемо, як доїхати.",
  "MALINOWY ZAKĄTEK": "МАЛИНОВИЙ ЗАКУТОК", "Porozmawiajmy.": "Будьмо на зв’язку.", "Chcesz zapytać o pracę, nocleg lub dojazd? Wyślij zgłoszenie — odezwiemy się do Ciebie.": "Хочеш запитати про роботу, житло чи дорогу? Надішли заявку — ми зв’яжемося з тобою.", "Napisz do nas": "Написати нам", "Odwiedź nas": "Завітай до нас", "Strożewo, woj. wielkopolskie": "Strożewo, Великопольське воєводство", Polska: "Польща",
  "Godziny pracy plantacji": "Графік роботи плантації", "Sezonowo · szczegóły ustalamy indywidualnie": "Сезонна робота · деталі узгоджуємо індивідуально", "Nie podaliśmy numeru telefonu ani dokładnego adresu, ponieważ nie zostały określone. Skorzystaj z formularza rezerwacji, aby się z nami skontaktować.": "Телефон і точну адресу ще не вказано. Щоб зв’язатися з нами, скористайся формою бронювання.", "Mapa lokalizacji wsi Strożewo, Polska": "Карта розташування села Strożewo, Польща", "Otwórz mapę ↗": "Відкрити карту ↗",
  "TWÓJ SEZON ZACZYNA SIĘ TUTAJ": "ТВІЙ СЕЗОН ПОЧИНАЄТЬСЯ ТУТ", "Zarezerwuj": "Забронюй", "swój pobyt.": "своє перебування.", "Opowiedz nam, kiedy chcesz przyjechać i czego szukasz. Wspólnie ustalimy szczegóły pracy i zakwaterowania.": "Розкажи, коли хочеш приїхати та що шукаєш. Разом узгодимо деталі роботи й проживання.", "Praca": "Робота", "i nocleg": "і житло", "w jednym miejscu": "в одному місці",
  "JAK TO DZIAŁA": "ЯК ЦЕ ПРАЦЮЄ", "Wyślij zgłoszenie": "Подай заявку", "Wybierz rodzaj pobytu i podaj termin.": "Обери формат перебування та вкажи дату.", "Ustalimy szczegóły": "Узгодимо деталі", "Porozmawiamy o dostępności i warunkach.": "Обговоримо наявність місць і умови.", "Witamy w Strożewie": "Вітаємо у Strożewo", "Przyjedź i rozpocznij swój sezon z nami.": "Приїжджай і розпочинай сезон разом із нами.", "Nie wiesz jeszcze dokładnego terminu? Wybierz orientacyjną datę — wszystko doprecyzujemy później.": "Ще не знаєш точну дату? Вкажи приблизну — решту уточнимо пізніше.",
  "FORMULARZ ZGŁOSZENIOWY": "ФОРМА ЗАЯВКИ", "Opowiedz nam o sobie.": "Розкажи про себе.", "Imię i nazwisko": "Ім’я та прізвище", "Jak się nazywasz?": "Як тебе звати?", "Adres e-mail": "Електронна пошта", "Telefon": "Телефон", "(opcjonalnie)": "(необов’язково)", "Planowany przyjazd": "Планована дата приїзду", "Czego szukasz?": "Що тебе цікавить?", "Pracy i zakwaterowania": "Робота й житло", "Pracy na plantacji": "Робота на плантації", "Samego zakwaterowania": "Лише житло", "Kilka słów od siebie": "Кілька слів про себе", "Liczba osób, planowany czas pobytu…": "Кількість людей, тривалість перебування…", "Wyrażam zgodę na kontakt w sprawie mojego zgłoszenia.": "Погоджуюся на зв’язок зі мною щодо моєї заявки.", "Dziękujemy! Formularz działa w trybie demonstracyjnym; aby otrzymywać zgłoszenia, właściciel strony musi podłączyć adres e-mail lub system rezerwacji.": "Дякуємо! Форма поки демонстраційна. Щоб отримувати заявки, власнику сайту потрібно підключити електронну пошту або систему бронювання.", "Twoje dane nie są wysyłane ani zapisywane przez tę demonstracyjną wersję formularza.": "Ця демонстраційна форма не надсилає й не зберігає твої дані.",
  "Malinowy Zakątek — strona główna": "Малиновий Закуток — головна", "Malinowy Zakątek — praca i noclegi w Strożewie": "Малиновий Закуток — робота й житло у Strożewo", "Rodzinna plantacja malin w Strożewie. Dołącz do zbiorów i zapytaj o zakwaterowanie.": "Сімейна малинова ферма у Strożewo. Приєднуйся до збору врожаю та запитуй про житло.", "Zielone rzędy krzewów malin na plantacji": "Зелені ряди малинових кущів на плантації", "Niewielkie domki noclegowe pośród zieleni": "Невеликі будиночки для проживання серед зелені",
  "STROŻEWO · POLSKA": "STROŻEWO · ПОЛЬЩА", "Malinowy Zakątek": "Малиновий Закуток",
};

function translatePage(language: Language) {
  const reverse = Object.fromEntries(Object.entries(polishToUkrainian).map(([pl, uk]) => [uk, pl]));
  const dict = language === "uk" ? polishToUkrainian : reverse;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const value = node.nodeValue ?? "";
    const trimmed = value.trim();
    if (!trimmed || !dict[trimmed]) continue;
    node.nodeValue = value.replace(trimmed, dict[trimmed]);
  }
  document.querySelectorAll<HTMLElement>("[aria-label], [title], [alt], input[placeholder], textarea[placeholder]").forEach((el) => {
    for (const attr of ["aria-label", "title", "alt", "placeholder"]) {
      const value = el.getAttribute(attr);
      if (value && dict[value]) el.setAttribute(attr, dict[value]);
    }
  });
  document.documentElement.lang = language;
  if (dict[document.title]) document.title = dict[document.title];
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (description?.content && dict[description.content]) description.content = dict[description.content];
}

export default function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("pl");
  const languageRef = useRef<Language>("pl");

  useEffect(() => {
    const saved = localStorage.getItem("farm-language");
    const initial: Language = saved === "uk" ? "uk" : "pl";
    languageRef.current = initial;
    window.requestAnimationFrame(() => setLanguage(initial));
    translatePage(initial);
    const observer = new MutationObserver(() => translatePage(languageRef.current));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  function toggle() {
    const next: Language = language === "pl" ? "uk" : "pl";
    languageRef.current = next;
    setLanguage(next);
    localStorage.setItem("farm-language", next);
    translatePage(next);
  }

  return <button className="language-toggle" type="button" onClick={toggle} aria-label={language === "pl" ? "Zmień język na ukraiński" : "Змінити мову на польську"}><span className={language === "pl" ? "active" : ""}>PL</span><span className="language-separator">/</span><span className={language === "uk" ? "active" : ""}>UA</span></button>;
}
