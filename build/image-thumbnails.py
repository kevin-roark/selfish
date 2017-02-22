  #let command = `convert ${texturePath} -resize 256x256 ${modelPath}/Thumbnail.jpg`;

import os
from subprocess import call

def convert(path):
    tpath = path.replace('images', 'image-thumbnails')
    files = [i for i in os.listdir(path) if i != 'DS_Store']

    images = []
    for f in files:
        if os.path.isdir(path + '/' + f):
            for i in os.listdir(path + '/' + f):
                images.append(f + '/' + i)
        else:
            images.append(f)

    images = [i for i in images if 'jpg' in i or 'png' in i]

    for img in images:
        img_path = path + '/' + img

        thumb_path = tpath + '/' + img
        thumb_dir = os.path.dirname(thumb_path)
        if not os.path.exists(thumb_dir):
            os.makedirs(thumb_dir)

        call(['convert', img_path, '-resize', '425', thumb_path])

convert('src/assets/images')
convert('src/assets/freelance-images')
