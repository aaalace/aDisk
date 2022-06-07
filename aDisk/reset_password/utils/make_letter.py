
def make_letter_text(user_id, token, locale):

    locale_part = {
        'ru': ['Перейдите по ссылке:', 'Ссылка доступна единожды'],
        'de': ['Link folgen:', 'Link only available once'],
        'en': ['Follow link:', 'Link nur einmal vorhanden']
    }
    
    message = f'{locale_part[locale][0]} http://localhost:3000/password-reset-confirm/{user_id}/{token} ({locale_part[locale][1]})'

    return message

def make_letter_name(locale):
    if locale == 'ru':
        return 'Восстановление пароля'
    if locale == 'de':
        return 'Passwort zurücksetzen'
    return 'Password Reset'