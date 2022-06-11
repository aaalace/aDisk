import os
from aDisk.settings import STATICFILES_DIRS

def delete_file(avatar):
    path_from_cwd = f'/images/{avatar}'
    file_location = STATICFILES_DIRS[0] + path_from_cwd
    os.remove(file_location)