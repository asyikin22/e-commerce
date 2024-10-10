import nltk
# nltk.download('punkt')
from nltk.stem.lancaster import LancasterStemmer
stemmer = LancasterStemmer()

import numpy as np
import random 
import json 
import tensorflow as tf
from tensorflow.python.keras.models import Sequential
from tensorflow.python.keras.layers import Dense, Dropout
from tensorflow.python.keras.utils.vis_utils import plot_model
import matplotlib as plt

#load intents data from JSON file
with open("intents.json") as file:
    data = json.load(file)

#initializes list
words = []                          # unique stemmed words from patterns
labels = []                         # unique tags for intents
docs_x = []                         # List of all different tokenized patterns (user inputs) from intents
docs_y = []                         # List of corresponding labels/output (tags)

for intent in data["intents"]:
    for pattern in intent["patterns"]:
        perkataan = nltk.word_tokenize(pattern)
        words.extend(perkataan)
        docs_x.append(perkataan)                         
        docs_y.append(intent["tag"])
        
    if intent["tag"] not in labels:
        labels.append(intent["tag"])

# stem and lower the words, sort and remove duplicates     
words = [stemmer.stem(w.lower()) for w in words if w != "?"]
words = sorted(list(set(words)))

labels = sorted(labels)

# neural network can only udnerstnad numbers NOT words
training = []
output = []
out_empty = [0 for _ in range(len(labels))]

#create trainign data
for x, doc in enumerate(docs_x):
    bag = []
    perkataan = [stemmer.stem(w.lower()) for w in doc]
    
    for w in words:                                #create a bag of words
        if w in perkataan:
            bag.append(1)
        else:
            bag.append(0)

#generate output for corresponding labels and append those into trainign and outputs

output_row = out_empty[:]
output_row[labels.index(docs_y[x])] = 1         # one-hot encoding: set index of the correct label to 1

training.append(bag)            
output.append(output_row)         

# convert to numpy arrays
training = np.array(training)                   #input features
output = np.array(output)                       #one-hot encoded label

##########################################################################################################
# build, visualize and fit the model


#build the model
model = Sequential()
model.add(Dense(8, input_shape=(len(training[0]),), activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(8, activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(len(output[0]), activation = 'softmax'))

#compile the model
model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

#visualize the model
plot_model(model, to_file='model_plot.png', show_shapes=True, show_layer_names=True)

img = plt.imread('model_plot.png')
plt.imshow(img)
plt.axis('off')
plt.show()