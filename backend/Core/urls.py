from django.urls import path
from .views import (
    CollaboratorsReadUpdateDeleteView,
    CollaboratorsView,
    ContactReadUpdateDeleteView,
    ContactView,
    SliderReadUpdateDeleteView,
    SliderView,
    SubscriberReadUpdateDeleteView,
    SubscribersEmailView,
    )



urlpatterns = [

    path('subscribe/', SubscribersEmailView.as_view(), name='subscribe'),
    path('subscribe/<int:pk>', SubscriberReadUpdateDeleteView.as_view(), name='subscribe'),

    path('contact/', ContactView.as_view(), name='contact'),
    path('contact/<int:pk>', ContactReadUpdateDeleteView.as_view(), name='contact'),

    path('collaborator/', CollaboratorsView.as_view(), name='collaborator'),
    path('collaborator/<int:pk>', CollaboratorsReadUpdateDeleteView.as_view(), name='collaborator'),

    path('slider/', SliderView.as_view(), name='slider'),
    path('slider/<int:pk>', SliderReadUpdateDeleteView.as_view(), name='slider'),
]
