from django.urls import path
from .views import SignUpView, GetCSRFToken, LoginView, CheckAuthenticatedView, LogoutView, DeleteAccountView, GetUsersView

urlpatterns = [
    path('register', SignUpView.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('auth', CheckAuthenticatedView.as_view()),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('delete', DeleteAccountView.as_view()),
    path('get_users', GetUsersView.as_view()),
]
