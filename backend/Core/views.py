from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Collaborators, Contacts, Slider, Subscribers
from .serializers import CollaboratorsSerializers, ContactSerializers, SliderSerializers, SubscribersEmailSerializer


def index(request):
    return render(request, 'index.html')

# Subscriber GET & POST

class SubscribersEmailView(ListCreateAPIView):
    queryset = Subscribers.objects.all()
    serializer_class = SubscribersEmailSerializer

# Subscriber GET & PUT & DELETE

class SubscriberReadUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = Subscribers.objects.all()
    serializer_class = SubscribersEmailSerializer

# Contact GET & POST

class ContactView(ListCreateAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactSerializers

# Contact GET & PUT & PATCH & DELETE

class ContactReadUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactSerializers

# Collaborator GET & POST

class CollaboratorsView(ListCreateAPIView):
    queryset = Collaborators.objects.all()
    serializer_class = CollaboratorsSerializers

# Collaborator GET & PUT & PATCH & DELETE

class CollaboratorsReadUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = Collaborators.objects.all()
    serializer_class = CollaboratorsSerializers


# Slider GET & POST
class SliderView(ListCreateAPIView):
    queryset = Slider.objects.all()
    serializer_class = SliderSerializers


# Slider GET & PUT & PATCH & DELETE
class SliderReadUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = Slider.objects.all()
    serializer_class = SliderSerializers