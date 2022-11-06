from django.urls import path
from .views import CreateNewFolder, UploadNewFile, GetFiles, GetFolderFiles, GetImagePreview, InstallFile

urlpatterns = [
    path('create_new_folder', CreateNewFolder.as_view()),
    path('upload_new_file', UploadNewFile.as_view()),
    path('get_files/<user_id>/<place>', GetFiles.as_view()),
    path('get_folderfiles/<user_id>/<place>/<pic_unique>/<pic_dt>/<pic_size>/<pic_name>', GetFolderFiles.as_view()),
    path('get_img_preview/<user_id>/<place>/<pic_unique>/<pic_dt>/<pic_size>/<pic_name>', GetImagePreview.as_view()),
    path('install_file/<user_id>/<place>/<pic_unique>/<pic_dt>/<pic_size>/<pic_name>', InstallFile.as_view()),
]
