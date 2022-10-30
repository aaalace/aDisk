from django.urls import path
from .views import CreateNewFolder, UploadNewFile, GetFiles

urlpatterns = [
    path('create_new_folder', CreateNewFolder.as_view()),
    path('upload_new_file', UploadNewFile.as_view()),
    path('get_files/<user_id>/<place>', GetFiles.as_view()),
]
