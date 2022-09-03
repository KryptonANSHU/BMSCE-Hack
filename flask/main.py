# from crypt import methods
import json 
import time
from unicodedata import category
from flask import Flask ,render_template, request,jsonify
from flask_cors import CORS
# from flask_ngrok import run_with_ngrok
import pyrebase
import time
import os
app= Flask(__name__)
# run_with_ngrok(app)
CORS(app)







@app.route('/dishdata',methods=['POST'])
def dish():


    print(request.data)
    getdata=request.get_json()  
    # getdata=jsonify(getdata)
    print((getdata))
  
        
    import pyrebase
    import os
    config={
    "apiKey": "AIzaSyBR1rLney0FtBpDbe0OpHZKrqXzF9FXM-Y",
    "authDomain": "upload-files-97fdd.firebaseapp.com",
    "projectId": "upload-files-97fdd",
    "storageBucket": "upload-files-97fdd.appspot.com",
    "messagingSenderId": "1056716980772",
    "appId": "1:1056716980772:web:cdd9cf363c8b0ea6f58eb1",
    "databaseURL":"https://upload-files-97fdd.firebaseio.com"
    
    }



    firebase=pyrebase.initialize_app(config)
    storage=firebase.storage()

    print(storage)
    path_on_cloud="/images/"+str(getdata)




    print(type(path_on_cloud))
    # storage.child(path_on_cloud).put(path_local)


    storage.child(path_on_cloud).download(filename="ieeeimage.jpg",path=os.path.basename('test'))
    time.sleep(4)



    import numpy as np
    import pandas as pd
    from pathlib import Path
    import os.path

    import matplotlib.pyplot as plt
    import seaborn as sns

    from sklearn.model_selection import train_test_split

    import tensorflow as tf

    from sklearn.metrics import confusion_matrix, classification_report

    import os
    import cv2
    import pafy
    import math
    import random
    import numpy as np
    import datetime as dt
    import tensorflow as tf
    from collections import deque
    import matplotlib.pyplot as plt
    
    # from moviepy.editor import *
    # %matplotlib inline
    
    from sklearn.model_selection import train_test_split
    
    # from tensorflow.keras.layers import *
    from tensorflow.keras.models import Sequential
    from tensorflow.keras.utils import to_categorical
    from tensorflow.keras.callbacks import EarlyStopping
    from tensorflow.keras.utils import plot_model

    path_to_model='./model_v1_inceptionV3.h5'
    print("Loading the model..")
    model = tf.keras.models.load_model(path_to_model)
    print("Done!")

    from keras.preprocessing.image import ImageDataGenerator
    n_classes = 20
    batch_size = 32
    img_width, img_height = 299, 299
    # test_data_dir = './test'

    test_datagen = ImageDataGenerator(rescale=1. / 255)

    # test_generator = test_datagen.flow_from_directory(
    #     test_data_dir,
    #     target_size=(img_height, img_width),
    #     batch_size=batch_size,
    #     class_mode='categorical')

    category={
        0: ['burger','Burger'], 1: ['butter_naan','Butter Naan'], 2: ['chai','Chai'],
        3: ['chapati','Chapati'], 4: ['chole_bhature','Chole Bhature'], 5: ['dal_makhani','Dal Makhani'],
        6: ['dhokla','Dhokla'], 7: ['fried_rice','Fried Rice'], 8: ['idli','Idli'], 9: ['jalegi','Jalebi'],
        10: ['kathi_rolls','Kaathi Rolls'], 11: ['kadai_paneer','Kadai Paneer'], 12: ['kulfi','Kulfi'],
        13: ['masala_dosa','Masala Dosa'], 14: ['momos','Momos'], 15: ['paani_puri','Paani Puri'],
        16: ['pakode','Pakode'], 17: ['pav_bhaji','Pav Bhaji'], 18: ['pizza','Pizza'], 19: ['samosa','Samosa']
    }

    def predict_image(filename,model):
        img_ =  keras.utils.load_img(filename, target_size=(299, 299))
        img_array = tf.keras.utils.img_to_array(img_)
        img_processed = np.expand_dims(img_array, axis=0) 
        img_processed /= 255.   
        
        prediction = model.predict(img_processed)
        
        index = np.argmax(prediction)
        print(category[index][1])
        # plt.title("Prediction - {}".format(category[index][1]))
        # plt.imshow(img_array)
        return category[index][1]
        
    def predict_dir(filedir,model):
        cols=5
        pos=0
        images=[]
        total_images=len(os.listdir(filedir))
        rows=total_images//cols + 1
        
        true=filedir.split('/')[-1]
        
        fig=plt.figure(1, figsize=(25, 25))
        
        for i in sorted(os.listdir(filedir)):
            images.append(os.path.join(filedir,i))
            
        for subplot,imggg in enumerate(images):
            img_ = image.load_img(imggg, target_size=(299, 299))
            img_array = image.img_to_array(img_)
            
            img_processed = np.expand_dims(img_array, axis=0) 

            img_processed /= 255.
            prediction = model.predict(img_processed)
            index = np.argmax(prediction)
            
            pred=category.get(index)[0]
            if pred==true:
                pos+=1
            
            fig=plt.subplot(rows, cols, subplot+1)
            fig.set_title(category.get(index)[1], pad = 10,size=18)
            plt.imshow(img_array)

        acc=pos/total_images
        print("Accuracy of Test : {:.2f} ({pos}/{total})".format(acc,pos=pos,total=total_images))
        plt.tight_layout()


    import keras
    from keras.preprocessing import image       
    answer =predict_image('ieeeimage.jpg',model)
    
    return jsonify(answer) 


