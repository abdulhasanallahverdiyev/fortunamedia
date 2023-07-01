from rest_framework import serializers
from .models import Collaborators, Contacts, Slider, Subscribers


# Subscriber Serializer
class SubscribersEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscribers
        fields = ['id', 'email', 'created_at', 'updated_at']


# Contact Serializer
class ContactSerializers(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = '__all__'


# Collaborator Serializer
class CollaboratorsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Collaborators
        fields = '__all__'


# Slider Serializers
class SliderSerializers(serializers.ModelSerializer):
    class Meta:
        model = Slider
        fields = '__all__'
