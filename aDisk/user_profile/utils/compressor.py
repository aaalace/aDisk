from base64 import b64decode, b64encode
from PIL import Image
import os
import moviepy.editor as moviepy
from pydub import AudioSegment
from aDisk.settings import STATICFILES_DIRS
from django.utils.crypto import get_random_string


def compressor(content, id):
    try:
        content = b64decode(content)
        name = f'{id}-{get_random_string(8)}.jpg'
        path_from_cwd = f'/images/{name}'
        result_path = STATICFILES_DIRS[0] + path_from_cwd
        with open(result_path, 'wb') as img:
            img.write(content)
        im = Image.open(result_path)
        im = im.convert('RGB')
        im.save(result_path, optimize=True, quality=70)
        return {'status': True, 'result_path': result_path, 'name': name}
    except Exception as e:
        print(e) 
        return {'status': False}
