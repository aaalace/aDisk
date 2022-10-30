from django.urls import path
from .views import GetUserProfileView, UpdateUserProfileView, GetUserAvatar, UpdateUserAvatar, DeleteUserAvatar

urlpatterns = [
    path('get_user_profile', GetUserProfileView.as_view()),
    path('update_user_profile', UpdateUserProfileView.as_view()),
    path('get_user_avatar/<path>', GetUserAvatar.as_view()),
    path('update_user_avatar', UpdateUserAvatar.as_view()),
    path('delete_user_avatar', DeleteUserAvatar.as_view())
]