@app.route('/', methods=['POST'])




def hello_word():
    print(request.data)
    getdata=request.get_json()  
    # getdata=jsonify(getdata)
    print((getdata))
  
        
    import pyrebase
    import os
    config={
    "apiKey": "AIzaSyBR1rLney0FtBpDbe0OpHZKrqXzF9FXM-Y",
    "authDomain": "upload-files-97fdd.firebaseapp.com",
    "projectId": "upload-files-97fdd",
    "storageBucket": "upload-files-97fdd.appspot.com",
    "messagingSenderId": "1056716980772",
    "appId": "1:1056716980772:web:cdd9cf363c8b0ea6f58eb1",
    "databaseURL":"https://upload-files-97fdd.firebaseio.com"
    
    }



    firebase=pyrebase.initialize_app(config)
    storage=firebase.storage()

    print(storage)
    path_on_cloud="/images/"+str(getdata)




    print(type(path_on_cloud))
    # storage.child(path_on_cloud).put(path_local)


    storage.child(path_on_cloud).download(filename="ieeeimage.jpg",path=os.path.basename('test'))
    time.sleep(4)
    
    from PIL import Image
    import tensorflow 
    from tensorflow.keras.preprocessing.image import load_img,img_to_array
    import numpy as np
    from keras.models import load_model
    import requests
    from bs4 import BeautifulSoup

    model = load_model('FV.h5')
    labels = {0: 'apple', 1: 'banana', 2: 'beetroot', 3: 'bell pepper', 4: 'cabbage', 5: 'capsicum', 6: 'carrot', 7: 'cauliflower', 8: 'chilli pepper', 9: 'corn', 10: 'cucumber', 11: 'eggplant', 12: 'garlic', 13: 'ginger', 14: 'grapes', 15: 'jalepeno', 16: 'kiwi', 17: 'lemon', 18: 'lettuce',
            19: 'mango', 20: 'onion', 21: 'orange', 22: 'paprika', 23: 'pear', 24: 'peas', 25: 'pineapple', 26: 'pomegranate', 27: 'potato', 28: 'raddish', 29: 'soy beans', 30: 'spinach', 31: 'sweetcorn', 32: 'sweetpotato', 33: 'tomato', 34: 'turnip', 35: 'watermelon'}

    fruits = ['Apple','Banana','Bello Pepper','Chilli Pepper','Grapes','Jalepeno','Kiwi','Lemon','Mango','Orange','Paprika','Pear','Pineapple','Pomegranate','Watermelon']
    vegetables = ['Beetroot','Cabbage','Capsicum','Carrot','Cauliflower','Corn','Cucumber','Eggplant','Ginger','Lettuce','Onion','Peas','Potato','Raddish','Soy Beans','Spinach','Sweetcorn','Sweetpotato','Tomato','Turnip']

    def fetch_calories(prediction):
        try:
            url = 'https://www.google.com/search?&q=calories in ' + prediction
            req = requests.get(url).text
            scrap = BeautifulSoup(req, 'html.parser')
            calories = scrap.find("div", class_="BNeawe iBp4i AP7Wnd").text
            return calories
        except Exception as e:
            # st.error("Can't able to fetch the Calories")
            print(e)

    def processed_img(img_path):
        img=load_img(img_path,target_size=(224,224,3))
        img=img_to_array(img)
        img=img/255
        img=np.expand_dims(img,[0])
        answer=model.predict(img)
        y_class = answer.argmax(axis=-1)
        print(y_class)
        y = " ".join(str(x) for x in y_class)
        y = int(y)
        res = labels[y]
        print(res)
        return res.capitalize()

    def run():
        # st.title("Fruits🍍-Vegetable🍅 Classification")
        # img_file = st.file_uploader("Choose an Image", type=["jpg", "png"])
        # if img_file is not None:
        #     img = Image.open(img_file).resize((250,250))
        #     st.image(img,use_column_width=False)
        #     save_image_path = './upload_images/'+img_file.name
        #     with open(save_image_path, "wb") as f:
        #         f.write(img_file.getbuffer())

        #     # if st.button("Predict"):
        #     if img_file is not None:
        save_image_path='ieeeimage.jpg'
        result= processed_img(save_image_path)
        # aaa=result
        print(result)
        # if result in vegetables:
        #     st.info('**Category : Vegetables**')
        # else:
        #     st.info('**Category : Fruit**')
        # st.success("**Predicted : "+result+'**')
        cal = fetch_calories(result)
        if cal:
            # aa=cal
            print(cal)
        data={
        "category":result,
        "cal":cal
        }    
        return data
    answer=run()

    
    
    return jsonify(answer)


if __name__ =='__main__':
    app.run(  port=3002,debug=True  )
