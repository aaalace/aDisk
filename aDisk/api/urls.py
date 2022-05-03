from django.urls import path
from .views import SignUpView, GetCSRFToken, LoginView, CheckAuthenticatedView, LogoutView

urlpatterns = [
    path('register', SignUpView.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('auth', CheckAuthenticatedView.as_view()),
    path('csrf_cookie', GetCSRFToken.as_view()),
]
