import { LOCALES } from './locales'

export const messages = {
  [LOCALES.ENGLISH]: {
    fallback: '',

    // ERRORS
    user_already_exists: 'User is already registered',
    email_is_already_in_use: 'Email is already in use',
    password_characters: 'Password should be at least 8 characters',
    passwords_do_not_match: 'Passwords do not match',
    email_does_not_exists: 'Email does not exists',
    cant_send_email: 'Email does not avaliable',
    link_is_not_avaliable: 'Link is not avaliable anymore',
    page_not_avaliable: 'Page is not avaliable anymore',

    // HomeHeader
    login_button: 'Sign in',

    // Home
    get_started_btn: 'Get started',
    open_disk_btn: 'Open disk',
    features: 'Features',

    first_box_name: 'Secure storage for your photo',
    first_box_desc: 'Enable auto-upload on your phone and aDisk will store all your photos in their original resolution',
    second_box_name: 'Secure storage for your photo',
    second_box_desc: 'Enable auto-upload on your phone and aDisk will store all your photos in their original resolution',
    third_box_name: 'Secure storage for your photo',
    third_box_desc: 'Enable auto-upload on your phone and aDisk will store all your photos in their original resolution',
    fourth_box_name: 'Secure storage for your photo',
    fourth_box_desc: 'Enable auto-upload on your phone and aDisk will store all your photos in their original resolution',

    home_payment_header: 'Affordable & Secure',
    home_payment_month: 'month',
    home_payment_body_1: 'GB storage',
    home_payment_body_2: 'Creating public catalogs',
    home_payment_body_3: 'Official support service',

    // Sign in
    sign_rights_reserved: 'All rights reserved',
    sign_desc: 'Save your files in a safe place!',
    sign_username: 'Username',
    sign_password: 'Password',
    sign_or: 'Or',

    sign_in_name: 'Sign in',
    sign_in_google_btn: 'Sign in with Google',
    sign_in_question: 'Not registered yet?',
    sign_in_answer: 'Create an account',
    sign_in_button: 'Sign in',

    user_not_authenticated: 'User does not exists',

    // Password reset
    pr_back: 'Back',
    pr_name: 'Password reset',
    pr_desc: "Enter your email adress below, and we'll email instructions setting a new one",
    pr_btn: 'Send instructions',
    pr_success_name: 'Password reset sent',
    pr_success_desc: "We've emailed you instructions for setting your password",

    // Sign up
    sign_up_name: 'Sign up',
    sign_up_google_btn: 'Sign up with Google',
    sign_up_email: 'Email',
    sign_up_rep_pass: 'Repeated password',
    sign_up_agreement: 'I agree to the',
    sign_up_terms_link: 'Terms & Conditions',
    sign_up_question: 'Already have an account?',
    sign_up_answer: 'Sign in',
    sign_up_button: 'Sign up',

    // Advantages Carousel
    adv_home: 'Home',
    adv_login: 'Login',
    adv_reg: 'Register',
    adv_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    
    // Profile
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December',

    prof_my_account: 'My account',
    prof_settings: 'Settings',
    prof_support: 'Support',
    prof_open_adisk: 'aDisk',
    prof_logout: 'Log out',
    prof_since: 'aDisk user since',
    prof_name: 'Name',
    prof_email: 'Email',
    prof_status: 'Account status',
    prof_statistics: 'Storage statistics',
    prof_empty_storage: 'Empty',
    prof_GB: 'GB',

    // Public profile settings
    sett_public_profile: 'Public profile',
    sett_public_desc: 'Update your photo and personal details here',
    sett_public_username: 'Username',
    sett_public_email: 'Email',
    sett_public_name: 'Name',
    sett_public_update: 'Update profile',
    sett_public_picture: 'Profile picture',

    // Account settings
    sett_acc: 'Account settings',
    sett_acc_desc: 'Update your private details here',
    sett_acc_appearance: 'Appearance',
    sett_acc_lang: 'Languague',
    sett_acc_delete_head: 'Delete account',
    sett_acc_delete_desc: 'Once you delete your account, there is no going back. Please be certain.',
    sett_acc_delete_btn: 'Delete your account',

    sett_acc_pass_name: 'Change password',
    sett_acc_pass_new: 'New password',
    sett_acc_pass_confirm: 'Confirm password',
    sett_acc_pass_btn: 'Update password',

    // Support
    supp_question: "Didn't find the answer to your question?",
    supp_write_us: 'Write us',
  },

  [LOCALES.RUSSIAN]: {
    fallback: '',

    // ERRORS
    user_already_exists: 'Пользователь уже зарегистрирован',
    email_is_already_in_use: 'Почта уже используется',
    password_characters: 'Пароль должен состоять минимум из 8 символов',
    passwords_do_not_match: 'Пароли не совпадают',
    email_does_not_exists: 'Почта не существует',
    cant_send_email: 'Мы не можем отправить сообщение по этому адресу',
    link_is_not_avaliable: 'Ссылка более не доступна',
    page_not_avaliable: 'Страница более не доступна',

    // HomeHeader
    login_button: 'Войти',
    
    // Home
    get_started_btn: 'Зарегистрироваться',
    open_disk_btn: 'Открыть диск',
    features: 'Преимущества',
    
    first_box_name: 'Надежное хранилище для ваших фото',
    first_box_desc: 'Включите автозагрузку на телефоне и aDisk сохранит все ваши фото в исходном разрешении',
    second_box_name: 'Надежное хранилище для ваших фото',
    second_box_desc: 'Включите автозагрузку на телефоне и aDisk сохранит все ваши фото в исходном разрешении',
    third_box_name: 'Надежное хранилище для ваших фото',
    third_box_desc: 'Включите автозагрузку на телефоне и aDisk сохранит все ваши фото в исходном разрешении',
    fourth_box_name: 'Надежное хранилище для ваших фото',
    fourth_box_desc: 'Включите автозагрузку на телефоне и aDisk сохранит все ваши фото в исходном разрешении',

    home_payment_header: 'Доступный и Безопасный',
    home_payment_month: 'месяц',
    home_payment_body_1: 'ГБ памяти',
    home_payment_body_2: 'Создание общих каталогов',
    home_payment_body_3: 'Служба поддержки',
    
    // Sign in
    sign_rights_reserved: 'Все права защищены',
    sign_desc: 'Храните свои файлы в надежном месте!',
    sign_username: 'Имя пользователя',
    sign_password: 'Пароль',
    sign_or: 'Или',

    sign_in_name: 'Вход',
    sign_in_google_btn: 'Войти с помощью Google',
    sign_in_question: 'Нет аккаунта?',
    sign_in_answer: 'Зарегистрируйтесь',
    sign_in_button: 'Войти',

    user_not_authenticated: 'Пользователь не существует',

    // Password reset
    pr_back: 'Назад',
    pr_name: 'Восстановление пароля',
    pr_desc: "Введите свою почту и следуйте инструкции в ней",
    pr_btn: 'Отправить сообщение',
    pr_success_name: 'Сообщение отправлено',
    pr_success_desc: "Мы отправили вам инструкцию по восстановлению пароля",

    // Sign up
    sign_up_name: 'Регистрация',
    sign_up_google_btn: 'Зарегистрироваться через Google',
    sign_up_email: 'Почта',
    sign_up_rep_pass: 'Повторите пароль',
    sign_up_agreement: 'Я согласен с',
    sign_up_terms_link: 'Условиями пользования',
    sign_up_question: 'Уже есть аккаунт?',
    sign_up_answer: 'Войдите',
    sign_up_button: 'Зарегистрироваться',

    // Advantages Carousel
    adv_home: 'Главная',
    adv_login: 'Вход',
    adv_reg: 'Регистрация',
    adv_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      
    // Profile
    january: 'Января',
    february: 'Февраля',
    march: 'Марта',
    april: 'Апреля',
    may: 'Мая',
    june: 'Июня',
    july: 'Июля',
    august: 'Августа',
    september: 'Сентября',
    october: 'Октября',
    november: 'Ноября',
    december: 'Декабря',
    
    prof_my_account: 'Аккаунт',
    prof_settings: 'Настройки',
    prof_support: 'Поддержка',
    prof_open_adisk: 'aDisk',
    prof_logout: 'Выйти',
    prof_since: 'Пользователь aDisk с',
    prof_name: 'Имя',
    prof_email: 'Почта',
    prof_status: 'Статус аккаунта',
    prof_statistics: 'Хранилище',
    prof_empty_storage: 'Свободно',
    prof_GB: 'ГБ',

    // Public profile settings
    sett_public_profile: 'Профиль',
    sett_public_desc: 'Обновляйте свою личную информацию и аватарку здесь',
    sett_public_username: 'Имя пользователя',
    sett_public_email: 'Почта',
    sett_public_name: 'Имя',
    sett_public_update: 'Обновить профиль',
    sett_public_picture: 'Изображение профиля',

    // Account settings
    sett_acc: 'Аккаунт',
    sett_acc_desc: 'Обновляйте приватную информацию здесь',
    sett_acc_appearance: 'Тема',
    sett_acc_lang: 'Язык',
    sett_acc_delete_head: 'Удалить аккаунт',
    sett_acc_delete_desc: 'Удалив аккаунт, вы потеряете доступ к нему навсегда, будьте аккуратны',
    sett_acc_delete_btn: 'Удалить аккаунт',

    sett_acc_pass_name: 'Изменить пароль',
    sett_acc_pass_new: 'Новый пароль',
    sett_acc_pass_confirm: 'Подтвердите пароль',
    sett_acc_pass_btn: 'Обновить пароль',

    // Support
    supp_question: "Не нашли ответ на ваш вопрос?",
    supp_write_us: 'Напишите нам',
    },

  [LOCALES.GERMAN]: {
    fallback: '',

    // ERRORS
    user_already_exists: 'Benutzer ist bereits registriert',
    email_is_already_in_use: 'E-Mail wird bereits verwendet',
    password_characters: 'Passwort muss mindestens 8 Zeichen lang sein',
    passwords_do_not_match:'Passwörter stimmen nicht überein',
    email_does_not_exists: 'E-Mail existiert nicht',
    cant_send_email: 'E-Mail ist nicht verfügbar',
    link_is_not_avaliable: 'Link ist nicht mehr verfügbar',
    page_not_avaliable: 'Seite ist nicht mehr verfügbar',

    // HomeHeader
    login_button: 'Eingang',
    
    // Home
    get_started_btn: 'Loslegen',
    open_disk_btn: 'Scheibe öffnen',
    features: 'Eigenschaften',

    first_box_name: 'Sichere Aufbewahrung für Ihr Foto',
    first_box_desc: 'Aktivieren Sie den automatischen Upload auf Ihrem Telefon und aDisk speichert alle Ihre Fotos in ihrer ursprünglichen Auflösung.',
    second_box_name: 'Sichere Aufbewahrung für Ihr Foto',
    second_box_desc: 'Aktivieren Sie den automatischen Upload auf Ihrem Telefon und aDisk speichert alle Ihre Fotos in ihrer ursprünglichen Auflösung.',
    third_box_name: 'Sichere Aufbewahrung für Ihr Foto',
    third_box_desc: 'Aktivieren Sie den automatischen Upload auf Ihrem Telefon und aDisk speichert alle Ihre Fotos in ihrer ursprünglichen Auflösung.',
    fourth_box_name: 'Sichere Aufbewahrung für Ihr Foto',
    fourth_box_desc: 'Aktivieren Sie den automatischen Upload auf Ihrem Telefon und aDisk speichert alle Ihre Fotos in ihrer ursprünglichen Auflösung.',

    home_payment_header: 'Erschwinglich und sicher',
    home_payment_month: 'monat',
    home_payment_body_1: 'GB-Speicher',
    home_payment_body_2: 'Erstellung öffentlicher Kataloge',
    home_payment_body_3: 'Offizieller Support-Service',

    // Sign in
    sign_rights_reserved: 'Alle Rechte vorbehalten',
    sign_desc: 'Speichern Sie Ihre Dateien an einem sicheren Ort!',
    sign_username: 'Nutzername',
    sign_password: 'Passwort',
    sign_or: 'Oder',

    sign_in_name: 'Eingang',
    sign_in_google_btn: 'Anmeldung mit Google',
    sign_in_question: 'Noch nicht registriert?',
    sign_in_answer: 'Ein Konto erstellen',
    sign_in_button: 'Eingang',

    user_not_authenticated: 'Benutzer existiert nicht',

    // Password reset
    pr_back: 'Der Rücken',
    pr_name: 'Passwort zurücksetzen',
    pr_desc: "Geben Sie unten Ihre E-Mail-Adresse ein, und wir senden Ihnen per E-Mail Anweisungen zum Einrichten einer neuen Adresse",
    pr_btn: 'Anweisungen senden',
    pr_success_name: 'Passwort zurücksetzen gesendet',
    pr_success_desc: "Wir haben Ihnen per E-Mail Anweisungen zum Festlegen Ihres Passworts gesendet",

    // Sign up
    sign_up_name: 'Anmelden',
    sign_up_google_btn: 'Melden Sie sich bei Google an',
    sign_up_email: 'Email',
    sign_up_rep_pass: 'Wiederholtes Passwort',
    sign_up_agreement: 'Ich stimme dem zu',
    sign_up_terms_link: 'Geschäftsbedingungen',
    sign_up_question: 'Sie haben bereits ein Konto?',
    sign_up_answer: 'Eingang',
    sign_up_button: 'Anmelden',

    // Advantages Carousel
    adv_home: 'Hauptseite',
    adv_login: 'Eingang',
    adv_reg: 'Anmelden',
    adv_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        
    // Profile
    january: 'Januar',
    february: 'Februar',
    march: 'Marsch',
    april: 'April',
    may: 'Kann',
    june: 'Juni',
    july: 'Juli',
    august: 'August',
    september: 'September',
    october: 'Oktober',
    november: 'November',
    december: 'Dezember',

    prof_my_account: 'Mein Konto',
    prof_settings: 'Einstellungen',
    prof_support: 'Support',
    prof_open_adisk: 'aDisk',
    prof_logout: 'Ausloggen',
    prof_since: 'aDisk-Benutzer seit',
    prof_name: 'Name',
    prof_email: 'Email',
    prof_status: 'Account status',
    prof_statistics: 'Speicherstatistik',
    prof_empty_storage: 'Leer',
    prof_GB: 'GB',

    // Public profile settings
    sett_public_profile: 'Öffentliches Profil',
    sett_public_desc: 'Aktualisieren Sie hier Ihr Foto und Ihre persönlichen Daten',
    sett_public_username: 'Nutzername',
    sett_public_email: 'Email',
    sett_public_name: 'Name',
    sett_public_update: 'Profil aktualisieren',
    sett_public_picture: 'Profilbild',

    // Account settings
    sett_acc: 'Account Einstellungen',
    sett_acc_desc: 'Aktualisieren Sie hier Ihre privaten Daten',
    sett_acc_appearance: 'Aussehen',
    sett_acc_lang: 'Sprache',
    sett_acc_delete_head: 'Konto löschen',
    sett_acc_delete_desc: 'Sobald Sie Ihr Konto gelöscht haben, gibt es kein Zurück mehr. Seien Sie bitte sicher.',
    sett_acc_delete_btn: 'Lösche deinen Account',

    sett_acc_pass_name: 'Passwort ändern',
    sett_acc_pass_new: 'Neues Passwort',
    sett_acc_pass_confirm: 'Passwort bestätigen',
    sett_acc_pass_btn: 'Kennwort aktualisieren',

    // Support
    supp_question: "Haben Sie die Antwort auf Ihre Frage nicht gefunden?",
    supp_write_us: 'Schreiben Sie uns',
  }
}