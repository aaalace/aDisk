from PIL import Image
from .compressor import compressor

def crop_image(src, crop, id):
    try:
        res = compressor(src, id)
        if res['status']:
            im = Image.open(res['result_path'])
            im = im.crop((crop['x'], crop['y'], crop['x'] + crop['width'], crop['y'] + crop['height']))
            im.save(res['result_path'])
            return {'status': True, 'name': res['name']}
        return {'status': False}
    except Exception as e:
        print(e)
        return {'status': False}